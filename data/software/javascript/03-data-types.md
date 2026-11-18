# Data Types

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| data type | verilən tipi |
| primitive | primitiv |
| string | sətir |
| number | ədəd |
| bigint | böyük tam ədəd |
| boolean | məntiqi tip |
| symbol | simvol tipi |
| object | obyekt |
| immutable | dəyişməz |
| integer | tam ədəd |
| decimal | onluq kəsr |
| floating-point | üzən nöqtəli |
| double-precision | ikiqat dəqiqlikli |
| precision | dəqiqlik |
| not a number | ədəd deyil |
| infinity | sonsuzluq |
| literal | literal |
| code unit | kod vahidi |
| backtick | tərs dırnaq işarəsi |
| property | xassə |
| key | açar |
| description | təsvir |
| global registry | qlobal reyestr |
| well-known symbol | daxili məşhur symbol |
| wrapper object | wrapper obyekti |
| type tag | tip etiketi |
| null pointer | null göstərici |
| strict equality | ciddi bərabərlik |
| reference | istinad |
| constructor | konstruktor |
| realm | ayrıca qlobal mühit |
| type check | tip yoxlaması |

## 2. Interview Questions

### Question 1. What are the data types in JavaScript?

**Sual:** JavaScript-də hansı verilən tipləri var?

**Answer:** JavaScript has eight data types. Seven are primitive: string, number, bigint, boolean, `undefined`, `null`, and symbol. The eighth is object. Primitive values are immutable and are not objects. Functions, arrays, and dates belong to the object type. Types belong to values, not to variables.

**Cavab:** JavaScript-də səkkiz məlumat növü var. Bunlardan yeddisi primitivdir: sətir (string), ədəd (number), bigint, məntiqi (boolean), `undefined`, `null` və simvol (symbol). Səkkizinci növ isə obyektdir. Primitiv dəyərlər dəyişdirilə bilməz və onlar obyekt deyillər. Funksiyalar, massivlər və tarixlər obyekt növünə aiddir. Növlər dəyişənlərə deyil, dəyərlərə aiddir.

---

### Question 2. How does the `typeof` operator work, and what are its quirks?

**Sual:** `typeof` operatoru necə işləyir və onun xüsusi hallarını nələr təşkil edir?

**Answer:** The `typeof` operator returns a string with the type of a value. The results are "string", "number", "bigint", "boolean", "undefined", "symbol", "object", and "function". For `null`, the result is "object". For arrays, the result is also "object". Functions return "function", although they are objects. For an undeclared name, the result is "undefined" and no error is thrown.

**Cavab:** `typeof` operatoru dəyərin növünü ifadə edən sətir (string) qaytarır. Nəticələr bunlardır: "string", "number", "bigint", "boolean", "undefined", "symbol", "object" və "function". `null` üçün nəticə "object" olur. Massivlər üçün də nəticə "object"dir. Funksiyalar, özləri obyekt olsalar da, "function" nəticəsini qaytarır. Elan edilməmiş ad üçün nəticə "undefined" olur və heç bir xəta (error) baş vermir.

---

### Question 3. What is the Number type, and how are numbers stored?

**Sual:** Number tipi nədir və ədədlər necə saxlanılır?

**Answer:** Number is the numeric type for integers and decimals. It is a 64-bit double-precision floating-point value (IEEE 754). There is no separate integer type. `Number.MAX_SAFE_INTEGER` is 9007199254740991, and larger integers may lose precision. Many decimals are approximate, so 0.1 plus 0.2 is not exactly 0.3. Special values are `Infinity`, `-Infinity`, and `NaN`. Division by zero does not throw an error.

**Cavab:** `Number` — tam ədədlər və onluq ədədlər üçün nəzərdə tutulmuş rəqəmsal növdür. Bu, 64-bitlik, ikiqat dəqiqlikli, üzən nöqtəli ədəd formatıdır (IEEE 754). Ayrı bir tam ədəd növü mövcud deyil. `Number.MAX_SAFE_INTEGER` dəyəri 9007199254740991-dir; bundan böyük tam ədədlərdə dəqiqlik itkisi baş verə bilər. Bir çox onluq ədəd təxmini xarakter daşıyır, buna görə də 0.1 ilə 0.2-nin cəmi tam olaraq 0.3-ə bərabər deyil. Xüsusi dəyərlərə `Infinity`, `-Infinity` və `NaN` aiddir. Sıfıra bölmə əməliyyatı xəta yaratmır.

---

### Question 4. What is `NaN`, and how is it checked?

**Sual:** `NaN` nədir və necə yoxlanılır?

**Answer:** `NaN` means "not a number". It is the result of an invalid numeric operation. Its type is number. `NaN` is the only value that is not equal to itself. Because of this, equality operators cannot detect it. `Number.isNaN()` checks whether a value is exactly `NaN`. The global `isNaN()` converts the value to a number first, so it can return true for non-numbers.

