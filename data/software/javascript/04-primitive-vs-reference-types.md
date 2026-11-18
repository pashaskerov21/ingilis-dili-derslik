# Primitive vs Reference Types

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| primitive type | primitiv tip |
| reference type | istinad tipi |
| reference | istinad |
| stack | stack yaddaşı |
| heap | heap yaddaşı |
| specification | spesifikasiya |
| engine | mühərrik |
| copy | kopya |
| immutability | dəyişməzlik |
| mutation | mutasiya |
| reassignment | yenidən mənimsətmə |
| compare by value | dəyərə görə müqayisə |
| compare by reference | istinada görə müqayisə |
| strict equality | ciddi bərabərlik |
| argument | arqument |
| parameter | parametr |
| pass by value | dəyərlə ötürmə |
| call by sharing | paylaşma ilə ötürmə |
| shallow copy | səthi kopya |
| deep copy | dərin kopya |
| nested object | daxili obyekt |
| spread syntax | spread sintaksisi |
| circular reference | dairəvi istinad |
| class instance | sinif nümunəsi |
| immutable update | dəyişməz yeniləmə |
| state | vəziyyət |
| garbage collection | zibil yığımı |
| reachable | əlçatan |
| root | kök |
| mark-and-sweep | işarələ-təmizlə alqoritmi |
| reference counting | istinadların sayılması |
| memory leak | yaddaş sızması |

## 2. Interview Questions

### Question 1. What is the difference between primitive and reference types?

**Sual:** Primitiv tiplər ilə istinad tipləri arasındakı fərq nədir?

**Answer:** JavaScript has primitive types and reference types. Primitive types are string, number, bigint, boolean, `undefined`, `null`, and symbol. Reference types are objects, including arrays, functions, dates, `Map`, and `Set`. A primitive variable holds the value itself. An object variable holds a reference to the object. This difference affects copying, comparison, and passing to functions.

**Cavab:** JavaScript-də primitiv tiplər və istinad tipləri mövcuddur. Primitiv tiplərə string, number, bigint, boolean, `undefined`, `null` və symbol daxildir. İstinad tipləri isə obyektlərdir; bura massivlər, funksiyalar, tarixlər, `Map` və `Set` kimi strukturlar da aiddir. Primitiv dəyişən dəyərin özünü saxlayır. Obyekt dəyişəni isə obyektə olan istinadı saxlayır. Bu fərq məlumatların kopyalanmasına, müqayisə edilməsinə və funksiyalara ötürülməsinə təsir göstərir.

---

### Question 2. How are primitive and reference values stored in memory?

**Sual:** Primitiv və istinad dəyərləri yaddaşda necə saxlanılır?

**Answer:** A common model uses two memory areas: the stack and the heap. Primitive values are stored directly in the variable, often on the stack. Objects are stored in the heap. The variable holds a reference that points to the object in the heap. This is a simplified model. The language specification does not define the stack or the heap, so engines decide the real layout.

**Cavab:** Geniş yayılmış bir model iki yaddaş sahəsindən istifadə edir: stek (stack) və küme (heap). İbtidai (primitiv) dəyərlər birbaşa dəyişənin özündə — çox vaxt stekdə — saxlanılır. Obyektlər isə kümedə yerləşdirilir. Dəyişən, kümedəki obyektə istinad edən bir ünvanı (referansı) özündə saxlayır. Bu, sadələşdirilmiş bir modeldir. Dil spesifikasiyası stek və ya küme anlayışlarını müəyyən etmir, buna görə də faktiki yerləşdirmə üsuluna icra mühitləri (engines) qərar verir.

---

### Question 3. What happens when a primitive or an object is copied by assignment?

**Sual:** Mənimsətmə yolu ilə sadə tip (primitive) və ya obyekt kopyalandıqda nə baş verir?

**Answer:** Copying a primitive creates an independent copy of the value. Changing one variable does not affect the other. Copying an object variable copies only the reference. Both variables then point to the same object. A change made through one variable is visible through the other. The same applies to arrays and functions.

**Cavab:** İbtidai (primitive) tipin kopyalanması həmin dəyərin müstəqil nüsxəsini yaradır. Bir dəyişəndə ​​edilən dəyişiklik digərinə təsir etmir. Obyekt dəyişəninin kopyalanması zamanı isə yalnız istinad (reference) kopyalanır. Nəticədə, hər iki dəyişən eyni obyektə istinad edir. Bir dəyişən vasitəsilə edilən dəyişiklik digər dəyişən vasitəsilə də görünür. Eyni qayda massivlərə və funksiyalara da aiddir.

---

### Question 4. What does it mean that primitives are immutable?

**Sual:** Primitivlərin dəyişməz olması nə deməkdir?

