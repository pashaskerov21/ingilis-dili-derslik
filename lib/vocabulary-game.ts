// "Yaz və Yoxla" oyununun saf məntiqi — state saxlamır, komponentlərdən çağırılır.
import type { VocabSearchEntry } from "@/lib/types";

/**
 * `categories` yalnız `mergeDuplicateWordsForOverallMode`-da bir neçə
 * kateqoriyadan gələn giriş bir sözdə birləşəndə doldurulur — həmin sözün
 * bütün mənbə kateqoriyalarının adlarını saxlayır (metadata göstərilməsi
 * üçün). Tək girişlərdə undefined qalır, `categoryTitleAz` kifayətdir.
 */
export type GameWord = VocabSearchEntry & { categories?: string[] };

export type GameDirection = "en-az" | "az-en";

export type GameScope =
  | { type: "overall" }
  | { type: "category"; slug: string; titleAz: string };

/** lib/vocabulary-highscores.ts-in gözlədiyi scope formatına çevirir. */
export function gameScopeToHighScoreScope(
  scope: GameScope,
): "overall" | { category: string } {
  return scope.type === "overall" ? "overall" : { category: scope.slug };
}

/**
 * Xam tərcümə mətnini qəbul edilən cavablar massivinə çevirir.
 * "/" alternativ formaları, mötərizə isə əlavə izahı bildirir (nəzərə alınmır).
 * Məs: "xala / bibi (qeyri-rəsmi)" → ["xala", "bibi"]
 */
export function parseAcceptedAnswers(rawTranslation: string): string[] {
  const parts = rawTranslation.split("/").map((p) => p.trim());
  const cleaned = parts.map((p) => p.replace(/\s*\([^)]*\)\s*/g, "").trim());
  const normalized = cleaned.filter(Boolean).map((c) => c.toLowerCase());
  return Array.from(new Set(normalized));
}

