import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="numuneler"
    >
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 2.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.1</span>
            <h3 className="font-display text-lg text-foreground">
              Sayıla bilən / bilməyən isimlər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We collected valuable feedback from the beta testers.",
                az: "Beta testerlərdən dəyərli rəylər topladıq.",
              },
              {
                en: "The startup lacked sufficient funding to scale.",
                az: "Startapın böyümək üçün kifayət qədər maliyyəsi yox idi.",
              },
              {
                en: "He offered practical advice on managing remote teams.",
                az: "O, uzaqdan komandaları idarə etmək barədə praktik məsləhət verdi.",
              },
              {
                en: "The shipment included three pieces of equipment.",
                az: "Göndərmə üç ədəd avadanlıqdan ibarət idi.",
              },
              {
                en: "There was heavy traffic on the way to the airport.",
                az: "Aeroporta gedən yolda ağır sıxlıq var idi.",
              },
              {
                en: "I bought a chair and a lamp for my new office.",
                az: "Yeni ofisim üçün bir stul və bir lampa aldım.",
              },
              {
                en: "Her knowledge of the subject impressed the panel.",
                az: "Onun mövzu üzrə bilikləri komissiyanı təsir altına saldı.",
              },
              {
                en: "We need permission from the landlord before renovating.",
                az: "Təmir etməzdən əvvəl ev sahibindən icazə lazımdır.",
              },
            ]}
          />
        </section>

        {/* 2.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.2</span>
            <h3 className="font-display text-lg text-foreground">
              Cəm isimlərin düzəldilməsi
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The museum houses several rare artifacts.",
                az: "Muzeydə bir neçə nadir eksponat saxlanılır.",
              },
              {
                en: "Both companies filed their taxes late this year.",
                az: "Hər iki şirkət bu il vergilərini gecikdirərək təqdim etdi.",
              },
              {
                en: "The library added new shelves for the archive.",
                az: "Kitabxana arxiv üçün yeni rəflər əlavə etdi.",
              },
              {
                en: "Two thieves were caught on the security cameras.",
                az: "İki oğru təhlükəsizlik kameralarında tutuldu.",
              },
              {
                en: "The children's classroom was recently renovated.",
                az: "Uşaqların sinif otağı bu yaxınlarda təmir edilib.",
              },
              {
                en: "We spotted several deer near the cabin.",
                az: "Koma yaxınlığında bir neçə maral gördük.",
              },
              {
                en: "His analysis of the statistics was thorough.",
                az: "Onun statistika təhlili hərtərəfli idi.",
              },
              {
                en: "The photos from the conference are already uploaded.",
                az: "Konfransdan olan fotolar artıq yüklənib.",
              },
            ]}
          />
        </section>

        {/* 2.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.3</span>
            <h3 className="font-display text-lg text-foreground">a / an</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "She was offered a promotion after the review.",
                az: "Ona qiymətləndirmədən sonra vəzifə artımı təklif olundu.",
              },
              {
                en: "He booked an appointment with a specialist.",
                az: "O, bir mütəxəssislə görüş təyin etdi.",
              },
              {
                en: "It took almost an hour to resolve the issue.",
                az: "Problemi həll etmək demək olar bir saat çəkdi.",
              },
              {
                en: "This is a one-of-a-kind opportunity.",
                az: "Bu, tayı-bərabəri olmayan bir fürsətdir.",
              },
              {
                en: "They hired a UN consultant for the project.",
                az: "Onlar layihə üçün bir BMT konsultantı işə götürdülər.",
              },
              {
                en: "She has an unusual approach to problem-solving.",
                az: "Onun problem həllinə qeyri-adi bir yanaşması var.",
              },
              {
                en: "He gave a humble response to the criticism.",
                az: "O, tənqidə təvazökar bir cavab verdi.",
              },
              {
                en: "This is an honor I did not expect.",
                az: "Bu, gözləmədiyim bir şərəfdir.",
              },
            ]}
          />
        </section>

        {/* 2.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.4</span>
            <h3 className="font-display text-lg text-foreground">the</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The results of the survey were released today.",
                az: "Sorğunun nəticələri bu gün açıqlandı.",
              },
              {
                en: "Can you close the window? It's getting cold.",
                az: "Pəncərəni bağlaya bilərsən? Soyuyur.",
              },
              {
                en: "The moon looked especially bright last night.",
                az: "Ay dünən gecə xüsusilə parlaq görünürdü.",
              },
              {
                en: "This is the cheapest option on the list.",
                az: "Bu, siyahıdakı ən ucuz seçimdir.",
              },
              {
                en: "The economy struggled throughout the 1980s.",
                az: "İqtisadiyyat 1980-ci illər boyunca çətinlik çəkdi.",
              },
              {
                en: "The wealthy often invest in real estate.",
                az: "Varlılar tez-tez daşınmaz əmlaka investisiya edir.",
              },
              {
                en: "He is the only person who noticed the mistake.",
                az: "O, səhvi görən yeganə şəxsdir.",
              },
              {
                en: "The chairman of the board resigned unexpectedly.",
                az: "İdarə heyətinin sədri gözlənilmədən istefa verdi.",
              },
            ]}
          />
        </section>

        {/* 2.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.5</span>
            <h3 className="font-display text-lg text-foreground">
              Artiklsiz işlənmə
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Honesty builds trust over time.",
                az: "Dürüstlük zamanla etimad yaradır.",
              },
              {
                en: "He grew up in Italy but works in Canada now.",
                az: "O, İtaliyada böyüyüb, indi Kanadada işləyir.",
              },
              {
                en: "She speaks Portuguese fluently.",
                az: "O, portuqal dilində sərbəst danışır.",
              },
              {
                en: "We usually have dinner around eight.",
                az: "Biz adətən saat səkkizə yaxın şam yeməyi yeyirik.",
              },
              {
                en: "He was in prison for two years before his release.",
                az: "O, azad olunmazdan əvvəl iki il həbsdə idi.",
              },
              {
                en: "The visitors toured the prison as part of the exhibit.",
                az: "Ziyarətçilər sərginin bir hissəsi kimi həbsxananı gəzdilər.",
              },
              {
                en: "She studies architecture at a well-known university.",
                az: "O, tanınmış bir universitetdə memarlıq oxuyur.",
              },
              {
                en: "Breaking news: markets close higher today.",
                az: "Son xəbər: bazarlar bu gün yüksək bağlandı. (başlıq üslubu)",
              },
            ]}
          />
        </section>

        {/* 2.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.6</span>
            <h3 className="font-display text-lg text-foreground">
              Mülkiyyət halı ('s)
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "My brother's flight was delayed by two hours.",
                az: "Qardaşımın uçuşu iki saat gecikdi.",
              },
              {
                en: "The workers' union demanded better conditions.",
                az: "İşçilər həmkarlar ittifaqı daha yaxşı şərait tələb etdi.",
              },
              {
                en: "The women's team won the championship this year.",
                az: "Qadınlar komandası bu il çempionatı qazandı.",
              },
              {
                en: "That remark of his caused quite a stir.",
                az: "Onun həmin qeydi kifayət qədər səs-küy yaratdı.",
              },
              {
                en: "The Minister of Education's speech was well received.",
                az: "Təhsil Nazirinin çıxışı yaxşı qarşılandı.",
              },
              {
                en: "We need a month's notice before cancelling.",
                az: "Ləğv etməzdən əvvəl bir aylıq xəbərdarlıq lazımdır.",
              },
              {
                en: "The bakery's bread sells out by noon every day.",
                az: "Çörəkxananın çörəyi hər gün günortaya qədər satılıb qurtarır.",
              },
              {
                en: "The device lost its signal during the storm.",
                az: "Cihaz fırtına zamanı siqnalını itirdi.",
              },
            ]}
          />
        </section>

        {/* 2.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.7</span>
            <h3 className="font-display text-lg text-foreground">
              Kəmiyyət I: some / any / much / many / enough
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Could I get some water, please?",
                az: "Bir az su ala bilərəmmi?",
              },
              {
                en: "I don't think there's any point in arguing.",
                az: "Mübahisə etməyin heç bir faydası olduğunu düşünmürəm.",
              },
              {
                en: "There isn't much we can do at this stage.",
                az: "Bu mərhələdə edə biləcəyimiz çox şey yoxdur.",
              },
              {
                en: "Many of the guests left before the ceremony ended.",
                az: "Qonaqların çoxu mərasim bitmədən getdi.",
              },
              {
                en: "We have a few minutes before the train leaves.",
                az: "Qatar getməzdən əvvəl bir neçə dəqiqəmiz var.",
              },
              {
                en: "Unfortunately, little can be done to fix this now.",
                az: "Təəssüf ki, indi bunu düzəltmək üçün az şey etmək olar.",
              },
              {
                en: "Is there enough space for everyone in the car?",
                az: "Maşında hamı üçün kifayət qədər yer var?",
              },
              {
                en: "He didn't sleep enough before the exam.",
                az: "O, imtahandan əvvəl kifayət qədər yatmadı.",
              },
            ]}
          />
        </section>

        {/* 2.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.8</span>
            <h3 className="font-display text-lg text-foreground">
              Kəmiyyət II: every / each / all / most / no / none
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Every applicant must complete an assessment.",
                az: "Hər müraciət edən qiymətləndirmə tamamlamalıdır.",
              },
              {
                en: "Each department has its own budget this year.",
                az: "Bu il hər şöbənin öz büdcəsi var.",
              },
              {
                en: "All visitors must sign in at the front desk.",
                az: "Bütün ziyarətçilər qeydiyyat masasında qeydiyyatdan keçməlidir.",
              },
              {
                en: "Most of the feedback we received was constructive.",
                az: "Aldığımız rəylərin əksəriyyəti konstruktiv idi.",
              },
              {
                en: "There's no simple fix for this kind of failure.",
                az: "Bu cür nasazlıq üçün sadə həll yolu yoxdur.",
              },
              {
                en: "None of the witnesses could confirm the timeline.",
                az: "Şahidlərin heç biri vaxt ardıcıllığını təsdiqləyə bilmədi.",
              },
              {
                en: "We spoke to each of them individually.",
                az: "Onların hər biri ilə ayrı-ayrılıqda danışdıq.",
              },
              {
                en: "The souvenirs are priced at five dollars each.",
                az: "Suvenirlər hər biri beş dollara qiymətləndirilib.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
