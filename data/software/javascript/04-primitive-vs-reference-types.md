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

**Cavab:** JavaScript-də primitiv tiplər (primitive types) və istinad tipləri (reference types) var. Primitiv tiplər string, number, bigint, boolean, `undefined`, `null` və symbol-dur. İstinad tipləri obyektlərdir; massivlər, funksiyalar, Date obyektləri, `Map` və `Set` də onlara daxildir. Primitiv dəyişən dəyərin özünü saxlayır. Obyekt dəyişəni isə obyektə istinad (reference) saxlayır. Bu fərq kopyalamaya, müqayisəyə və funksiyalara ötürməyə təsir edir.

---

### Question 2. How are primitive and reference values stored in memory?

**Sual:** Primitiv və istinad dəyərləri yaddaşda necə saxlanılır?

**Answer:** A common model uses two memory areas: the stack and the heap. Primitive values are stored directly in the variable, often on the stack. Objects are stored in the heap. The variable holds a reference that points to the object in the heap. This is a simplified model. The language specification does not define the stack or the heap, so engines decide the real layout.

**Cavab:** Ümumi model iki yaddaş sahəsindən istifadə edir: stack və heap. Primitiv dəyərlər birbaşa dəyişəndə, çox vaxt stack-də saxlanılır. Obyektlər heap-də saxlanılır. Dəyişən heap-dəki obyektə işarə edən istinad saxlayır. Bu, sadələşdirilmiş modeldir. Dil spesifikasiyası (specification) stack və heap-i müəyyən etmir, real yerləşməni mühərriklər (engines) təyin edir.

---

### Question 3. What happens when a primitive or an object is copied by assignment?

**Sual:** Primitiv və ya obyekt mənimsətmə ilə kopyalananda nə baş verir?

**Answer:** Copying a primitive creates an independent copy of the value. Changing one variable does not affect the other. Copying an object variable copies only the reference. Both variables then point to the same object. A change made through one variable is visible through the other. The same applies to arrays and functions.

**Cavab:** Primitivin kopyalanması dəyərin müstəqil nüsxəsini (copy) yaradır. Bir dəyişənin dəyişdirilməsi digərinə təsir etmir. Obyekt dəyişəni kopyalananda yalnız istinad kopyalanır. Bundan sonra hər iki dəyişən eyni obyektə işarə edir. Bir dəyişən vasitəsilə edilən dəyişiklik digəri vasitəsilə də görünür. Eyni qayda massivlərə və funksiyalara da aiddir.

---

### Question 4. What does it mean that primitives are immutable?

**Sual:** Primitivlərin dəyişməz olması nə deməkdir?

**Answer:** Primitive values cannot be changed after creation. Operations on them produce new values. Assigning to a string character by index fails silently in sloppy mode. In strict mode, it throws a TypeError. A variable can still be reassigned to a new value. Immutability applies to values, not to variables.

**Cavab:** Primitiv dəyərlər yaradıldıqdan sonra dəyişdirilə bilməz. Onlar üzərində aparılan əməliyyatlar yeni dəyərlər yaradır. String simvoluna indeks ilə dəyər mənimsətmək sloppy mode-da səssizcə uğursuz olur. Strict mode-da isə TypeError verir. Dəyişənə sonradan yeni dəyər mənimsətmək mümkündür. Dəyişməzlik (immutability) dəyərlərə aiddir, dəyişənlərə yox.

---

### Question 5. How are primitive and reference types compared?

**Sual:** Primitiv və istinad tipləri necə müqayisə olunur?

**Answer:** Primitives are compared by value. Two primitives with the same type and value are strictly equal, except `NaN`. Objects are compared by reference. Two objects are equal only if both variables point to the same object. Two separate objects with identical content are not equal. This applies to arrays and functions too. Content comparison requires checking properties one by one, or a utility function.

**Cavab:** Primitivlər dəyərə görə (by value) müqayisə olunur. Eyni tipli və eyni dəyərli iki primitiv `NaN` istisna olmaqla ciddi bərabərdir (strictly equal). Obyektlər istinada görə (by reference) müqayisə olunur. İki obyekt yalnız hər iki dəyişən eyni obyektə işarə etdikdə bərabərdir. Eyni məzmunlu iki ayrı obyekt bərabər deyil. Bu, massivlərə və funksiyalara da aiddir. Məzmunu müqayisə etmək üçün xassələr tək-tək yoxlanılır və ya köməkçi funksiyadan istifadə olunur.

