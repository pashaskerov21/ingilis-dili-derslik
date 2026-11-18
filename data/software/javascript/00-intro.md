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

**Cavab:** JavaScript yüksək səviyyəli (high-level) proqramlaşdırma dilidir. O, veb səhifələri interaktiv etmək üçün yaradılıb. HTML və CSS ilə birlikdə üç əsas veb texnologiyasından biridir. HTML strukturu, CSS görünüşü, JavaScript isə davranışı müəyyən edir. Bu gün o, brauzerdən kənarda, məsələn, serverlərdə də işləyir.

---

### Question 2. What is the difference between JavaScript and Java?

**Sual:** JavaScript ilə Java arasında fərq nədir?

**Answer:** JavaScript and Java are different languages with different designs. The name JavaScript was chosen mainly for marketing reasons in 1995. Java is statically typed and class-based. JavaScript is dynamically typed and prototype-based. Java code is compiled to bytecode and runs on the Java Virtual Machine. JavaScript code runs in a JavaScript engine.

**Cavab:** JavaScript və Java müxtəlif dizayna malik fərqli dillərdir. JavaScript adı 1995-ci ildə əsasən marketinq səbəbləri ilə seçilib. Java statik tipli (statically typed) və sinif əsaslıdır (class-based). JavaScript isə dinamik tipli (dynamically typed) və prototip əsaslıdır (prototype-based). Java kodu bayt koda (bytecode) kompilyasiya olunur və Java Virtual Machine üzərində işləyir. JavaScript kodu isə JavaScript mühərrikində (engine) işləyir.

---

### Question 3. What is ECMAScript, and how did JavaScript originate?

**Sual:** ECMAScript nədir və JavaScript necə yaranıb?

**Answer:** JavaScript was created by Brendan Eich at Netscape in 1995. It was first called Mocha, then LiveScript. ECMAScript is the standard that defines the language. TC39, a committee of Ecma International, develops the standard ECMA-262. JavaScript is the best-known implementation of ECMAScript. ES6 (2015) was a major update, and new versions have been released every year since.

**Cavab:** JavaScript-i 1995-ci ildə Netscape şirkətində Brendan Eich yaradıb. Əvvəlcə adı Mocha, sonra LiveScript olub. ECMAScript dili müəyyən edən standartdır (standard). Bu standart ECMA-262 adlanır və Ecma International-ın TC39 komitəsi (committee) tərəfindən hazırlanır. JavaScript ECMAScript-in ən tanınmış reallaşdırmasıdır (implementation). ES6 (2015) böyük yenilik oldu və o vaxtdan hər il yeni versiya buraxılır.

---

### Question 4. Where does JavaScript run, and what is a JavaScript engine?

**Sual:** JavaScript harada işləyir və JavaScript mühərriki nədir?

**Answer:** JavaScript runs in browsers and in other runtime environments. Node.js, Deno, and Bun are common runtimes outside the browser. A JavaScript engine is the program that parses and executes the code. V8 is used in Chrome and Node.js. SpiderMonkey is used in Firefox. JavaScriptCore is used in Safari. Browsers provide Web APIs such as the DOM, while Node.js provides APIs such as file system access.

**Cavab:** JavaScript brauzerlərdə və digər icra mühitlərində (runtime environments) işləyir. Node.js, Deno və Bun brauzerdən kənarda geniş yayılmış mühitlərdir. JavaScript mühərriki (engine) kodu təhlil edən və icra edən proqramdır. V8 Chrome və Node.js-də, SpiderMonkey Firefox-da, JavaScriptCore isə Safari-də istifadə olunur. Brauzerlər DOM kimi Web API-lər təqdim edir. Node.js isə fayl sisteminə çıxış kimi API-lər təqdim edir.

---

### Question 5. What is JavaScript used for?

**Sual:** JavaScript nə üçün istifadə olunur?

**Answer:** JavaScript is used mainly to build interactive web pages. It handles events, updates the DOM, and sends requests to servers. On the server side, Node.js is used to build APIs and web services. Mobile apps are built with frameworks such as React Native. Desktop apps are built with Electron. It is also used in game development, tooling, and automation scripts.

**Cavab:** JavaScript əsasən interaktiv veb səhifələr yaratmaq üçün istifadə olunur. O, hadisələri (events) idarə edir, DOM-u yeniləyir və serverlərə sorğu göndərir. Server tərəfində (server side) Node.js ilə API-lər və veb xidmətlər qurulur. Mobil tətbiqlər React Native kimi framework-lərlə hazırlanır. Masaüstü tətbiqlər Electron ilə hazırlanır. JavaScript oyun hazırlanmasında, alətlərdə (tooling) və avtomatlaşdırma skriptlərində də istifadə olunur.

---

### Question 6. What are the main features of JavaScript?

**Sual:** JavaScript-in əsas xüsusiyyətləri hansılardır?

**Answer:** JavaScript is a high-level, dynamically typed language. It is multi-paradigm, so it supports procedural, object-oriented, and functional styles. Functions are first-class values. They can be stored in variables, passed as arguments, and returned from other functions. Object inheritance is prototype-based. Execution is single-threaded and uses an event loop for asynchronous work. Garbage collection manages memory automatically.

**Cavab:** JavaScript yüksək səviyyəli və dinamik tipli dildir. O, çoxparadiqmalıdır (multi-paradigm), yəni prosedur, obyekt yönümlü və funksional üslubları dəstəkləyir. Funksiyalar birinci dərəcəli dəyərlərdir (first-class). Onlar dəyişənlərdə saxlanıla, arqument kimi ötürülə və başqa funksiyalardan qaytarıla bilər. Obyektlər arasında varislik (inheritance) prototip əsaslıdır. İcra tək axınlıdır (single-threaded) və asinxron işlər üçün event loop istifadə olunur. Yaddaşı zibil yığımı (garbage collection) avtomatik idarə edir.