**Cavab:** `NaN` "ədəd deyil" (ingiliscə: "not a number") mənasını verir. Bu, etibarsız ədədi əməliyyatın nəticəsidir. Onun tipi "ədəd"dir (number). `NaN` özünə bərabər olmayan yeganə dəyərdir. Buna görə də, bərabərlik operatorları onu aşkar edə bilmir. `Number.isNaN()` metodu bir dəyərin məhz `NaN` olub-olmadığını yoxlayır. Qlobal `isNaN()` funksiyası isə dəyəri əvvəlcə ədədə çevirir; buna görə də o, ədəd olmayan dəyərlər üçün də `true` (doğru) nəticəsini qaytara bilər.

---

### Question 5. What is `BigInt`?

**Sual:** `BigInt` nədir?

**Answer:** `BigInt` is a primitive type for integers of any size. It was added in ES2020. A `BigInt` literal ends with the letter `n`. It is used for integers beyond `Number.MAX_SAFE_INTEGER`. Mixing `BigInt` and `Number` in arithmetic throws a TypeError. Comparison operators allow mixing, but strict equality is false for different types. `Math` methods do not accept `BigInt` values.

**Cavab:** `BigInt` — istənilən ölçüdə tam ədədlər üçün nəzərdə tutulmuş primitiv növdür. O, ES2020 versiyasında əlavə edilib. `BigInt` literalı `n` hərfi ilə bitir. Bu, `Number.MAX_SAFE_INTEGER` sərhədini aşan tam ədədlər üçün istifadə olunur. Hesablama əməliyyatlarında `BigInt` və `Number` tiplərini qarışdırmaq `TypeError` xətasına səbəb olur. Müqayisə operatorları bu tiplərin birgə istifadəsinə icazə versə də, fərqli tiplər arasında ciddi bərabərlik (`===`) yoxlanışı `false` nəticəsini verir. `Math` obyektinin metodları `BigInt` dəyərlərini qəbul etmir.

---

### Question 6. What are strings in JavaScript?

**Sual:** JavaScript-də string-lər nədir?

**Answer:** A string is a sequence of text characters. It is written in single quotes, double quotes, or backticks. Strings are immutable. String methods return new strings and do not change the original. Strings are stored as UTF-16 code units. The `length` property counts code units, so some characters, such as emojis, count as two.

**Cavab:** Sətir (string) mətn simvollarından ibarət ardıcıllıqdır. O, tək dırnaq, cüt dırnaq və ya əks dırnaq işarələri daxilində yazılır. Sətirlər dəyişməzdir (immutable). Sətir metodları yeni sətirlər qaytarır və orijinal sətri dəyişmir. Sətirlər UTF-16 kod vahidləri şəklində saxlanılır. `length` xassəsi kod vahidlərinin sayını göstərir; buna görə də bəzi simvollar, məsələn, emojilər iki vahid kimi hesablanır.

---

### Question 7. What is the difference between `undefined` and `null`?

**Sual:** `undefined` ilə `null` arasındakı fərq nədir?

**Answer:** `undefined` means a value is not assigned. It is the default for uninitialized variables, missing properties, and missing arguments. A function without a `return` statement returns `undefined`. `null` means an intentionally empty value. It must be assigned explicitly. The two are equal with `==` but not with `===`. Their types differ: `typeof` gives "undefined" for one and "object" for the other.

**Cavab:** `undefined` — heç bir dəyərin təyin olunmadığını bildirir. Bu, ilkin dəyəri verilməmiş dəyişənlər, mövcud olmayan xassələr və ötürülməmiş arqumentlər üçün standart dəyərdir. `return` ifadəsi olmayan funksiya `undefined` qaytarır. `null` isə qəsdən boş saxlanılmış dəyər deməkdir; o, xüsusi olaraq təyin edilməlidir. Bu ikisi `==` operatoru ilə müqayisədə bərabər sayılır, lakin `===` operatoru ilə müqayisədə bərabər deyil. Onların tipləri fərqlidir: `typeof` operatoru birincisi üçün "undefined", ikincisi üçün isə "object" nəticəsini verir.

---

### Question 8. Why does the `typeof` operator return "object" for `null`?

**Sual:** `typeof` operatoru `null` üçün niyə "object" qaytarır?

**Answer:** This is a historical bug from the first JavaScript implementation. Values there carried a type tag, and the tag for objects was zero. `null` was represented by a null pointer, so it matched that tag. A fix was proposed but rejected, because it would break existing code. `null` is still a primitive. It is checked with strict equality to `null`.

