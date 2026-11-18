# JavaScript Introduction

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| high-level language | yüksək səviyyəli dil |
| interactive | interaktiv |
| behavior | davranış |
| runtime environment | icra mühiti |
| engine | mühərrik |
| standard | standart |
| committee | komitə |
| implementation | reallaşdırma |
| dynamically typed | dinamik tipli |
| statically typed | statik tipli |
| weakly typed | zəif tipli |
| type coercion | tipin avtomatik çevrilməsi |
| runtime error | icra zamanı xətası |
| multi-paradigm | çoxparadiqmalı |
| first-class function | birinci dərəcəli funksiya |
| prototype-based inheritance | prototip əsaslı varislik |
| class-based | sinif əsaslı |
| garbage collection | zibil yığımı |
| interpreted | interpretasiya olunan |
| compiled | kompilyasiya olunan |
| just-in-time (JIT) compilation | icra zamanı kompilyasiya |
| bytecode | bayt kod |
| machine code | maşın kodu |
| thread | axın |
| single-threaded | tək axınlı |
| call stack | çağırış yığını |
| event loop | hadisə dövrü |
| asynchronous | asinxron |
| blocking | bloklayan |
| callback | geri çağırış funksiyası |
| client-side | istifadəçi tərəfi |
| server-side | server tərəfi |
| library | kitabxana |
| framework | proqram çərçivəsi |
| ecosystem | ekosistem |
| dependency | asılılıq |

## 2. Interview Questions

### Question 1. What is JavaScript?

**Sual:** JavaScript nədir?

**Answer:** JavaScript is a high-level programming language. It was created to make web pages interactive. It is one of the three core web technologies, together with HTML and CSS. HTML defines structure, CSS defines appearance, and JavaScript defines behavior. Today it also runs outside the browser, for example on servers.

**Cavab:** JavaScript yüksək səviyyəli proqramlaşdırma dilidir. O, veb-səhifələri interaktiv etmək üçün yaradılmışdır. HTML və CSS ilə birlikdə, o, üç əsas veb texnologiyasından biridir. HTML strukturu, CSS xarici görünüşü, JavaScript isə davranışı müəyyən edir. Bu gün o, həmçinin brauzerdən kənarda – məsələn, serverlərdə də işləyir.

---

### Question 2. What is the difference between JavaScript and Java?

**Sual:** JavaScript ilə Java arasında fərq nədir?

**Answer:** JavaScript and Java are different languages with different designs. The name JavaScript was chosen mainly for marketing reasons in 1995. Java is statically typed and class-based. JavaScript is dynamically typed and prototype-based. Java code is compiled to bytecode and runs on the Java Virtual Machine. JavaScript code runs in a JavaScript engine.

**Cavab:** JavaScript və Java fərqli dizaynlara malik müxtəlif dillərdir. "JavaScript" adı 1995-ci ildə əsasən marketinq məqsədləri ilə seçilmişdir. Java statik tipləşdirilmiş və siniflərə əsaslanan dildir. JavaScript isə dinamik tipləşdirilmiş və prototiplərə əsaslanan dildir. Java kodu bayt-koda (bytecode) kompilyasiya olunur və Java Virtual Maşınında icra edilir. JavaScript kodu isə JavaScript mühərrikində icra olunur.

---

### Question 3. What is ECMAScript, and how did JavaScript originate?

**Sual:** ECMAScript nədir və JavaScript necə yaranıb?

**Answer:** JavaScript was created by Brendan Eich at Netscape in 1995. It was first called Mocha, then LiveScript. ECMAScript is the standard that defines the language. TC39, a committee of Ecma International, develops the standard ECMA-262. JavaScript is the best-known implementation of ECMAScript. ES6 (2015) was a major update, and new versions have been released every year since.

**Cavab:** JavaScript 1995-ci ildə Netscape şirkətində Brendan Eich tərəfindən yaradılmışdır. O, əvvəlcə Mocha, daha sonra isə LiveScript adlanırdı. ECMAScript bu dili müəyyən edən standartdır. Ecma International təşkilatının komitəsi olan TC39, ECMA-262 standartını hazırlayır. JavaScript, ECMAScript-in ən tanınmış reallaşdırmasıdır. ES6 (2015) mühüm bir yeniləmə idi və o vaxtdan bəri hər il yeni versiyalar buraxılır.

---

### Question 4. Where does JavaScript run, and what is a JavaScript engine?

**Sual:** JavaScript harada işləyir və JavaScript mühərriki nədir?

