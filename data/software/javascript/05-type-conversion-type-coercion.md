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

**Sual:** Tip çevrilməsi (type conversion) ilə tip məcburi çevrilməsi (type coercion) arasında fərq nədir?

**Answer:** Type conversion changes a value from one type to another. Explicit conversion is written by the developer, for example with `Number()` or `String()`. Implicit conversion, also called type coercion, is done automatically by the engine. Coercion happens in operators, comparisons, and conditions. The main target types are string, number, and boolean. Coercion can produce unexpected results.

**Cavab:** Tip çevrilməsi bir dəyəri bir növdən digərinə dəyişir. Açıq (eksplisit) çevrilmə proqramçı tərəfindən, məsələn, `Number()` və ya `String()` vasitəsilə həyata keçirilir. Örtülü (implisit) çevrilmə — digər adıyla "tip məcburiyyəti" (type coercion) — mühərrik tərəfindən avtomatik olaraq yerinə yetirilir. Bu proses operatorlarda, müqayisələrdə və şərtlərdə baş verir. Əsas hədəf tiplər sətir (string), ədəd (number) və məntiqi (boolean) tiplərdir. Tip məcburiyyəti gözlənilməz nəticələrə səbəb ola bilər.

---

### Question 2. Which functions convert values explicitly?

**Sual:** Hansı funksiyalar dəyərləri aşkar şəkildə çevirir?

**Answer:** `Number()`, `String()`, and `Boolean()` convert values explicitly. They are called without `new` and return primitives. With `new`, they create wrapper objects instead. `parseInt()` and `parseFloat()` convert strings to numbers. The unary plus operator also converts a value to a number. Applying the logical NOT operator twice converts a value to boolean.

**Cavab:** `Number()`, `String()` və `Boolean()` dəyərləri aşkar şəkildə çevirir. Onlar `new` açar sözü olmadan çağırıldıqda primitiv dəyərlər qaytarır; `new` ilə istifadə edildikdə isə əvəzinə örtük (wrapper) obyektləri yaradırlar. `parseInt()` və `parseFloat()` sətirləri ədədlərə çevirir. Unar plyus operatoru da dəyəri ədədə çevirir. Məntiqi "deyil" (NOT) operatorunun iki dəfə tətbiq edilməsi isə dəyəri məntiqi (boolean) tipə çevirir.

---

### Question 3. Which values are falsy, and which values are truthy?

**Sual:** Hansı dəyərlər yalan (falsy), hansı dəyərlər isə doğru (truthy) hesab olunur?

**Answer:** Conditions convert values to boolean implicitly. Eight values are falsy: `false`, `0`, `-0`, `0n`, the empty string, `null`, `undefined`, and `NaN`. All other values are truthy. This includes the strings "0" and "false". Empty arrays and empty objects are truthy. All objects are truthy, including a `Boolean` wrapper object that contains `false`.

**Cavab:** Şərtlər dəyərləri örtülü şəkildə boolean (məntiqi) tipinə çevirir. Səkkiz dəyər "yalan" (falsy) hesab olunur: `false`, `0`, `-0`, `0n`, boş sətir, `null`, `undefined` və `NaN`. Digər bütün dəyərlər isə "doğru" (truthy) hesab olunur. Bura "0" və "false" sətirləri də daxildir. Boş massivlər və boş obyektlər "doğru" (truthy) sayılır. Bütün obyektlər, o cümlədən içərisində `false` saxlayan `Boolean` örtük obyekti də "doğru" (truthy) hesab olunur.

---

### Question 4. How does conversion to a number work?

**Sual:** Ədədə çevrilmə necə işləyir?

**Answer:** `Number()` follows fixed rules. A numeric string is converted to its number. Surrounding whitespace is ignored. An empty or whitespace-only string gives 0. A string with other characters gives `NaN`. `true` gives 1, `false` gives 0, `null` gives 0, and `undefined` gives `NaN`. Symbols throw a TypeError.

**Cavab:** `Number()` müəyyən qaydalara əsasən işləyir. Rəqəmlərdən ibarət sətir ədədə çevrilir. Kənarlardakı boşluqlar nəzərə alınmır. Boş sətir və ya yalnız boşluqlardan ibarət sətir 0 nəticəsini verir. Tərkibində başqa simvollar olan sətirlər `NaN` qaytarır. `true` 1-ə, `false` 0-a, `null` 0-a, `undefined` isə `NaN`-a çevrilir. Simvollar (Symbols) `TypeError` xətasına səbəb olur.

---

### Question 5. How does conversion to a string work?

**Sual:** String-ə çevrilmə necə işləyir?

