/** data/grammar.json faylının struktur tipləri. */

/** Bir fəslin daxilindəki tək dərs bölməsi. */
export interface Section {
  id: number;
  /** Aid olduğu fəslin id-si. */
  chapterId: number;
  /** URL parçası: /grammar/[chapterSlug]/[slug] */
  slug: string;
  /** Göstərilən kod, məsələn "1.1". */
  code: string;
  /** İngiliscə başlıq. */
  title: string;
  /** Azərbaycanca başlıq — interfeysdə əsas göstərilən. */
  titleAz: string;
  /** Bir cümləlik izah. */
  summary: string;
  /** Dərsin məzmunu yazılıbmı. */
  hasContent: boolean;
}

/** Fəslin sonundakı xülasə səhifəsi — `sections` massivindən kənardadır. */
export interface ChapterReview {
  /** URL parçası: /grammar/[chapterSlug]/[slug] */
  slug: string;
  /** İngiliscə başlıq. */
  title: string;
  /** Azərbaycanca başlıq — interfeysdə əsas göstərilən. */
  titleAz: string;
  /** Bir cümləlik izah. */
  description: string;
  /** Xülasənin məzmunu yazılıbmı. */
  hasContent: boolean;
}

/** Fəslin sonundakı nümunə bankı — `sections` massivindən kənardadır. */
export interface ExampleBank {
  /** URL parçası: /grammar/[chapterSlug]/[slug] */
  slug: string;
  /** İngiliscə başlıq. */
  title: string;
  /** Azərbaycanca başlıq — interfeysdə əsas göstərilən. */
  titleAz: string;
  /** Bir cümləlik izah. */
  description: string;
  /** Nümunə bankının məzmunu yazılıbmı. */
  hasContent: boolean;
}

/** Qrammatika kurikulumunun bir fəsli. */
export interface Chapter {
  id: number;
  /** URL parçası: /grammar/[slug] */
  slug: string;
  /** Göstərilən kod, məsələn "01". */
  code: string;
  title: string;
  titleAz: string;
  description: string;
  sections: Section[];
  /** Fəslin bütün bölmələrini bir yerə yığan xülasə səhifəsi. */
  chapterReview: ChapterReview;
  /** Bölmələrə aid əlavə nümunələri toplayan səhifə. */
  exampleBank: ExampleBank;
}

export interface GrammarMeta {
  schemaVersion: number;
  module: string;
}

/** data/grammar.json faylının kök obyekti. */
export interface GrammarData {
  meta: GrammarMeta;
  chapters: Chapter[];
}

/* ------------------------------------------------------------------ */
/* Dərs məzmunu — data/lessons/*.json                                  */
/* ------------------------------------------------------------------ */

/** İngiliscə cümlə + Azərbaycanca tərcüməsi. */
export interface ExamplePair {
  en: string;
  az: string;
}

/** Səhv/düzgün cümlə cütü və izahı. */
export interface ContrastPair {
  wrong: string;
  right: string;
  az: string;
}

/** Dərsin giriş paraqrafı. */
export interface IntroBlock {
  type: 'intro';
  text: string;
}

/** Nömrələnmiş qayda — mətndə **qalın** vurğu dəstəklənir. */
export interface RuleBlock {
  type: 'rule';
  /** Qaydanın nömrəsi, məsələn "1.1.1". */
  number: string;
  text: string;
  examples: ExamplePair[];
}

/** Başlıqlı nümunə dəsti. */
export interface ExampleGroupBlock {
  type: 'example-group';
  title: string;
  examples: ExamplePair[];
}

/** Azərbaycan dili ilə müqayisə qeydi. */
export interface ContrastNoteBlock {
  type: 'contrast-note';
  title: string;
  text: string;
  pairs: ContrastPair[];
}

/** Tipik səhvlər cədvəli. */
export interface MistakeTableBlock {
  type: 'mistake-table';
  rows: ContrastPair[];
}

/** Bir məşq bəndi. */
export interface ExerciseItem {
  /** Sual mətni — boşluqlu cümlə və ya səhv cümlə. */
  prompt: string;
  /** Düzgün cavab: söz/forma və ya tam düzəldilmiş cümlə. */
  answer: string;
  /** Cavabın Azərbaycanca tərcüməsi. */
  translation?: string;
}

/** Məşq tapşırığı. */
export interface ExerciseBlock {
  title: string;
  items: ExerciseItem[];
}

/** JSON blok axınında məşq — yalnız `type` ilə fərqlənir. */
export interface ExerciseLessonBlock extends ExerciseBlock {
  type: 'exercise';
}

/** Dərsdə ola bilən bütün blok tipləri. */
export type LessonBlock =
  | IntroBlock
  | RuleBlock
  | ExampleGroupBlock
  | ContrastNoteBlock
  | MistakeTableBlock
  | ExerciseLessonBlock;

/** Bir bölmənin tam dərs məzmunu. */
export interface Lesson {
  /** grammar.json-dakı Section.slug ilə eyni olmalıdır. */
  sectionSlug: string;
  /** grammar.json-dakı Chapter.slug ilə eyni olmalıdır. */
  chapterSlug: string;
  code: string;
  titleAz: string;
  titleEn: string;
  blocks: LessonBlock[];
}
