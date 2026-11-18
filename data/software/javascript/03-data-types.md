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

**Cavab:** JavaScript-də səkkiz verilən tipi (data type) var. Yeddisi primitivdir (primitive): string, number, bigint, boolean, `undefined`, `null` və symbol. Səkkizinci tip obyektdir (object). Primitiv dəyərlər dəyişməzdir (immutable) və obyekt deyil. Funksiyalar, massivlər və Date obyektləri obyekt tipinə aiddir. Tip dəyişənə yox, dəyərə məxsusdur.

---

### Question 2. How does the `typeof` operator work, and what are its quirks?

**Sual:** `typeof` operatoru necə işləyir və onun xüsusi hallarını nələr təşkil edir?

**Answer:** The `typeof` operator returns a string with the type of a value. The results are "string", "number", "bigint", "boolean", "undefined", "symbol", "object", and "function". For `null`, the result is "object". For arrays, the result is also "object". Functions return "function", although they are objects. For an undeclared name, the result is "undefined" and no error is thrown.

**Cavab:** `typeof` operatoru dəyərin tipini göstərən sətir (string) qaytarır. Mümkün nəticələr "string", "number", "bigint", "boolean", "undefined", "symbol", "object" və "function"-dır. `null` üçün nəticə "object"-dir. Massivlər üçün nəticə də "object"-dir. Funksiyalar obyekt olsa da, "function" qaytarır. Elan edilməmiş ad üçün "undefined" qaytarılır və xəta atılmır.

---

### Question 3. What is the Number type, and how are numbers stored?

**Sual:** Number tipi nədir və ədədlər necə saxlanılır?

**Answer:** Number is the numeric type for integers and decimals. It is a 64-bit double-precision floating-point value (IEEE 754). There is no separate integer type. `Number.MAX_SAFE_INTEGER` is 9007199254740991, and larger integers may lose precision. Many decimals are approximate, so 0.1 plus 0.2 is not exactly 0.3. Special values are `Infinity`, `-Infinity`, and `NaN`. Division by zero does not throw an error.

**Cavab:** Number tam ədədlər və onluq kəsrlər (decimals) üçün ədəd tipidir. O, 64 bitlik ikiqat dəqiqlikli üzən nöqtəli (double-precision floating-point) dəyərdir (IEEE 754). Ayrıca tam ədəd tipi yoxdur. `Number.MAX_SAFE_INTEGER` 9007199254740991-dir və bundan böyük tam ədədlər dəqiqliyini (precision) itirə bilər. Bir çox onluq kəsr təqribi saxlanılır, buna görə 0.1 və 0.2-nin cəmi dəqiq 0.3 olmur. Xüsusi dəyərlər `Infinity`, `-Infinity` və `NaN`-dır. Sıfıra bölmə xəta atmır.

---

### Question 4. What is `NaN`, and how is it checked?

**Sual:** `NaN` nədir və necə yoxlanılır?

**Answer:** `NaN` means "not a number". It is the result of an invalid numeric operation. Its type is number. `NaN` is the only value that is not equal to itself. Because of this, equality operators cannot detect it. `Number.isNaN()` checks whether a value is exactly `NaN`. The global `isNaN()` converts the value to a number first, so it can return true for non-numbers.

**Cavab:** `NaN` "ədəd deyil" (not a number) mənasını verir. O, yanlış ədədi əməliyyatın nəticəsidir. Onun tipi number-dir. `NaN` özünə bərabər olmayan yeganə dəyərdir. Buna görə bərabərlik operatorları onu aşkar edə bilmir. `Number.isNaN()` dəyərin məhz `NaN` olub-olmadığını yoxlayır. Qlobal `isNaN()` isə dəyəri əvvəlcə ədədə çevirir, buna görə ədəd olmayan dəyərlər üçün `true` qaytara bilər.

---

### Question 5. What is `BigInt`?

**Sual:** `BigInt` nədir?

