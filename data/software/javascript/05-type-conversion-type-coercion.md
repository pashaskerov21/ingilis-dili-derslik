# Type Conversion & Type Coercion

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| type conversion | tip çevrilməsi |
| type coercion | tipin avtomatik çevrilməsi |
| explicit conversion | açıq çevrilmə |
| implicit conversion | gizli çevrilmə |
| target type | hədəf tip |
| condition | şərt |
| operand | operand |
| truthy | true kimi qəbul olunan dəyər |
| falsy | false kimi qəbul olunan dəyər |
| empty string | boş string |
| numeric string | ədədi ifadə edən string |
| whitespace | boşluq simvolu |
| concatenation | string birləşdirmə |
| addition | toplama |
| negation | inkar |
| unary plus | unar plus |
| parse | təhlil edərək oxumaq |
| radix | say sisteminin əsası |
| strict equality | ciddi bərabərlik |
| loose equality | tip çevirməklə bərabərlik |
| relational operator | müqayisə operatoru |
| code unit | kod vahidi |
| lexicographic | lüğət sırası ilə |
| wrapper object | wrapper obyekti |
| template literal | template literal |
| ToPrimitive | primitivə çevirmə prosesi |
| hint | işarə |

## 2. Interview Questions

### Question 1. What is the difference between type conversion and type coercion?

**Sual:** Tip çevrilməsi ilə type coercion arasındakı fərq nədir?

**Answer:** Type conversion changes a value from one type to another. Explicit conversion is written by the developer, for example with `Number()` or `String()`. Implicit conversion, also called type coercion, is done automatically by the engine. Coercion happens in operators, comparisons, and conditions. The main target types are string, number, and boolean. Coercion can produce unexpected results.

**Cavab:** Tip çevrilməsi (type conversion) dəyəri bir tipdən digərinə dəyişir. Açıq çevrilmə (explicit conversion) proqramçı tərəfindən yazılır; məsələn, `Number()` və ya `String()` ilə. Gizli çevrilmə (implicit conversion), yəni type coercion, mühərrik tərəfindən avtomatik edilir. Coercion operatorlarda, müqayisələrdə və şərtlərdə baş verir. Əsas hədəf tiplər (target types) string, number və boolean-dır. Coercion gözlənilməz nəticələr verə bilər.

---

### Question 2. Which functions convert values explicitly?

**Sual:** Dəyərləri açıq şəkildə hansı funksiyalar çevirir?

**Answer:** `Number()`, `String()`, and `Boolean()` convert values explicitly. They are called without `new` and return primitives. With `new`, they create wrapper objects instead. `parseInt()` and `parseFloat()` convert strings to numbers. The unary plus operator also converts a value to a number. Applying the logical NOT operator twice converts a value to boolean.

**Cavab:** `Number()`, `String()` və `Boolean()` dəyərləri açıq şəkildə çevirir. Onlar `new` olmadan çağırılır və primitiv qaytarır. `new` ilə isə əvəzində wrapper obyektləri (wrapper objects) yaradırlar. `parseInt()` və `parseFloat()` string-ləri ədədə çevirir. Unar plus (unary plus) operatoru da dəyəri ədədə çevirir. Məntiqi NOT operatorunu iki dəfə tətbiq etmək dəyəri boolean-a çevirir.

---

### Question 3. Which values are falsy, and which values are truthy?

**Sual:** Hansı dəyərlər falsy, hansılar truthy-dir?

**Answer:** Conditions convert values to boolean implicitly. Eight values are falsy: `false`, `0`, `-0`, `0n`, the empty string, `null`, `undefined`, and `NaN`. All other values are truthy. This includes the strings "0" and "false". Empty arrays and empty objects are truthy. All objects are truthy, including a `Boolean` wrapper object that contains `false`.

**Cavab:** Şərtlər (conditions) dəyərləri gizli şəkildə boolean-a çevirir. Səkkiz dəyər falsy-dir: `false`, `0`, `-0`, `0n`, boş string (empty string), `null`, `undefined` və `NaN`. Bütün digər dəyərlər truthy-dir. Buraya "0" və "false" string-ləri də daxildir. Boş massivlər və boş obyektlər truthy-dir. Bütün obyektlər truthy-dir; tərkibində `false` olan `Boolean` wrapper obyekti də.

---

### Question 4. How does conversion to a number work?

**Sual:** Ədədə çevrilmə necə işləyir?

**Answer:** `Number()` follows fixed rules. A numeric string is converted to its number. Surrounding whitespace is ignored. An empty or whitespace-only string gives 0. A string with other characters gives `NaN`. `true` gives 1, `false` gives 0, `null` gives 0, and `undefined` gives `NaN`. Symbols throw a TypeError.