/** Defisləri boşluqla əvəz edir ki, "mother-in-law" / "mother in law" eyni sayılsın. */
function normalizeForComparison(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface SpellingRule {
  pattern: RegExp;
  replacement: string;
}

/**
 * Ən çox yayılmış Britaniya/Amerika yazılış fərqləri (bax: AGENTS.md
 * tapşırığı — mükəmməl olması tələb olunmur, yalnız ən çox rast gəlinən
 * halları tutur). Hər qayda hər iki istiqamətdə tətbiq olunur ki, hansı
 * formanın JSON-da yazıldığı önəmli olmasın.
 */
const SPELLING_RULES: SpellingRule[] = [
  { pattern: /our(ful|less|ed|ing|s)?$/, replacement: "or$1" }, // colour(ful/less/ed) -> color(ful/less/ed)
  { pattern: /or(ful|less|ed|ing|s)?$/, replacement: "our$1" }, // color(ful/less/ed) -> colour(ful/less/ed)
  { pattern: /isation$/, replacement: "ization" }, // organisation -> organization
  { pattern: /ization$/, replacement: "isation" },
  { pattern: /ise$/, replacement: "ize" }, // organise -> organize
  { pattern: /ize$/, replacement: "ise" },
  { pattern: /yse$/, replacement: "yze" }, // analyse -> analyze
  { pattern: /yze$/, replacement: "yse" },
  { pattern: /([^aeiou])re$/, replacement: "$1er" }, // centre -> center
  { pattern: /([^aeiou])er$/, replacement: "$1re" }, // center -> centre
  { pattern: /ell(ing|ed|er)$/, replacement: "el$1" }, // travelling -> traveling
  { pattern: /el(ing|ed|er)$/, replacement: "ell$1" }, // traveling -> travelling
];

function getSpellingVariants(word: string): string[] {
  const variants = new Set<string>();
  for (const rule of SPELLING_RULES) {
    if (rule.pattern.test(word)) {
      variants.add(word.replace(rule.pattern, rule.replacement));
    }
  }
  return Array.from(variants);
}

function expandWithSpellingVariants(normalizedValue: string): string[] {
  return [normalizedValue, ...getSpellingVariants(normalizedValue)];
}

export function checkAnswer(
  userInput: string,
  rawCorrectAnswer: string,
): boolean {
  const accepted = parseAcceptedAnswers(rawCorrectAnswer);

  const acceptedForms = new Set<string>();
  for (const answer of accepted) {
    for (const form of expandWithSpellingVariants(
      normalizeForComparison(answer),
    )) {
      acceptedForms.add(form);
    }
  }

  const inputForms = expandWithSpellingVariants(
    normalizeForComparison(userInput),
  );
  return inputForms.some((form) => acceptedForms.has(form));
}

/** İstiqamətə görə göstərilən sual sözü. */
export function getPrompt(word: GameWord, direction: GameDirection): string {
  return direction === "en-az"
    ? word.word
    : getRandomTranslationVariant(word.translation);
}

/**
 * AZ→EN sualında tərcümə sahəsi "/" ilə bir neçə variant saxlaya bilər
 * (məs. "xala / bibi") — tam mətni sual kimi göstərmək çaşdırıcıdır, ona
 * görə `parseAcceptedAnswers`-in çıxardığı variantlardan təsadüfi biri
 * seçilir. Cavab yoxlaması dəyişmir — bütün variantlar hələ də qəbul edilir.
 */
export function getRandomTranslationVariant(rawTranslation: string): string {
  if (!rawTranslation.includes("/")) return rawTranslation;

  const variants = parseAcceptedAnswers(rawTranslation);
  if (variants.length === 0) return rawTranslation;

  return variants[Math.floor(Math.random() * variants.length)];
}

/** İstiqamətə görə gözlənilən düzgün cavab. */
export function getCorrectAnswer(
  word: GameWord,
  direction: GameDirection,
): string {
  return direction === "en-az" ? word.translation : word.word;
}

/**
 * "Ümumi" rejim üçün hovuz hazırlayarkən eyni ingilis sözünü (fərqli
 * kateqoriyalarda fərqli mənalarla) BİR girişə birləşdirir — söz oyunda
 * yalnız bir dəfə görünür, amma bütün kateqoriyalardakı tərcümələri "/"
 * ilə ayrılmış vahid tərcümə mətnində saxlanılır. `checkAnswer` artıq "/"
 * ilə ayrılmış variantların hər birini ayrıca qəbul edilən cavab kimi
 * emal etdiyi üçün əlavə dəyişiklik tələb olunmur. Kateqoriya-daxili
 * rejimə toxunmur (yalnız "overall" hovuzuna tətbiq olunur).
 */
export function mergeDuplicateWordsForOverallMode(
  words: GameWord[],
): GameWord[] {
  const order: string[] = [];
  const groups = new Map<string, GameWord[]>();

  for (const word of words) {
    const key = word.word.trim().toLowerCase();
    if (!groups.has(key)) {
      order.push(key);
      groups.set(key, []);
    }
    groups.get(key)!.push(word);
  }

  return order.map((key) => {
    const group = groups.get(key)!;
    if (group.length === 1) return group[0];

    const seenTranslations = new Set<string>();
    const translationParts: string[] = [];

    for (const entry of group) {
      for (const part of entry.translation.split("/").map((p) => p.trim())) {
        if (!part) continue;
        const normalized = part
          .replace(/\s*\([^)]*\)\s*/g, "")
          .trim()
          .toLowerCase();
        if (!normalized || seenTranslations.has(normalized)) continue;
        seenTranslations.add(normalized);
        translationParts.push(part);
      }
    }

    const categories = Array.from(
      new Set(group.map((entry) => entry.categoryTitleAz)),
    );

    return {
      ...group[0],
      translation: translationParts.join(" / "),
      categories,
    };
  });
}

/**
 * Ekranda göstərilən sözün metadata sətri üçün hissələr: "ümumi" rejimdə
 * kateqoriya(lar), səviyyə və nitq hissəsi; kateqoriya-daxili rejimdə
 * kateqoriya buraxılır (artıq bəllidir). Bu hissələr HƏMİŞƏ `word`
 * parametrinin öz metadatasına aiddir — sinonim başqa sözlərin metadatası
 * heç vaxt qarışdırılmır.
 */
export function getWordMetadataParts(
  word: GameWord,
  scope: GameScope,
): string[] {
  const parts: string[] = [];

  parts.push(
    word.categories ? word.categories.join(", ") : word.categoryTitleAz,
  );
  parts.push(word.level);
  parts.push(word.partOfSpeech);

  return parts;
}

/** Fisher-Yates qarışdırma — orijinal massivi dəyişmir. */
export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