**Cavab:** Bu, JavaScript-in ilk implementasiyasından qalma tarixi bir xətadır. Həmin dövrdə dəyərlərin tərkibində tip nişanı (type tag) olurdu və obyektlər üçün bu nişan sıfıra bərabər idi. `null` isə "null" göstərici (null pointer) ilə təmsil olunduğundan, həmin nişanla üst-üstə düşürdü. Problemi aradan qaldırmaq üçün təklif irəli sürülsə də, mövcud kodu pozacağı səbəbindən bu təklif rədd edildi. `null` hələ də primitiv (sadə) tip hesab olunur. O, `null` ilə ciddi bərabərlik (strict equality) vasitəsilə yoxlanılır.

---

### Question 9. What is `Symbol`?

**Sual:** `Symbol` nədir?

**Answer:** `Symbol` is a primitive type for unique values. It was added in ES6. Each call to `Symbol()` returns a new, unique symbol, even with the same description. Symbols are mainly used as unique property keys. Symbol keys do not appear in `for...in` loops or in `Object.keys()` results. `Symbol.for()` returns a shared symbol from the global registry. Built-in well-known symbols, such as `Symbol.iterator`, customize language behavior.

**Cavab:** `Symbol` unikal dəyərlər üçün nəzərdə tutulmuş ibtidai (primitive) tiptir. O, ES6 versiyasında əlavə edilib. `Symbol()` funksiyasının hər bir çağırışı — hətta eyni təsvirə malik olsa belə — yeni və unikal bir `Symbol` qaytarır. `Symbol`-lar əsasən unikal xassə açarları (property keys) kimi istifadə olunur. `Symbol` açarları `for...in` döngələrində və ya `Object.keys()` metodunun nəticələrində görünmür. `Symbol.for()` qlobal reyestrdən paylaşılan (ümumi) bir `Symbol` qaytarır. `Symbol.iterator` kimi daxili, geniş tanınan `Symbol`-lar dilin davranışını fərdiləşdirməyə imkan verir.

---

### Question 10. What is the Object type?

**Sual:** Object tipi nədir?

**Answer:** `Object` is the only non-primitive type. An object is a collection of properties. Each property has a key and a value. Keys are strings or symbols. Arrays, functions, dates, `Map`, and `Set` are objects. Objects are handled by reference.

**Cavab:** `Object` yeganə qeyri-primitiv növdür. Obyekt xassələr toplusudur. Hər bir xassənin açarı və dəyəri olur. Açarlar sətirlər və ya simvollardır. Massivlər, funksiyalar, tarixlər, `Map` və `Set` obyektlərdir. Obyektlər istinad vasitəsilə idarə olunur.

---

### Question 11. What are primitive wrapper objects?

**Sual:** Primitiv wrapper obyektləri nədir?

**Answer:** A primitive is not an object and has no methods of its own. When a property is accessed on a primitive, the engine wraps it temporarily in an object. The wrapper types are `String`, `Number`, `Boolean`, `Symbol`, and `BigInt`. The wrapper is discarded after the access. `null` and `undefined` have no wrappers, so property access on them throws a TypeError. Creating a wrapper with `new` returns an object, not a primitive. Such an object has the type "object" and is not strictly equal to the primitive.

**Cavab:** Primitiv obyekt deyil və özünün heç bir metodu yoxdur. Primitiv obyekt üzərində bir xüsusiyyətə daxil olduqda, mühərrik onu müvəqqəti olaraq bir obyektə sarar. Sarğı tipləri `String`, `Number`, `Boolean`, `Symbol` və `BigInt`-dir. Sarğı girişdən sonra atılır. `null` və `undefined`-in sarğıları yoxdur, buna görə də onlar üzərində xüsusiyyətə giriş TypeError səhvini yaradır. `new` ilə sarğı yaratmaq primitiv deyil, bir obyekt qaytarır. Belə bir obyekt "obyekt" tipinə malikdir və primitivə tam bərabər deyil.

---

### Question 12. How is the type of a value checked reliably?

**Sual:** Dəyərin tipi etibarlı şəkildə necə yoxlanılır?

**Answer:** `typeof` is suitable for primitives, except `null`. `null` is checked with strict equality. `Array.isArray()` is the standard check for arrays. The `instanceof` operator checks whether an object was created by a given constructor. It can fail for objects from another frame or realm. The `Object.prototype.toString` method returns a tag such as `[object Date]`. This tag gives an exact built-in type.

**Cavab:** `typeof` operatoru, `null` istisna olmaqla, primitiv tiplər üçün uyğundur. `null` dəyəri ciddi bərabərlik (`===`) vasitəsilə yoxlanılır. Massivləri yoxlamaq üçün standart üsul `Array.isArray()` metodudur. `instanceof` operatoru obyektin müəyyən bir konstruktor tərəfindən yaradılıb-yaradılmadığını yoxlayır. Lakin bu operator başqa "frame" və ya "realm"dən (məsələn, başqa pəncərədən) gələn obyektlər üçün düzgün işləməyə bilər. `Object.prototype.toString` metodu `[object Date]` kimi bir etiket qaytarır. Bu etiket obyektin dəqiq daxili tipini göstərir.