**Answer:** `BigInt` is a primitive type for integers of any size. It was added in ES2020. A `BigInt` literal ends with the letter `n`. It is used for integers beyond `Number.MAX_SAFE_INTEGER`. Mixing `BigInt` and `Number` in arithmetic throws a TypeError. Comparison operators allow mixing, but strict equality is false for different types. `Math` methods do not accept `BigInt` values.

**Cavab:** `BigInt` istənilən ölçülü tam ədədlər üçün primitiv tipdir. O, ES2020-də əlavə olunub. `BigInt` literalı (literal) `n` hərfi ilə bitir. O, `Number.MAX_SAFE_INTEGER`-dən böyük tam ədədlər üçün istifadə olunur. Arifmetik əməliyyatlarda `BigInt` və `Number`-i qarışdırmaq TypeError verir. Müqayisə operatorları qarışdırmağa icazə verir, lakin fərqli tiplər üçün ciddi bərabərlik (strict equality) `false` qaytarır. `Math` metodları `BigInt` dəyərlərini qəbul etmir.

---

### Question 6. What are strings in JavaScript?

**Sual:** JavaScript-də string-lər nədir?

**Answer:** A string is a sequence of text characters. It is written in single quotes, double quotes, or backticks. Strings are immutable. String methods return new strings and do not change the original. Strings are stored as UTF-16 code units. The `length` property counts code units, so some characters, such as emojis, count as two.

**Cavab:** String mətn simvollarının ardıcıllığıdır. O, tək dırnaq, cüt dırnaq və ya tərs dırnaq işarəsi (backtick) ilə yazılır. String-lər dəyişməzdir (immutable). String metodları yeni string qaytarır və orijinalı dəyişmir. String-lər UTF-16 kod vahidləri (code units) kimi saxlanılır. `length` xassəsi kod vahidlərini sayır, buna görə emoji kimi bəzi simvollar iki sayılır.

---

### Question 7. What is the difference between `undefined` and `null`?

**Sual:** `undefined` ilə `null` arasındakı fərq nədir?

**Answer:** `undefined` means a value is not assigned. It is the default for uninitialized variables, missing properties, and missing arguments. A function without a `return` statement returns `undefined`. `null` means an intentionally empty value. It must be assigned explicitly. The two are equal with `==` but not with `===`. Their types differ: `typeof` gives "undefined" for one and "object" for the other.

**Cavab:** `undefined` dəyərin mənimsədilmədiyini bildirir. O, ilkin dəyər verilməyən dəyişənlər, mövcud olmayan xassələr (properties) və ötürülməyən arqumentlər üçün standart dəyərdir. `return` ifadəsi olmayan funksiya `undefined` qaytarır. `null` qəsdən boş buraxılmış dəyəri bildirir. O, açıq şəkildə mənimsədilməlidir. Bu ikisi `==` ilə bərabərdir, lakin `===` ilə bərabər deyil. Onların tipləri fərqlidir: `typeof` birinə "undefined", digərinə "object" qaytarır.

---

### Question 8. Why does the `typeof` operator return "object" for `null`?

**Sual:** `typeof` operatoru `null` üçün niyə "object" qaytarır?

**Answer:** This is a historical bug from the first JavaScript implementation. Values there carried a type tag, and the tag for objects was zero. `null` was represented by a null pointer, so it matched that tag. A fix was proposed but rejected, because it would break existing code. `null` is still a primitive. It is checked with strict equality to `null`.

**Cavab:** Bu, JavaScript-in ilk reallaşdırmasından qalan tarixi xətadır. Orada dəyərlər tip etiketi (type tag) daşıyırdı və obyektlər üçün etiket sıfır idi. `null` null göstərici (null pointer) ilə təmsil olunurdu və buna görə həmin etiketlə üst-üstə düşürdü. Düzəliş təklif edilib, lakin mövcud kodu pozacağı üçün rədd edilib. `null` hələ də primitivdir. O, `null` ilə ciddi bərabərlik vasitəsilə yoxlanılır.

---

### Question 9. What is `Symbol`?

**Sual:** `Symbol` nədir?