**Answer:** Primitive values cannot be changed after creation. Operations on them produce new values. Assigning to a string character by index fails silently in sloppy mode. In strict mode, it throws a TypeError. A variable can still be reassigned to a new value. Immutability applies to values, not to variables.

**Cavab:** İlkin (primitiv) dəyərlər yaradıldıqdan sonra dəyişdirilə bilməz. Onlar üzərində aparılan əməliyyatlar yeni dəyərlər yaradır. "Sloppy mode" (standart rejim) zamanı sətir daxilindəki bir simvola indeks vasitəsilə yeni dəyər mənimsədilməyə cəhd edildikdə, heç bir xəta bildirişi verilmir. "Strict mode" (sərt rejim) zamanı isə bu halda `TypeError` xətası baş verir. Dəyişənə isə yenidən başqa bir dəyər mənimsədilə bilər. Dəyişməzlik (immutability) dəyişənlərə deyil, dəyərlərə aiddir.

---

### Question 5. How are primitive and reference types compared?

**Sual:** Primitiv və istinad tipləri necə müqayisə olunur?

**Answer:** Primitives are compared by value. Two primitives with the same type and value are strictly equal, except `NaN`. Objects are compared by reference. Two objects are equal only if both variables point to the same object. Two separate objects with identical content are not equal. This applies to arrays and functions too. Content comparison requires checking properties one by one, or a utility function.

**Cavab:** İlkin tiplər (primitivlər) dəyərlərinə görə müqayisə olunur. Eyni növə və dəyərə malik iki ilkin tip — `NaN` istisna olmaqla — bir-birinə tam bərabərdir. Obyektlər isə istinadlarına görə müqayisə olunur. İki obyekt yalnız o halda bərabər sayılır ki, hər iki dəyişən eyni obyektə istinad etsin. Eyni məzmuna malik iki ayrı obyekt bir-birinə bərabər deyil. Bu qayda massivlərə və funksiyalara da şamil edilir. Məzmunun müqayisə edilməsi üçün xassələrin bir-bir yoxlanılması və ya xüsusi köməkçi funksiyadan istifadə edilməsi tələb olunur.

---

### Question 6. Are function arguments passed by value or by reference?

**Sual:** Funksiya arqumentləri dəyərə görə, yoxsa istinada görə ötürülür?

**Answer:** JavaScript always passes arguments by value. For primitives, the function receives a copy of the value. Changes inside the function do not affect the original. For objects, the function receives a copy of the reference. Changing a property inside the function affects the original object. Reassigning the parameter to a new object does not affect the original variable. This behavior is also called call by sharing.

**Cavab:** JavaScript-də arqumentlər həmişə dəyər üzrə (by value) ötürülür. İbtidai (primitiv) tiplər üçün funksiya dəyərin bir nüsxəsini qəbul edir. Funksiya daxilində edilən dəyişikliklər orijinala təsir etmir. Obyektlər üçün isə funksiya istinadın (referansın) bir nüsxəsini qəbul edir. Funksiya daxilində obyektin hər hansı xassəsini dəyişdirmək orijinal obyektə təsir göstərir. Lakin parametri yeni bir obyektə yönəltmək (yəni ona yeni obyekt mənimsətmək) orijinal dəyişənə təsir etmir. Bu davranış həmçinin "paylaşma yolu ilə çağırma" (call by sharing) adlanır.

---

### Question 7. What is the difference between reassignment and mutation?

**Sual:** Yenidən təyinat (reassignment) ilə mutasiya arasında fərq nədir?

**Answer:** Reassignment points a variable to a new value. Mutation changes the contents of an existing object. `const` blocks reassignment but allows mutation. Mutation affects every variable that references the same object. Reassignment affects only the variable that is reassigned. Primitives can be reassigned but not mutated.

**Cavab:** Yenidən təyinat (reassignment) dəyişəni yeni bir qiymətə yönəldir. Mutasiya mövcud obyektin məzmununu dəyişdirir. `const` yenidən təyinatın qarşısını alır, lakin mutasiyaya icazə verir. Mutasiya eyni obyektə istinad edən bütün dəyişənlərə təsir göstərir. Yenidən təyinat isə yalnız həmin dəyişənin özünə təsir edir. İbtidai (primitiv) tiplərə yenidən təyinat etmək olar, lakin onları mutasiya etmək mümkün deyil.

---

### Question 8. What is a shallow copy, and how is it created?

**Sual:** Səthi kopya nədir və necə yaradılır?

**Answer:** A shallow copy duplicates only the top-level properties. Nested objects are still shared with the original. Common ways are the spread syntax and `Object.assign()` for objects. For arrays, `slice()`, the spread syntax, and `Array.from()` are used. Primitive properties are copied by value. Reference properties are copied by reference. A change to a nested object appears in both copies.