**Answer:** JavaScript runs in browsers and in other runtime environments. Node.js, Deno, and Bun are common runtimes outside the browser. A JavaScript engine is the program that parses and executes the code. V8 is used in Chrome and Node.js. SpiderMonkey is used in Firefox. JavaScriptCore is used in Safari. Browsers provide Web APIs such as the DOM, while Node.js provides APIs such as file system access.

**Cavab:** JavaScript brauzerlərdə və digər icra mühitlərində işləyir. Node.js, Deno və Bun brauzerdən kənarda istifadə olunan geniş yayılmış icra mühitləridir. JavaScript mühərriki kodu təhlil edən və icra edən proqramdır. V8 mühərriki Chrome və Node.js-də, SpiderMonkey Firefox-da, JavaScriptCore isə Safari-də istifadə olunur. Brauzerlər DOM kimi Veb API-lər təqdim etdiyi halda, Node.js fayl sisteminə giriş kimi API-lər təmin edir.

---

### Question 5. What is JavaScript used for?

**Sual:** JavaScript nə üçün istifadə olunur?

**Answer:** JavaScript is used mainly to build interactive web pages. It handles events, updates the DOM, and sends requests to servers. On the server side, Node.js is used to build APIs and web services. Mobile apps are built with frameworks such as React Native. Desktop apps are built with Electron. It is also used in game development, tooling, and automation scripts.

**Cavab:** JavaScript əsasən interaktiv veb-səhifələr yaratmaq üçün istifadə olunur. O, hadisələri (events) idarə edir, DOM-u yeniləyir və serverlərə sorğular göndərir. Server tərəfində isə API-lər və veb-servislər qurmaq üçün Node.js-dən istifadə olunur. Mobil tətbiqlər React Native kimi freymvorklarla, masaüstü tətbiqlər isə Electron vasitəsilə hazırlanır. Bundan əlavə, o, oyunların hazırlanmasında, alətlərin (tooling) yaradılmasında və avtomatlaşdırma skriptlərində də tətbiq olunur.

---

### Question 6. What are the main features of JavaScript?

**Sual:** JavaScript-in əsas xüsusiyyətləri hansılardır?

**Answer:** JavaScript is a high-level, dynamically typed language. It is multi-paradigm, so it supports procedural, object-oriented, and functional styles. Functions are first-class values. They can be stored in variables, passed as arguments, and returned from other functions. Object inheritance is prototype-based. Execution is single-threaded and uses an event loop for asynchronous work. Garbage collection manages memory automatically.

**Cavab:** JavaScript yüksək səviyyəli, dinamik tipləşdirilmiş dildir. O, çoxparadiqmalı dil olub prosedur, obyektyönümlü və funksional üslubları dəstəkləyir. Funksiyalar "birinci dərəcəli" (first-class) dəyərlərdir; onlar dəyişənlərdə saxlanıla, arqument kimi ötürülə və digər funksiyalardan qaytarıla bilər. Obyektlərdə irsiyyət prototipə əsaslanır. Kodun icrası tək axınlıdır (single-threaded) və asinxron iş üçün "hadisə dövrü"ndən (event loop) istifadə olunur. Yaddaşın idarə olunması isə "zibil yığımı" (garbage collection) mexanizmi vasitəsilə avtomatik həyata keçirilir.

---

### Question 7. Is JavaScript an interpreted or a compiled language?

**Sual:** JavaScript interpretasiya olunan dildir, yoxsa kompilyasiya olunan?

**Answer:** JavaScript is traditionally described as an interpreted language. Modern engines use just-in-time (JIT) compilation. The engine first parses the code and starts running it. Frequently used code is then compiled to optimized machine code. This improves performance. The language itself does not require a separate compilation step by the developer.

**Cavab:** JavaScript ənənəvi olaraq interpretasiya olunan dil kimi təsvir edilir. Müasir mühərriklər "just-in-time" (JIT) kompilyasiyasından istifadə edirlər. Mühərrik əvvəlcə kodu təhlil edir və onun icrasına başlayır. Daha sonra tez-tez istifadə olunan kod optimallaşdırılmış maşın koduna kompilyasiya edilir. Bu, məhsuldarlığı artırır. Dilin özü, proqramçı tərəfindən ayrıca kompilyasiya mərhələsinin həyata keçirilməsini tələb etmir.

---

### Question 8. What does dynamically typed mean in JavaScript?

**Sual:** JavaScript-də dinamik tipli olmaq nə deməkdir?

**Answer:** Dynamic typing means types are checked at runtime, not before running. Variables have no fixed type. The same variable can hold a number first and a string later. Values have types, not variables. The `typeof` operator returns the type of a value. JavaScript is also weakly typed, because it converts types automatically in some operations. This can cause unexpected results and runtime errors.