**Answer:** `String()` converts any value to a string. Numbers and booleans become their text form. `null` becomes "null" and `undefined` becomes "undefined". Arrays become their elements joined by commas. Plain objects become "[object Object]". Calling `String()` on a symbol works, but implicit conversion of a symbol throws a TypeError. The `toString()` method throws a TypeError for `null` and `undefined`.

**Cavab:** `String()` istənilən dəyəri sətirə çevirir. Ədədlər və məntiqi (boolean) dəyərlər öz mətn formasına çevrilir. `null` dəyəri "null"a, `undefined` isə "undefined"a çevrilir. Massivlər, elementlərinin vergüllə birləşdirildiyi bir sətirə çevrilir. Adi obyektlər "[object Object]" şəklini alır. `String()` funksiyasını `symbol` üzərində çağırmaq mümkündür, lakin `symbol` dəyərinin gizli (implicit) çevrilməsi `TypeError` xətasına səbəb olur. `toString()` metodu isə `null` və `undefined` üçün `TypeError` xətası verir.

---

### Question 6. How does the `+` operator decide between addition and concatenation?

**Sual:** `+` operatoru toplama ilə string birləşdirmə arasında necə seçim edir?

**Answer:** The `+` operator first converts both operands to primitives. If either primitive is a string, both are converted to strings and joined. Otherwise, both are converted to numbers and added. Adding a number to a string therefore gives a string. The operators `-`, `*`, `/`, and `%` always convert operands to numbers. Subtracting a number from a numeric string gives a number. Mixing `BigInt` and `Number` throws a TypeError.

**Cavab:** `+` operatoru əvvəlcə hər iki operandı ibtidai (primitive) tiplərə çevirir. Əgər bu ibtidai tiplərdən hər hansı biri sətirdirsə, hər ikisi sətrə çevrilir və birləşdirilir. Əks halda, hər ikisi ədədə çevrilir və toplanır. Buna görə də, ədədin sətirlə toplanması nəticədə sətir verir. `-`, `*`, `/` və `%` operatorları isə operandları həmişə ədədə çevirir. Ədədi, rəqəmlərdən ibarət sətirdən çıxdıqda nəticə ədəd olur. `BigInt` və `Number` tiplərinin birlikdə istifadə edilməsi `TypeError` xətasına səbəb olur.

---

### Question 7. What is the difference between `Number()`, `parseInt()`, `parseFloat()`, and unary plus?

**Sual:** `Number()`, `parseInt()`, `parseFloat()` və unar plus arasındakı fərq nədir?

**Answer:** `Number()` converts the whole string and returns `NaN` if any character is invalid. `parseInt()` reads an integer from the start of the string. It stops at the first invalid character. `parseFloat()` works the same way for decimal numbers. `parseInt()` accepts a radix, which sets the number base. The unary plus operator behaves like `Number()`. For an empty string, `Number()` returns 0, while `parseInt()` returns `NaN`.

**Cavab:** `Number()` bütün sətri çevirir və əgər hər hansı simvol etibarsızdırsa, `NaN` qaytarır. `parseInt()` sətrin əvvəlindən tam ədədi oxuyur. O, ilk etibarsız simvola çatdıqda dayanır. `parseFloat()` onluq ədədlər üçün eyni şəkildə işləyir. `parseInt()` ədəd sisteminin əsasını təyin edən parametr (radix) qəbul edir. Unar plyus operatoru `Number()` kimi davranır. Boş sətir üçün `Number()` 0 qaytardığı halda, `parseInt()` `NaN` qaytarır.

---

### Question 8. What is the difference between `==` and `===`?

**Sual:** `==` ilə `===` arasındakı fərq nədir?

**Answer:** The strict equality operator `===` compares types and values. It never converts types. The loose equality operator `==` converts types before comparing, when the types differ. When the types are the same, both operators give the same result. Both treat `NaN` as unequal to every value, including itself. `Object.is()` differs from both: it treats `NaN` as equal to itself, and it distinguishes `+0` from `-0`.

**Cavab:** Sərt bərabərlik operatoru `===` həm tipləri, həm də dəyərləri müqayisə edir. O, heç vaxt tipləri çevirmir. Sərbəst bərabərlik operatoru `==` isə tiplər fərqli olduqda, müqayisədən əvvəl onları çevirir. Tiplər eyni olduqda, hər iki operator eyni nəticəni verir. Hər ikisi `NaN` dəyərini, özü də daxil olmaqla, istənilən digər dəyərdən fərqli hesab edir. `Object.is()` isə hər ikisindən fərqlənir: o, `NaN` dəyərini özünə bərabər hesab edir və `+0` ilə `-0` arasında fərq qoyur.

---

### Question 9. How does `==` compare values of different types?

**Sual:** `==` fərqli tipli dəyərləri necə müqayisə edir?

**Answer:** `null` and `undefined` are equal to each other and to nothing else. A number compared with a string converts the string to a number. A boolean is converted to a number first. An object compared with a primitive is converted to a primitive. Two objects are equal only if they are the same object. A symbol is equal only to itself.