**Cavab:** Səthi kopya (shallow copy) yalnız birinci səviyyəli xassələri təkrarlayır. Daxili obyektlər (nested objects) orijinalla hələ də paylaşılır. Obyektlər üçün geniş yayılmış üsullar spread sintaksisi və `Object.assign()`-dir. Massivlər üçün `slice()`, spread sintaksisi və `Array.from()` istifadə olunur. Primitiv xassələr dəyərlə kopyalanır. İstinad xassələri istinadla kopyalanır. Daxili obyektdəki dəyişiklik hər iki kopyada görünür.

---

### Question 9. What is a deep copy, and how is it created?

**Sual:** Dərin kopya nədir və necə yaradılır?

**Answer:** A deep copy duplicates all nested levels. `structuredClone()` creates deep copies and is available in modern browsers and Node.js 17 and later. It supports circular references, dates, `Map`, and `Set`. It throws an error for functions, and class instances become plain objects. The JSON approach uses `JSON.stringify()` and then `JSON.parse()`. It drops functions, `undefined` values, and symbols. It also converts dates to strings and fails on circular references.

**Cavab:** Dərin kopya (deep copy) bütün daxili səviyyələri təkrarlayır. `structuredClone()` dərin kopya yaradır və müasir brauzerlərdə, həmçinin Node.js 17 və sonrakı versiyalarında mövcuddur. O, dairəvi istinadları (circular references), tarixləri, `Map` və `Set`-i dəstəkləyir. Funksiyalar üçün xəta atır, sinif nümunələri (class instances) isə sadə obyektlərə çevrilir. JSON üsulu əvvəlcə `JSON.stringify()`, sonra `JSON.parse()` istifadə edir. O, funksiyaları, `undefined` dəyərlərini və symbol-ları atır. Tarixləri string-lərə çevirir və dairəvi istinadlarda xəta verir.

---

### Question 10. What bugs are caused by shared references?

**Sual:** Paylaşılan istinadlar hansı xətalara səbəb olur?

**Answer:** Unintended shared references cause common bugs. A shallow copy of a nested structure still shares the inner objects. A function that mutates an object argument changes the caller's data. Filling an array with one object puts the same reference in every slot. In React, state is compared by reference, so in-place mutation can prevent a re-render. Immutable updates create new objects and avoid these problems.

**Cavab:** Gözlənilməz şəkildə paylaşılan istinadlar tez-tez rast gəlinən xətalara səbəb olur. İç-içə strukturların "sathi" (shallow) surətinin çıxarılması zamanı daxili obyektlər hələ də ortaq qalır. Obyekt arqumentini dəyişdirən (mutasiya edən) funksiya, həmin funksiyanı çağıran tərəfdəki məlumatları da dəyişir. Bir massivi tək bir obyektlə doldurduqda, massivin hər bir xanasına eyni obyektə istinad yerləşdirilir. React-də vəziyyət (state) istinadlar vasitəsilə müqayisə olunur, buna görə də mövcud obyektin birbaşa dəyişdirilməsi (in-place mutation) komponentin yenidən render olunmasının qarşısını ala bilər. Dəyişdirilməz (immutable) yeniləmələr isə yeni obyektlər yaradaraq bu problemlərin qarşısını alır.

---

### Question 11. How does garbage collection relate to references?

**Sual:** Zibil yığımı istinadlarla necə əlaqəlidir?

**Answer:** JavaScript manages memory automatically with garbage collection. An object stays in memory while it is reachable. Roots are starting points, such as the global object or the call stack. When no reference path leads to an object, it can be collected. Modern engines use mark-and-sweep algorithms. Reference counting alone cannot collect circular references. A forgotten reference, such as one in a global variable or a listener, can cause a memory leak.

**Cavab:** JavaScript yaddaşı "zibil yığımı" (garbage collection) vasitəsilə avtomatik idarə edir. Obyekt əlçatan olduğu müddətdə yaddaşda qalır. "Kök"lər (roots) qlobal obyekt və ya çağırış yığını (call stack) kimi başlanğıc nöqtələridir. Obyektə aparan heç bir istinad yolu qalmadıqda, həmin obyekt yaddaşdan silinə bilər. Müasir mühərriklər "işarələmə və təmizləmə" (mark-and-sweep) alqoritmlərindən istifadə edirlər. Yalnız istinadların sayılması (reference counting) metodu dövri istinadları (circular references) aradan qaldıra bilmir. Qlobal dəyişəndə ​​və ya hadisə dinləyicisində (listener) qalan unudulmuş istinad yaddaş sızmasına (memory leak) səbəb ola bilər.