---

### Question 6. Are function arguments passed by value or by reference?

**Sual:** Funksiya arqumentləri dəyərlə, yoxsa istinadla ötürülür?

**Answer:** JavaScript always passes arguments by value. For primitives, the function receives a copy of the value. Changes inside the function do not affect the original. For objects, the function receives a copy of the reference. Changing a property inside the function affects the original object. Reassigning the parameter to a new object does not affect the original variable. This behavior is also called call by sharing.

**Cavab:** JavaScript arqumentləri (arguments) həmişə dəyərlə (by value) ötürür. Primitivlər üçün funksiya dəyərin nüsxəsini alır. Funksiya daxilindəki dəyişikliklər orijinala təsir etmir. Obyektlər üçün funksiya istinadın nüsxəsini alır. Funksiya daxilində xassəni dəyişmək orijinal obyektə təsir edir. Parametrə (parameter) yeni obyekt mənimsətmək isə orijinal dəyişənə təsir etmir. Bu davranış call by sharing adlanır.

---

### Question 7. What is the difference between reassignment and mutation?

**Sual:** Yenidən mənimsətmə ilə mutasiya arasındakı fərq nədir?

**Answer:** Reassignment points a variable to a new value. Mutation changes the contents of an existing object. `const` blocks reassignment but allows mutation. Mutation affects every variable that references the same object. Reassignment affects only the variable that is reassigned. Primitives can be reassigned but not mutated.

**Cavab:** Yenidən mənimsətmə (reassignment) dəyişəni yeni dəyərə yönəldir. Mutasiya (mutation) mövcud obyektin məzmununu dəyişir. `const` yenidən mənimsətmənin qarşısını alır, lakin mutasiyaya icazə verir. Mutasiya eyni obyektə istinad edən bütün dəyişənlərə təsir edir. Yenidən mənimsətmə yalnız yenidən mənimsədilən dəyişənə təsir edir. Primitivlər yenidən mənimsədilə bilər, lakin mutasiyaya məruz qala bilməz.

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

**Cavab:** Təsadüfən paylaşılan istinadlar geniş yayılmış xətalara səbəb olur. Daxili obyektləri olan strukturun səthi kopyası həmin daxili obyektləri hələ də paylaşır. Obyekt arqumentini dəyişən funksiya çağıran tərəfin məlumatını dəyişir. Massivi bir obyektlə doldurmaq hər xanaya eyni istinadı yerləşdirir. React-də vəziyyət (state) istinada görə müqayisə olunur, buna görə yerindəcə mutasiya yenidən render olunmanın qarşısını ala bilər. Dəyişməz yeniləmələr (immutable updates) yeni obyektlər yaradır və bu problemlərin qarşısını alır.

---

### Question 11. How does garbage collection relate to references?

**Sual:** Zibil yığımı istinadlarla necə əlaqəlidir?

**Answer:** JavaScript manages memory automatically with garbage collection. An object stays in memory while it is reachable. Roots are starting points, such as the global object or the call stack. When no reference path leads to an object, it can be collected. Modern engines use mark-and-sweep algorithms. Reference counting alone cannot collect circular references. A forgotten reference, such as one in a global variable or a listener, can cause a memory leak.

**Cavab:** JavaScript yaddaşı zibil yığımı (garbage collection) ilə avtomatik idarə edir. Obyekt əlçatan (reachable) olduqca yaddaşda qalır. Kök (root) başlanğıc nöqtələridir; məsələn, qlobal obyekt və ya call stack. Obyektə aparan heç bir istinad yolu qalmadıqda, o yığıla bilər. Müasir mühərriklər mark-and-sweep alqoritmlərindən istifadə edir. İstinadların sayılması (reference counting) tək başına dairəvi istinadları yığa bilmir. Qlobal dəyişəndə və ya listener-də unudulmuş istinad yaddaş sızmasına (memory leak) səbəb ola bilər.