**Cavab:** `null` və `undefined` bir-birinə bərabərdir, başqa heç nəyə bərabər deyillər. Ədəd sətirlə müqayisə edildikdə, sətir ədədə çevrilir. Məntiqi (boolean) dəyər əvvəlcə ədədə çevrilir. Obyekt ibtidai (primitive) tip ilə müqayisə edildikdə, ibtidai tipə çevrilir. İki obyekt yalnız eyni obyekt olduqları təqdirdə bir-birinə bərabər sayılır. Simvol (symbol) yalnız özünə bərabərdir.

---

### Question 10. How do relational operators convert values?

**Sual:** Müqayisə operatorları dəyərləri necə çevirir?

**Answer:** Relational operators convert both operands to primitives first. If both are strings, they are compared by UTF-16 code units, character by character. Otherwise, both are converted to numbers. Comparing "10" and "9" as strings gives the first as smaller. `undefined` becomes `NaN`, so every comparison with it is false. `null` becomes 0 in relational comparison. As a result, the `>=` comparison of `null` with 0 is true. The `>` and `==` comparisons with 0 are false.

**Cavab:** Münasibət operatorları əvvəlcə hər iki operandı ibtidai (primitiv) tiplərə çevirir. Əgər hər iki operand sətirdirsə, onlar UTF-16 kod vahidləri əsasında, simvol-simvol müqayisə olunur. Əks halda, hər ikisi ədədə çevrilir. "10" və "9" sətir kimi müqayisə edildikdə, birincisi daha kiçik hesab olunur. `undefined` dəyəri `NaN`-a çevrilir, buna görə də onun iştirak etdiyi istənilən müqayisə `false` (yalan) nəticələnir. Münasibət müqayisələrində `null` dəyəri 0-a çevrilir. Nəticədə, `null` ilə 0 arasında `>=` müqayisəsi `true` (doğru) olur. 0 ilə aparılan `>` və `==` müqayisələri isə `false` (yalan) nəticələnir.

---

### Question 11. How are objects converted to primitives?

**Sual:** Obyektlər primitivlərə necə çevrilir?

**Answer:** Objects are converted with the ToPrimitive process. The process receives a hint: "string", "number", or "default". If the object has a `Symbol.toPrimitive` method, it is called with the hint. Otherwise, the hint "string" tries `toString()` first and then `valueOf()`. The hints "number" and "default" try `valueOf()` first and then `toString()`. A TypeError is thrown if no primitive is returned. Template literals use "string", arithmetic uses "number", and `+` and `==` use "default".

**Cavab:** Obyektlər `ToPrimitive` prosesi vasitəsilə çevrilir. Bu proses bir göstəriş (hint) qəbul edir: "string", "number" və ya "default". Əgər obyektin `Symbol.toPrimitive` metodu varsa, həmin metod bu göstərişlə çağırılır. Əks halda, "string" göstərişi olduqda əvvəlcə `toString()`, sonra isə `valueOf()` metodu yoxlanılır. "number" və "default" göstərişləri olduqda isə əvvəlcə `valueOf()`, sonra isə `toString()` metodu yoxlanılır. Əgər nəticədə heç bir ibtidai (primitive) dəyər qaytarılmazsa, `TypeError` xətası baş verir. Şablon literalları (template literals) "string", arifmetik əməliyyatlar "number", `+` və `==` operatorları isə "default" göstərişindən istifadə edir.

---

### Question 12. What are the common coercion traps with arrays and objects?

**Sual:** Massivlər və obyektlərlə bağlı tip çevrilməsi (coercion) zamanı yaranan geniş yayılmış tələlər hansılardır?

**Answer:** An empty array is truthy, but it is loosely equal to `false`. It converts to an empty string, which converts to 0. An array with one element is loosely equal to that element. Adding two empty arrays gives an empty string. Adding a plain object and a string gives "[object Object]" followed by the string. A `Boolean` wrapper object containing `false` is truthy.

**Cavab:** Boş massiv "həqiqi" (truthy) dəyər hesab olunur, lakin `false` ilə zəif bərabərlik (loose equality) təşkil edir. O, boş sətrə çevrilir, boş sətir isə öz növbəsində 0-a çevrilir. Bir elementi olan massiv həmin elementin özünə bərabərdir (zəif bərabərlik şərtində). İki boş massivin toplanması boş sətir nəticəsini verir. Adi bir obyektlə sətrin toplanması isə "[object Object]" ifadəsinin ardınca həmin sətrin gəlməsi ilə nəticələnir. `false` dəyərini özündə saxlayan `Boolean` örtük obyekti (wrapper object) "həqiqi" (truthy) dəyər sayılır.