**Answer:** `Symbol` is a primitive type for unique values. It was added in ES6. Each call to `Symbol()` returns a new, unique symbol, even with the same description. Symbols are mainly used as unique property keys. Symbol keys do not appear in `for...in` loops or in `Object.keys()` results. `Symbol.for()` returns a shared symbol from the global registry. Built-in well-known symbols, such as `Symbol.iterator`, customize language behavior.

**Cavab:** `Symbol` unikal dəyərlər üçün primitiv tipdir. O, ES6-da əlavə olunub. `Symbol()` hər çağırışda yeni və unikal symbol qaytarır, təsvirləri (description) eyni olsa belə. Symbol-lar əsasən unikal xassə açarları (keys) kimi istifadə olunur. Symbol açarları `for...in` dövrlərində və `Object.keys()` nəticəsində görünmür. `Symbol.for()` qlobal reyestrdən (global registry) paylaşılan symbol qaytarır. `Symbol.iterator` kimi daxili məşhur symbol-lar (well-known symbols) dilin davranışını fərdiləşdirir.

---

### Question 10. What is the Object type?

**Sual:** Object tipi nədir?

**Answer:** `Object` is the only non-primitive type. An object is a collection of properties. Each property has a key and a value. Keys are strings or symbols. Arrays, functions, dates, `Map`, and `Set` are objects. Objects are handled by reference.

**Cavab:** `Object` yeganə qeyri-primitiv tipdir. Obyekt xassələr toplusudur. Hər xassənin açarı və dəyəri var. Açarlar string və ya symbol olur. Massivlər, funksiyalar, Date obyektləri, `Map` və `Set` obyektdir. Obyektlər istinad (reference) ilə idarə olunur.

---

### Question 11. What are primitive wrapper objects?

**Sual:** Primitiv wrapper obyektləri nədir?

**Answer:** A primitive is not an object and has no methods of its own. When a property is accessed on a primitive, the engine wraps it temporarily in an object. The wrapper types are `String`, `Number`, `Boolean`, `Symbol`, and `BigInt`. The wrapper is discarded after the access. `null` and `undefined` have no wrappers, so property access on them throws a TypeError. Creating a wrapper with `new` returns an object, not a primitive. Such an object has the type "object" and is not strictly equal to the primitive.

**Cavab:** Primitiv obyekt deyil və öz metodları yoxdur. Primitivin xassəsinə müraciət edildikdə mühərrik onu müvəqqəti olaraq obyektə sarıyır. Wrapper tipləri `String`, `Number`, `Boolean`, `Symbol` və `BigInt`-dir. Wrapper müraciətdən sonra atılır. `null` və `undefined` üçün wrapper yoxdur, buna görə onların xassəsinə müraciət TypeError verir. `new` ilə wrapper yaratmaq primitiv yox, obyekt qaytarır. Belə obyektin tipi "object"-dir və primitivə ciddi bərabər deyil.

---

### Question 12. How is the type of a value checked reliably?

**Sual:** Dəyərin tipi etibarlı şəkildə necə yoxlanılır?

**Answer:** `typeof` is suitable for primitives, except `null`. `null` is checked with strict equality. `Array.isArray()` is the standard check for arrays. The `instanceof` operator checks whether an object was created by a given constructor. It can fail for objects from another frame or realm. The `Object.prototype.toString` method returns a tag such as `[object Date]`. This tag gives an exact built-in type.

**Cavab:** `typeof` `null` istisna olmaqla primitivlər üçün uyğundur. `null` ciddi bərabərliklə yoxlanılır. `Array.isArray()` massivlər üçün standart yoxlamadır. `instanceof` operatoru obyektin verilən konstruktor (constructor) ilə yaradılıb-yaradılmadığını yoxlayır. O, başqa frame və ya realm-dan gələn obyektlər üçün səhv nəticə verə bilər. `Object.prototype.toString` metodu `[object Date]` kimi etiket qaytarır. Bu etiket dəqiq daxili tipi göstərir.