**Cavab:** `Number()` sabit qaydalara əməl edir. Ədədi ifadə edən string (numeric string) öz ədədinə çevrilir. Ətrafdakı boşluq simvolları (whitespace) nəzərə alınmır. Boş və ya yalnız boşluqdan ibarət string 0 verir. Digər simvolları olan string `NaN` verir. `true` 1, `false` 0, `null` 0, `undefined` isə `NaN` verir. Symbol-lar TypeError atır.

---

### Question 5. How does conversion to a string work?

**Sual:** String-ə çevrilmə necə işləyir?

**Answer:** `String()` converts any value to a string. Numbers and booleans become their text form. `null` becomes "null" and `undefined` becomes "undefined". Arrays become their elements joined by commas. Plain objects become "[object Object]". Calling `String()` on a symbol works, but implicit conversion of a symbol throws a TypeError. The `toString()` method throws a TypeError for `null` and `undefined`.

**Cavab:** `String()` istənilən dəyəri string-ə çevirir. Ədədlər və boolean-lar öz mətn formasını alır. `null` "null", `undefined` isə "undefined" olur. Massivlər elementlərinin vergüllə birləşdirilmiş formasına çevrilir. Sadə obyektlər "[object Object]" olur. Symbol üzərində `String()` çağırmaq işləyir, lakin symbol-un gizli çevrilməsi TypeError verir. `toString()` metodu `null` və `undefined` üçün TypeError atır.

---

### Question 6. How does the `+` operator decide between addition and concatenation?

**Sual:** `+` operatoru toplama ilə string birləşdirmə arasında necə seçim edir?

**Answer:** The `+` operator first converts both operands to primitives. If either primitive is a string, both are converted to strings and joined. Otherwise, both are converted to numbers and added. Adding a number to a string therefore gives a string. The operators `-`, `*`, `/`, and `%` always convert operands to numbers. Subtracting a number from a numeric string gives a number. Mixing `BigInt` and `Number` throws a TypeError.

**Cavab:** `+` operatoru əvvəlcə hər iki operandı primitivə çevirir. Primitivlərdən biri string-dirsə, hər ikisi string-ə çevrilir və birləşdirilir (concatenation). Əks halda hər ikisi ədədə çevrilir və toplanır (addition). Buna görə ədədi string ilə toplamaq string verir. `-`, `*`, `/` və `%` operatorları operandları həmişə ədədə çevirir. Ədədi ifadə edən string-dən ədəd çıxmaq ədəd verir. `BigInt` və `Number`-i qarışdırmaq TypeError verir.

---

### Question 7. What is the difference between `Number()`, `parseInt()`, `parseFloat()`, and unary plus?

**Sual:** `Number()`, `parseInt()`, `parseFloat()` və unar plus arasındakı fərq nədir?

**Answer:** `Number()` converts the whole string and returns `NaN` if any character is invalid. `parseInt()` reads an integer from the start of the string. It stops at the first invalid character. `parseFloat()` works the same way for decimal numbers. `parseInt()` accepts a radix, which sets the number base. The unary plus operator behaves like `Number()`. For an empty string, `Number()` returns 0, while `parseInt()` returns `NaN`.

**Cavab:** `Number()` bütün string-i çevirir və hər hansı simvol yararsızdırsa `NaN` qaytarır. `parseInt()` string-in əvvəlindən tam ədəd oxuyur (parse) və ilk yararsız simvolda dayanır. `parseFloat()` eyni qaydada onluq ədədlər üçün işləyir. `parseInt()` say sisteminin əsasını (radix) təyin edən parametr qəbul edir. Unar plus operatoru `Number()` kimi davranır. Boş string üçün `Number()` 0, `parseInt()` isə `NaN` qaytarır.

---

### Question 8. What is the difference between `==` and `===`?

**Sual:** `==` ilə `===` arasındakı fərq nədir?

**Answer:** The strict equality operator `===` compares types and values. It never converts types. The loose equality operator `==` converts types before comparing, when the types differ. When the types are the same, both operators give the same result. Both treat `NaN` as unequal to every value, including itself. `Object.is()` differs from both: it treats `NaN` as equal to itself, and it distinguishes `+0` from `-0`.

