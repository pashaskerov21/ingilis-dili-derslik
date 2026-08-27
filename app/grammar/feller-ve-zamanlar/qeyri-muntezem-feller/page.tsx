import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "qeyri-muntezem-feller",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="feller-ve-zamanlar"
      sectionSlug="qeyri-muntezem-feller"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Qeyri-müntəzəm fellərin heç bir sabit orfoqrafiya qaydası yoxdur — hər
          biri ayrıca əzbərlənməlidir (bax: 4.6.6). Lakin təsadüfi görünsələr
          də, dörd təkrarlanan <strong>naxışa</strong> bölünürlər. Cədvəl bu
          naxışlara görə qruplaşdırılıb ki, əzbərləmə prosesi struktursuz yığın
          kimi deyil, nümunə tanıma kimi getsin.
        </p>

        {/* ---------- QRUP A ---------- */}
        <section className="space-y-3">
          <h3 className="font-display text-xl text-foreground">
            Qrup A — Hər üç forma eynidir
          </h3>
          <p className="text-sm text-muted">
            I forma = II forma = III forma. Ən sadə qrup — heç nə dəyişmir.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line">
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="p-2 font-display text-foreground">I</th>
                  <th className="p-2 font-display text-foreground">II</th>
                  <th className="p-2 font-display text-foreground">III</th>
                  <th className="p-2 font-display text-foreground">Mənası</th>
                </tr>
              </thead>
              <tbody className="text-foreground font-mono">
                {[
                  ["cut", "cut", "cut", "kəsmək"],
                  ["hit", "hit", "hit", "vurmaq"],
                  ["hurt", "hurt", "hurt", "incitmək"],
                  ["put", "put", "put", "qoymaq"],
                  ["set", "set", "set", "qurmaq, təyin etmək"],
                  ["cost", "cost", "cost", "başa gəlmək"],
                  ["let", "let", "let", "icazə vermək"],
                  ["shut", "shut", "shut", "bağlamaq"],
                  ["spread", "spread", "spread", "yaymaq"],
                  ["bet", "bet", "bet", "mərc etmək"],
                  ["burst", "burst", "burst", "partlamaq"],
                  ["cast", "cast", "cast", "atmaq"],
                  ["quit", "quit", "quit", "tərk etmək"],
                  ["split", "split", "split", "bölmək"],
                  ["broadcast", "broadcast", "broadcast", "yayımlamaq"],
                  ["read", "read", "read", "oxumaq"],
                  ["rid", "rid", "rid", "xilas etmək"],
                  ["shed", "shed", "shed", "tökmək"],
                  ["wet", "wet", "wet", "islatmaq"],
                  ["bid", "bid", "bid", "təklif etmək"],
                ].map(([a, b, c, m]) => (
                  <tr key={a} className="border-b border-line last:border-b-0">
                    <td className="p-2">{a}</td>
                    <td className="p-2">{b}</td>
                    <td className="p-2">{c}</td>
                    <td className="p-2 font-body text-muted">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- QRUP D ---------- */}
        <section className="space-y-3">
          <h3 className="font-display text-xl text-foreground">
            Qrup D — I və III forma eyni, II fərqlidir
          </h3>
          <p className="text-sm text-muted">Ən kiçik, nadir qrup.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line">
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="p-2 font-display text-foreground">I</th>
                  <th className="p-2 font-display text-foreground">II</th>
                  <th className="p-2 font-display text-foreground">III</th>
                  <th className="p-2 font-display text-foreground">Mənası</th>
                </tr>
              </thead>
              <tbody className="text-foreground font-mono">
                {[
                  ["run", "ran", "run", "qaçmaq"],
                  ["come", "came", "come", "gəlmək"],
                  ["become", "became", "become", "olmaq"],
                  ["overcome", "overcame", "overcome", "öhdəsindən gəlmək"],
                ].map(([a, b, c, m]) => (
                  <tr key={a} className="border-b border-line last:border-b-0">
                    <td className="p-2">{a}</td>
                    <td className="p-2">{b}</td>
                    <td className="p-2">{c}</td>
                    <td className="p-2 font-body text-muted">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- QRUP B ---------- */}
        <section className="space-y-3">
          <h3 className="font-display text-xl text-foreground">
            Qrup B — II və III forma eyni, I-dən fərqlidir
          </h3>
          <p className="text-sm text-muted">
            Ən böyük qrup — ən çox fel burada.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line">
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="p-2 font-display text-foreground">I</th>
                  <th className="p-2 font-display text-foreground">II</th>
                  <th className="p-2 font-display text-foreground">III</th>
                  <th className="p-2 font-display text-foreground">Mənası</th>
                </tr>
              </thead>
              <tbody className="text-foreground font-mono">
                {[
                  ["bring", "brought", "brought", "gətirmək"],
                  ["buy", "bought", "bought", "almaq"],
                  ["catch", "caught", "caught", "tutmaq"],
                  ["teach", "taught", "taught", "öyrətmək"],
                  ["think", "thought", "thought", "düşünmək"],
                  ["fight", "fought", "fought", "döyüşmək"],
                  ["seek", "sought", "sought", "axtarmaq"],
                  ["bend", "bent", "bent", "əymək"],
                  ["build", "built", "built", "tikmək"],
                  ["lend", "lent", "lent", "borc vermək"],
                  ["send", "sent", "sent", "göndərmək"],
                  ["spend", "spent", "spent", "xərcləmək"],
                  ["sleep", "slept", "slept", "yatmaq"],
                  ["keep", "kept", "kept", "saxlamaq"],
                  ["sweep", "swept", "swept", "süpürmək"],
                  ["weep", "wept", "wept", "ağlamaq"],
                  ["feel", "felt", "felt", "hiss etmək"],
                  ["deal", "dealt", "dealt", "məşğul olmaq"],
                  ["mean", "meant", "meant", "demək istəmək"],
                  ["lead", "led", "led", "aparmaq"],
                  ["feed", "fed", "fed", "yemləmək"],
                  ["meet", "met", "met", "görüşmək"],
                  ["breed", "bred", "bred", "çoxaltmaq"],
                  ["speed", "sped", "sped", "sürətlənmək"],
                  ["hold", "held", "held", "tutmaq"],
                  ["sell", "sold", "sold", "satmaq"],
                  ["tell", "told", "told", "demək"],
                  ["find", "found", "found", "tapmaq"],
                  ["grind", "ground", "ground", "üyütmək"],
                  ["wind", "wound", "wound", "qurmaq (saat)"],
                  ["bind", "bound", "bound", "bağlamaq"],
                  ["stand", "stood", "stood", "dayanmaq"],
                  ["understand", "understood", "understood", "başa düşmək"],
                  ["win", "won", "won", "qazanmaq"],
                  ["dig", "dug", "dug", "qazmaq"],
                  ["stick", "stuck", "stuck", "yapışmaq"],
                  ["strike", "struck", "struck", "vurmaq"],
                  ["swing", "swung", "swung", "yellənmək"],
                  ["sting", "stung", "stung", "sancmaq"],
                  ["sling", "slung", "slung", "atmaq"],
                  ["hang", "hung", "hung", "asmaq"],
                  ["shine", "shone", "shone", "parlamaq"],
                  ["light", "lit", "lit", "yandırmaq"],
                  ["lose", "lost", "lost", "itirmək"],
                  ["shoot", "shot", "shot", "atəş açmaq"],
                  ["sit", "sat", "sat", "oturmaq"],
                  ["spit", "spat", "spat", "tüpürmək"],
                  ["get", "got", "got", "almaq, əldə etmək"],
                  ["have", "had", "had", "malik olmaq"],
                  ["hear", "heard", "heard", "eşitmək"],
                  ["say", "said", "said", "demək"],
                  ["pay", "paid", "paid", "ödəmək"],
                  ["lay", "laid", "laid", "qoymaq, sərmək"],
                  ["leave", "left", "left", "tərk etmək"],
                  ["flee", "fled", "fled", "qaçmaq (təhlükədən)"],
                  ["creep", "crept", "crept", "sürünmək"],
                  ["leap", "leapt", "leapt", "hoppanmaq"],
                  ["kneel", "knelt", "knelt", "diz çökmək"],
                  ["dwell", "dwelt", "dwelt", "yaşamaq"],
                  ["cling", "clung", "clung", "yapışmaq"],
                  ["fling", "flung", "flung", "atmaq"],
                  ["slink", "slunk", "slunk", "sivişmək"],
                  ["string", "strung", "strung", "düzmək (sap)"],
                  ["wring", "wrung", "wrung", "sıxmaq"],
                  ["bleed", "bled", "bled", "qanamaq"],
                  ["mislead", "misled", "misled", "yanlış yönləndirmək"],
                  [
                    "misunderstand",
                    "misunderstood",
                    "misunderstood",
                    "səhv başa düşmək",
                  ],
                  ["make", "made", "made", "düzəltmək"],
                ].map(([a, b, c, m]) => (
                  <tr key={a} className="border-b border-line last:border-b-0">
                    <td className="p-2">{a}</td>
                    <td className="p-2">{b}</td>
                    <td className="p-2">{c}</td>
                    <td className="p-2 font-body text-muted">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- QRUP C ---------- */}
        <section className="space-y-3">
          <h3 className="font-display text-xl text-foreground">
            Qrup C — Hər üç forma fərqlidir
          </h3>
          <p className="text-sm text-muted">
            Ən çətin qrup — heç bir forma təkrarlanmır, tam əzbər tələb edir.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-line">
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="p-2 font-display text-foreground">I</th>
                  <th className="p-2 font-display text-foreground">II</th>
                  <th className="p-2 font-display text-foreground">III</th>
                  <th className="p-2 font-display text-foreground">Mənası</th>
                </tr>
              </thead>
              <tbody className="text-foreground font-mono">
                {[
                  ["be", "was/were", "been", "olmaq"],
                  ["begin", "began", "begun", "başlamaq"],
                  ["drink", "drank", "drunk", "içmək"],
                  ["sing", "sang", "sung", "oxumaq (mahnı)"],
                  ["ring", "rang", "rung", "zəng etmək"],
                  ["sink", "sank", "sunk", "batmaq"],
                  ["swim", "swam", "swum", "üzmək"],
                  ["shrink", "shrank", "shrunk", "kiçilmək"],
                  ["spring", "sprang", "sprung", "sıçramaq"],
                  ["stink", "stank", "stunk", "iylənmək"],
                  ["know", "knew", "known", "bilmək"],
                  ["grow", "grew", "grown", "böyümək"],
                  ["throw", "threw", "thrown", "atmaq"],
                  ["blow", "blew", "blown", "əsmək"],
                  ["fly", "flew", "flown", "uçmaq"],
                  ["draw", "drew", "drawn", "çəkmək"],
                  ["see", "saw", "seen", "görmək"],
                  ["give", "gave", "given", "vermək"],
                  ["forgive", "forgave", "forgiven", "bağışlamaq"],
                  ["take", "took", "taken", "götürmək"],
                  ["mistake", "mistook", "mistaken", "səhv etmək"],
                  ["shake", "shook", "shaken", "silkələmək"],
                  ["wake", "woke", "woken", "oyanmaq"],
                  ["break", "broke", "broken", "sındırmaq"],
                  ["speak", "spoke", "spoken", "danışmaq"],
                  ["steal", "stole", "stolen", "oğurlamaq"],
                  ["freeze", "froze", "frozen", "dondurmaq"],
                  ["choose", "chose", "chosen", "seçmək"],
                  ["ride", "rode", "ridden", "minmək"],
                  ["write", "wrote", "written", "yazmaq"],
                  ["drive", "drove", "driven", "sürmək"],
                  ["rise", "rose", "risen", "qalxmaq"],
                  ["arise", "arose", "arisen", "meydana çıxmaq"],
                  ["bite", "bit", "bitten", "dişləmək"],
                  ["hide", "hid", "hidden", "gizlətmək"],
                  ["fall", "fell", "fallen", "düşmək"],
                  ["eat", "ate", "eaten", "yemək"],
                  ["forget", "forgot", "forgotten", "unutmaq"],
                  ["forbid", "forbade", "forbidden", "qadağan etmək"],
                  ["go", "went", "gone", "getmək"],
                  ["do", "did", "done", "etmək"],
                  ["lie", "lay", "lain", "uzanmaq"],
                  ["swear", "swore", "sworn", "and içmək"],
                  ["tear", "tore", "torn", "cırmaq"],
                  ["wear", "wore", "worn", "geyinmək"],
                  ["bear", "bore", "born", "doğmaq, dözmək"],
                  ["weave", "wove", "woven", "toxumaq"],
                  ["withdraw", "withdrew", "withdrawn", "geri çəkmək"],
                  ["overthrow", "overthrew", "overthrown", "devirmək"],
                  ["undertake", "undertook", "undertaken", "öhdəsinə götürmək"],
                  ["overtake", "overtook", "overtaken", "ötmək"],
                  ["undergo", "underwent", "undergone", "keçirmək (təcrübə)"],
                  ["show", "showed", "shown", "göstərmək"],
                ].map(([a, b, c, m]) => (
                  <tr key={a} className="border-b border-line last:border-b-0">
                    <td className="p-2">{a}</td>
                    <td className="p-2">{b}</td>
                    <td className="p-2">{c}</td>
                    <td className="p-2 font-body text-muted">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </LessonShell>
  );
}