---

### Question 7. Is JavaScript an interpreted or a compiled language?

**Sual:** JavaScript interpretasiya olunan dildir, yoxsa kompilyasiya olunan?

**Answer:** JavaScript is traditionally described as an interpreted language. Modern engines use just-in-time (JIT) compilation. The engine first parses the code and starts running it. Frequently used code is then compiled to optimized machine code. This improves performance. The language itself does not require a separate compilation step by the developer.

**Cavab:** JavaScript ənənəvi olaraq interpretasiya olunan (interpreted) dil kimi təsvir edilir. Müasir mühərriklər isə JIT (just-in-time) kompilyasiyasından istifadə edir. Mühərrik əvvəlcə kodu təhlil edir və icra etməyə başlayır. Tez-tez işlənən kod sonra optimallaşdırılmış maşın koduna (machine code) çevrilir. Bu, performansı artırır. Dilin özü proqramçıdan ayrıca kompilyasiya mərhələsi tələb etmir.

---

### Question 8. What does dynamically typed mean in JavaScript?

**Sual:** JavaScript-də dinamik tipli olmaq nə deməkdir?

**Answer:** Dynamic typing means types are checked at runtime, not before running. Variables have no fixed type. The same variable can hold a number first and a string later. Values have types, not variables. The `typeof` operator returns the type of a value. JavaScript is also weakly typed, because it converts types automatically in some operations. This can cause unexpected results and runtime errors.

**Cavab:** Dinamik tipləmə (dynamic typing) o deməkdir ki, tiplər kod işləyərkən (runtime) yoxlanılır, öncədən yox. Dəyişənin sabit tipi olmur. Eyni dəyişən əvvəlcə ədədi, sonra mətni saxlaya bilər. Tipi dəyişən yox, dəyər daşıyır. `typeof` operatoru dəyərin tipini qaytarır. JavaScript eyni zamanda zəif tipli (weakly typed) dildir, çünki bəzi əməliyyatlarda tipləri avtomatik çevirir. Bu, gözlənilməz nəticələrə və icra zamanı xətalara (runtime errors) səbəb ola bilər.

---

### Question 9. What does single-threaded mean in JavaScript?

**Sual:** JavaScript-də tək axınlı olmaq nə deməkdir?

**Answer:** Single-threaded means one call stack executes one piece of code at a time. Long synchronous tasks block the thread. Asynchronous operations avoid blocking. Timers, network requests, and events are handled outside the call stack. Their callbacks are queued and run by the event loop when the stack is empty. Web Workers allow separate threads in browsers. They communicate with the main thread through messages.

**Cavab:** Tək axınlı (single-threaded) deməkdir ki, bir call stack eyni anda yalnız bir kod hissəsini icra edir. Uzun sinxron əməliyyatlar axını (thread) bloklayır. Asinxron əməliyyatlar isə bloklamır. Taymerlər, şəbəkə sorğuları və hadisələr call stack-dən kənarda idarə olunur. Onların callback-ləri növbəyə qoyulur və stack boş olduqda event loop tərəfindən icra edilir. Brauzerlərdə Web Worker-lər ayrıca axınlara imkan verir. Onlar əsas axınla mesajlar vasitəsilə əlaqə saxlayır.

---

### Question 10. What are the advantages of JavaScript?

**Sual:** JavaScript-in üstünlükləri hansılardır?

**Answer:** JavaScript runs in every major browser without extra software. No installation is needed on the user's side. It has a very large ecosystem of libraries and frameworks. One language can be used for both frontend and backend. The language is relatively easy to start with. It has a large community and many learning resources. The non-blocking asynchronous model suits I/O-heavy applications.

**Cavab:** JavaScript əlavə proqram olmadan bütün əsas brauzerlərdə işləyir. İstifadəçi tərəfində heç bir quraşdırma tələb olunmur. Kitabxanalar (libraries) və framework-lərdən ibarət çox böyük ekosistemi (ecosystem) var. Bir dildən həm frontend, həm də backend üçün istifadə etmək mümkündür. Dilə başlamaq nisbətən asandır. Geniş icması və çoxlu öyrənmə resursları var. Bloklamayan asinxron model giriş-çıxış (I/O) yönümlü tətbiqlər üçün uyğundur.

---

### Question 11. What are the disadvantages of JavaScript?

**Sual:** JavaScript-in çatışmazlıqları hansılardır?

**Answer:** Dynamic and weak typing can cause runtime errors that are hard to find. Automatic type coercion produces surprising results. Heavy CPU-bound tasks can block the single thread. Performance is generally lower than in compiled languages such as C++ or Rust. Client-side code is visible to users and can be exposed to attacks such as XSS. The ecosystem changes quickly, and many dependencies can create maintenance and security problems. TypeScript is often added to reduce typing problems.

**Cavab:** Dinamik və zəif tipləmə tapılması çətin olan icra zamanı xətalarına (runtime errors) səbəb ola bilər. Avtomatik tip çevrilməsi (type coercion) gözlənilməz nəticələr verir. Prosessoru çox yükləyən ağır hesablamalar tək axını bloklaya bilər. Performans ümumiyyətlə C++ və ya Rust kimi kompilyasiya olunan dillərdən aşağıdır. İstifadəçi tərəfindəki (client-side) kod istifadəçilərə görünür və XSS kimi hücumlara məruz qala bilər. Ekosistem sürətlə dəyişir, çoxlu asılılıq (dependency) isə dəstək və təhlükəsizlik problemləri yarada bilər. Tip problemlərini azaltmaq üçün çox vaxt TypeScript əlavə edilir.