**Cavab:** Ciddi bərabərlik (strict equality) operatoru `===` tipləri və dəyərləri müqayisə edir. O, heç vaxt tipləri çevirmir. `==` operatoru (loose equality) tiplər fərqli olduqda müqayisədən əvvəl onları çevirir. Tiplər eyni olduqda hər iki operator eyni nəticə verir. Hər ikisi `NaN`-ı istənilən dəyərə, o cümlədən özünə bərabər saymır. `Object.is()` isə fərqlənir: o, `NaN`-ı özünə bərabər sayır və `+0` ilə `-0`-ı ayırır.

---

### Question 9. How does `==` compare values of different types?

**Sual:** `==` fərqli tipli dəyərləri necə müqayisə edir?

**Answer:** `null` and `undefined` are equal to each other and to nothing else. A number compared with a string converts the string to a number. A boolean is converted to a number first. An object compared with a primitive is converted to a primitive. Two objects are equal only if they are the same object. A symbol is equal only to itself.

**Cavab:** `null` və `undefined` bir-birinə bərabərdir və başqa heç nəyə bərabər deyil. Ədəd string ilə müqayisə edildikdə string ədədə çevrilir. Boolean əvvəlcə ədədə çevrilir. Obyekt primitivlə müqayisə edildikdə primitivə çevrilir. İki obyekt yalnız eyni obyekt olduqda bərabərdir. Symbol yalnız özünə bərabərdir.

---

### Question 10. How do relational operators convert values?

**Sual:** Müqayisə operatorları dəyərləri necə çevirir?

**Answer:** Relational operators convert both operands to primitives first. If both are strings, they are compared by UTF-16 code units, character by character. Otherwise, both are converted to numbers. Comparing "10" and "9" as strings gives the first as smaller. `undefined` becomes `NaN`, so every comparison with it is false. `null` becomes 0 in relational comparison. As a result, the `>=` comparison of `null` with 0 is true. The `>` and `==` comparisons with 0 are false.

**Cavab:** Müqayisə operatorları (relational operators) əvvəlcə hər iki operandı primitivə çevirir. Hər ikisi string-dirsə, onlar UTF-16 kod vahidləri (code units) üzrə simvol-simvol, lüğət sırası ilə (lexicographic) müqayisə olunur. Əks halda hər ikisi ədədə çevrilir. "10" və "9" string kimi müqayisə edildikdə birincisi kiçik hesab olunur. `undefined` `NaN` olur, buna görə onunla bütün müqayisələr `false` verir. `null` müqayisə zamanı 0-a çevrilir. Nəticədə, `null` ilə 0-ın `>=` müqayisəsi `true` olur. 0 ilə `>` və `==` müqayisələri isə `false` verir.

---

### Question 11. How are objects converted to primitives?

**Sual:** Obyektlər primitivlərə necə çevrilir?

**Answer:** Objects are converted with the ToPrimitive process. The process receives a hint: "string", "number", or "default". If the object has a `Symbol.toPrimitive` method, it is called with the hint. Otherwise, the hint "string" tries `toString()` first and then `valueOf()`. The hints "number" and "default" try `valueOf()` first and then `toString()`. A TypeError is thrown if no primitive is returned. Template literals use "string", arithmetic uses "number", and `+` and `==` use "default".

**Cavab:** Obyektlər ToPrimitive prosesi ilə çevrilir. Proses "string", "number" və ya "default" işarəsi (hint) alır. Obyektdə `Symbol.toPrimitive` metodu varsa, o, bu işarə ilə çağırılır. Əks halda "string" işarəsi əvvəlcə `toString()`, sonra `valueOf()` yoxlayır. "number" və "default" işarələri əvvəlcə `valueOf()`, sonra `toString()` yoxlayır. Primitiv qaytarılmazsa, TypeError atılır. Template literal-lar (template literals) "string", arifmetika "number", `+` və `==` isə "default" işarəsindən istifadə edir.

---

### Question 12. What are the common coercion traps with arrays and objects?

**Sual:** Massivlər və obyektlərlə bağlı tipik coercion tələləri hansılardır?

**Answer:** An empty array is truthy, but it is loosely equal to `false`. It converts to an empty string, which converts to 0. An array with one element is loosely equal to that element. Adding two empty arrays gives an empty string. Adding a plain object and a string gives "[object Object]" followed by the string. A `Boolean` wrapper object containing `false` is truthy.

**Cavab:** Boş massiv truthy-dir, lakin `false`-a `==` ilə bərabərdir. O, boş string-ə, o isə 0-a çevrilir. Bir elementli massiv həmin elementə `==` ilə bərabərdir. İki boş massivi toplamaq boş string verir. Sadə obyekti string ilə toplamaq "[object Object]" və ardınca həmin string verir. `false` saxlayan `Boolean` wrapper obyekti truthy-dir.