**Cavab:** Dinamik tipləmə o deməkdir ki, tiplər proqramın icrasından əvvəl deyil, icra zamanı yoxlanılır. Dəyişənlərin sabit tipi yoxdur. Eyni dəyişən əvvəlcə ədəd, daha sonra isə sətir (string) saxlaya bilər. Tiplər dəyişənlərə deyil, dəyərlərə məxsusdur. `typeof` operatoru dəyərin tipini qaytarır. JavaScript həmçinin zəif tipləməyə malikdir, çünki o, bəzi əməliyyatlarda tipləri avtomatik olaraq çevirir. Bu, gözlənilməz nəticələrə və icra zamanı xətalara səbəb ola bilər.

---

### Question 9. What does single-threaded mean in JavaScript?

**Sual:** JavaScript-də tək axınlı olmaq nə deməkdir?

**Answer:** Single-threaded means one call stack executes one piece of code at a time. Long synchronous tasks block the thread. Asynchronous operations avoid blocking. Timers, network requests, and events are handled outside the call stack. Their callbacks are queued and run by the event loop when the stack is empty. Web Workers allow separate threads in browsers. They communicate with the main thread through messages.

**Cavab:** Tək axınlılıq (single-threaded) o deməkdir ki, bir çağırış yığını (call stack) eyni anda yalnız bir kod parçasını icra edir. Uzun sürən sinxron tapşırıqlar axını bloklayır. Asinxron əməliyyatlar isə bloklanmanın qarşısını alır. Taymerlər, şəbəkə sorğuları və hadisələr çağırış yığınından kənarda emal olunur. Bunların geri çağırış funksiyaları (callbacks) növbəyə düzülür və yığın boşaldıqda "hadisə döngüsü" (event loop) tərəfindən icra edilir. "Web Worker"-lər brauzerlərdə ayrı axınların yaradılmasına imkan verir. Onlar əsas axınla mesajlar vasitəsilə əlaqə saxlayırlar.

---

### Question 10. What are the advantages of JavaScript?

**Sual:** JavaScript-in üstünlükləri hansılardır?

**Answer:** JavaScript runs in every major browser without extra software. No installation is needed on the user's side. It has a very large ecosystem of libraries and frameworks. One language can be used for both frontend and backend. The language is relatively easy to start with. It has a large community and many learning resources. The non-blocking asynchronous model suits I/O-heavy applications.

**Cavab:** JavaScript heç bir əlavə proqram təminatı tələb olunmadan bütün əsas brauzerlərdə işləyir. İstifadəçi tərəfində heç bir quraşdırma aparmağa ehtiyac yoxdur. Onun kitabxana və freymvorklardan ibarət çox geniş ekosistemi mövcuddur. Eyni dildən həm "frontend", həm də "backend" hissələrində istifadə etmək mümkündür. Bu dili öyrənməyə başlamaq nisbətən asandır. Onun böyük bir icması və çoxsaylı tədris resursları var. Bloklamayan asinxron model, giriş-çıxış (I/O) əməliyyatlarının intensiv olduğu tətbiqlər üçün çox uyğundur.

---

### Question 11. What are the disadvantages of JavaScript?

**Sual:** JavaScript-in çatışmazlıqları hansılardır?

**Answer:** Dynamic and weak typing can cause runtime errors that are hard to find. Automatic type coercion produces surprising results. Heavy CPU-bound tasks can block the single thread. Performance is generally lower than in compiled languages such as C++ or Rust. Client-side code is visible to users and can be exposed to attacks such as XSS. The ecosystem changes quickly, and many dependencies can create maintenance and security problems. TypeScript is often added to reduce typing problems.

**Cavab:** Dinamik və zəif tipləmə, aşkar edilməsi çətin olan icra zamanı xətalarına səbəb ola bilər. Avtomatik tip çevrilmələri gözlənilməz nəticələr doğura bilər. Prosessor resurslarını intensiv tələb edən tapşırıqlar tək axını (single thread) bloklaya bilər. Məhsuldarlıq, adətən, C++ və ya Rust kimi kompilyasiya olunan dillərdəkindən daha aşağı olur. Müştəri tərəfində (client-side) icra olunan kod istifadəçilər üçün görünür və XSS kimi hücumlara məruz qala bilər. Ekosistem sürətlə dəyişir və çoxsaylı asılılıqlar (dependencies) texniki xidmət və təhlükəsizlik problemləri yarada bilər. Tipləmə ilə bağlı problemləri azaltmaq üçün tez-tez TypeScript-dən istifadə olunur.