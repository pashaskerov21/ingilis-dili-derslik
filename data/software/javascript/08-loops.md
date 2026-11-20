# Loops: for, while, for...of, for...in

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| loop | dövr |
| iteration | iterasiya |
| loop header | dövr başlığı |
| loop body | dövr gövdəsi |
| initialization | ilkin dəyər vermə |
| condition | şərt |
| update | yeniləmə |
| counter | sayğac |
| infinite loop | sonsuz dövr |
| nested loop | iç-içə dövr |
| innermost loop | ən daxili dövr |
| label | etiket |
| labeled statement | etiketli təlimat |
| iterable | iterasiya edilə bilən obyekt |
| collection | kolleksiya |
| index | indeks |
| key | açar |
| value | dəyər |
| entry | qeyd |
| key-value pair | açar-dəyər cütü |
| enumerable | sadalana bilən |
| own property | obyektin öz xassəsi |
| inherited property | varislik yolu ilə gələn xassə |
| prototype chain | prototip zənciri |
| insertion order | əlavə olunma sırası |
| ascending order | artan sıra |
| code unit | kod vahidi |
| code point | kod nöqtəsi |
| binding | dəyişənin dəyərə bağlılığı |
| closure | closure |
| synchronous | sinxron |
| asynchronous | asinxron |
| thread | axın |

## 2. Interview Questions

### Question 1. What is a loop, and what loop statements does JavaScript have?

**Sual:** Dövr nədir və JavaScript-də hansı dövr təlimatları var?

**Answer:** A loop repeats a block of code while a condition holds. JavaScript has `for`, `while`, and `do...while` loops. It also has `for...of` and `for...in` loops for collections and objects. `for await...of` is used for asynchronous iterables. Each loop can be stopped with `break`. Each loop can skip an iteration with `continue`.

**Cavab:** Dövr (loop) şərt ödənildiyi müddətdə kod blokunu təkrarlayır. JavaScript-də `for`, `while` və `do...while` dövrləri var. Kolleksiyalar və obyektlər üçün `for...of` və `for...in` dövrləri də var. `for await...of` asinxron iterasiya edilə bilən obyektlər (asynchronous iterables) üçün istifadə olunur. Hər dövr `break` ilə dayandırıla bilər. Hər dövr `continue` ilə iterasiyanı buraxa bilər.

---

### Question 2. How does the `for` loop work?

**Sual:** `for` dövrü necə işləyir?

**Answer:** The `for` loop has three parts in its header: initialization, condition, and update. Initialization runs once before the loop starts. The condition is checked before each iteration. The update runs after each iteration. The loop stops when the condition becomes false. Each of the three parts is optional.

**Cavab:** `for` dövrünün başlığında üç hissə var: ilkin dəyər vermə (initialization), şərt (condition) və yeniləmə (update). İlkin dəyər vermə dövr başlamazdan əvvəl bir dəfə icra olunur. Şərt hər iterasiyadan (iteration) əvvəl yoxlanılır. Yeniləmə hər iterasiyadan sonra icra olunur. Şərt `false` olduqda dövr dayanır. Üç hissənin hər biri məcburi deyil.

---

### Question 3. What causes an infinite loop?

**Sual:** Sonsuz dövrə nə səbəb olur?

**Answer:** An infinite loop runs because its condition never becomes false. Common causes are a missing update and a wrong condition. A condition that is always true also creates one. Loops with an empty condition or the condition `true` are infinite by design. They are stopped with `break`, `return`, or `throw`. A synchronous infinite loop blocks the single thread. The page or process stops responding.

**Cavab:** Sonsuz dövr (infinite loop) şərti heç vaxt `false` olmadığı üçün işləyir. Ümumi səbəblər buraxılmış yeniləmə və yanlış şərtdir. Həmişə `true` olan şərt də belə dövr yaradır. Boş şərti olan və ya şərti `true` olan dövrlər qəsdən sonsuz olur. Onlar `break`, `return` və ya `throw` ilə dayandırılır. Sinxron (synchronous) sonsuz dövr tək axını bloklayır. Səhifə və ya proses cavab verməyi dayandırır.

---

### Question 4. How does the `while` loop work?

**Sual:** `while` dövrü necə işləyir?

**Answer:** The `while` loop checks its condition before each iteration. If the condition is false at the start, the body never runs. The body runs while the condition stays true. The body must change something that affects the condition. Otherwise the loop becomes infinite. `while` is used when the number of iterations is not known in advance.

**Cavab:** `while` dövrü şərtini hər iterasiyadan əvvəl yoxlayır. Şərt əvvəldə `false` olarsa, gövdə (body) heç vaxt icra olunmur. Gövdə şərt `true` qaldıqca icra olunur. Gövdə şərtə təsir edən nəyisə dəyişməlidir. Əks halda dövr sonsuz olur. `while` iterasiyaların sayı əvvəlcədən məlum olmadıqda istifadə olunur.

---

### Question 5. What is the difference between `while` and `do...while`?

**Sual:** `while` ilə `do...while` arasındakı fərq nədir?

**Answer:** `do...while` checks its condition after each iteration. The body therefore runs at least once. `while` checks the condition first and may run zero times. Both loops stop when the condition becomes false. `do...while` is used when the body must run before the first check.

**Cavab:** `do...while` şərtini hər iterasiyadan sonra yoxlayır. Buna görə gövdə ən azı bir dəfə icra olunur. `while` isə əvvəlcə şərti yoxlayır və heç icra olunmaya bilər. Hər iki dövr şərt `false` olduqda dayanır. `do...while` gövdənin ilk yoxlamadan əvvəl icra olunması lazım olduqda istifadə olunur.

---

### Question 6. How does the `for...of` loop work?

**Sual:** `for...of` dövrü necə işləyir?

**Answer:** The `for...of` loop iterates over the values of an iterable. Iterables include arrays, strings, `Map`, `Set`, and `NodeList`. The loop calls the `Symbol.iterator` method of the iterable. A plain object is not iterable and throws a TypeError. Strings are iterated by code points, not by code units. The loop variable can be declared with `const`, `let`, or `var`. `break`, `continue`, and `return` work inside it.

**Cavab:** `for...of` dövrü iterasiya edilə bilən obyektin (iterable) dəyərləri üzərində dövr edir. İterable-lara massivlər, string-lər, `Map`, `Set` və `NodeList` daxildir. Dövr iterable-ın `Symbol.iterator` metodunu çağırır. Sadə obyekt iterable deyil və TypeError atır. String-lər kod vahidləri üzrə yox, kod nöqtələri (code points) üzrə iterasiya olunur. Dövr dəyişəni `const`, `let` və ya `var` ilə elan oluna bilər. `break`, `continue` və `return` onun daxilində işləyir.

---

### Question 7. How does the `for...in` loop work?

**Sual:** `for...in` dövrü necə işləyir?

**Answer:** The `for...in` loop iterates over the enumerable string keys of an object. It includes inherited enumerable properties from the prototype chain. Symbol keys are not included. Keys are always strings, even for arrays. Integer-like keys come first in ascending order. Other keys follow in insertion order. `Object.hasOwn()` is used to skip inherited properties.

**Cavab:** `for...in` dövrü obyektin sadalana bilən (enumerable) string açarları üzərində dövr edir. O, prototip zəncirindən gələn (inherited) sadalana bilən xassələri də daxil edir. Symbol açarları daxil edilmir. Açarlar massivlər üçün də həmişə string-dir. Tam ədədə bənzər açarlar artan sıra ilə əvvəldə gəlir. Digər açarlar əlavə olunma sırası ilə onların ardınca gəlir. Varislik yolu ilə gələn xassələri buraxmaq üçün `Object.hasOwn()` istifadə olunur.

---

### Question 8. What is the difference between `for...of` and `for...in`?

**Sual:** `for...of` ilə `for...in` arasındakı fərq nədir?

**Answer:** `for...of` gives values. `for...in` gives keys. `for...of` works with iterables. `for...in` works with the properties of any object. On an array, `for...in` returns indexes as strings. It can also include extra properties added to the array or its prototype. `for...of` returns the array elements in order.

**Cavab:** `for...of` dəyərləri verir. `for...in` açarları verir. `for...of` iterable-larla işləyir. `for...in` istənilən obyektin xassələri ilə işləyir. Massivdə `for...in` indeksləri string kimi qaytarır. O, massivə və ya onun prototipinə əlavə edilmiş əlavə xassələri də daxil edə bilər. `for...of` massiv elementlərini ardıcıllıqla qaytarır.

---

### Question 9. How are the keys and values of an object iterated with `for...of`?

**Sual:** Obyektin açarları və dəyərləri `for...of` ilə necə iterasiya olunur?

**Answer:** A plain object cannot be used directly in `for...of`. `Object.keys()` returns an array of own enumerable keys. `Object.values()` returns an array of the values. `Object.entries()` returns an array of key-value pairs. These arrays can be used in `for...of`. They include only own properties, not inherited ones.

**Cavab:** Sadə obyekt birbaşa `for...of`-da istifadə oluna bilməz. `Object.keys()` obyektin öz sadalana bilən açarlarından ibarət massiv qaytarır. `Object.values()` dəyərlərdən ibarət massiv qaytarır. `Object.entries()` açar-dəyər cütlərindən (key-value pairs) ibarət massiv qaytarır. Bu massivlər `for...of`-da istifadə oluna bilər. Onlar yalnız obyektin öz xassələrini daxil edir, varislik yolu ilə gələnləri yox.

---

### Question 10. What do `break` and `continue` do?

**Sual:** `break` və `continue` nə edir?

**Answer:** `break` ends the whole loop immediately. Execution continues after the loop. `continue` skips the rest of the current iteration. In a `for` loop, `continue` still runs the update part. In `while` and `do...while`, it jumps to the condition check. Both statements affect only the innermost loop by default. `break` also works in `switch`, but `continue` works only in loops.

**Cavab:** `break` bütün dövrü dərhal bitirir. İcra dövrdən sonra davam edir. `continue` cari iterasiyanın qalan hissəsini buraxır. `for` dövründə `continue` yenə də yeniləmə hissəsini icra edir. `while` və `do...while` dövrlərində o, şərtin yoxlanmasına keçir. Hər iki təlimat standart olaraq yalnız ən daxili dövrə (innermost loop) təsir edir. `break` `switch`-də də işləyir, lakin `continue` yalnız dövrlərdə işləyir.

---

### Question 11. What are labels in loops?

**Sual:** Dövrlərdə etiketlər nədir?

**Answer:** A label is a name placed before a loop. `break` with a label exits the labeled loop. `continue` with a label goes to the next iteration of the labeled loop. This is used with nested loops. Without a label, these statements affect only the innermost loop. The label must belong to an enclosing statement.

**Cavab:** Etiket (label) dövrün qarşısına qoyulan addır. Etiketli `break` etiketlənmiş dövrdən çıxır. Etiketli `continue` etiketlənmiş dövrün növbəti iterasiyasına keçir. Bu, iç-içə dövrlərdə (nested loops) istifadə olunur. Etiket olmadıqda bu təlimatlar yalnız ən daxili dövrə təsir edir. Etiket əhatə edən təlimata aid olmalıdır.

---

### Question 12. How do `let`, `const`, and `var` behave in loop headers?

**Sual:** Dövr başlıqlarında `let`, `const` və `var` necə davranır?

**Answer:** `let` in a `for` header creates a new binding for each iteration. `var` creates one variable for the whole function. `var` leaks out of the loop and is visible after it. `const` works in `for...of` and `for...in`, because each iteration has a new binding. `const` fails in a classic `for` loop that changes the counter. Closures in loops show these differences.

**Cavab:** `for` başlığındakı `let` hər iterasiya üçün yeni binding yaradır. `var` bütün funksiya üçün bir dəyişən yaradır. `var` dövrdən kənara çıxır və ondan sonra da görünür. `const` `for...of` və `for...in`-də işləyir, çünki hər iterasiyada yeni binding var. `const` sayğacı (counter) dəyişən klassik `for` dövründə xəta verir. Dövrlərdəki closure-lar bu fərqləri göstərir.

---

### Question 13. Is it safe to change a collection while looping over it?

**Sual:** Kolleksiyanı üzərində dövr edərkən dəyişmək təhlükəsizdirmi?

**Answer:** Changing a collection during a loop can cause bugs. In `for...of` on an array, elements added during the loop are visited. Removing elements shifts the indexes, so some elements can be skipped. `Set` and `Map` iteration also visits entries added during the loop. A `for...in` loop skips properties deleted before they are reached. Properties added during `for...in` are not guaranteed to be visited.

**Cavab:** Dövr zamanı kolleksiyanı (collection) dəyişmək xətalara səbəb ola bilər. Massiv üzərində `for...of`-da dövr zamanı əlavə edilən elementlər ziyarət edilir. Elementlərin silinməsi indeksləri sürüşdürür, buna görə bəzi elementlər buraxıla bilər. `Set` və `Map` iterasiyası da dövr zamanı əlavə edilən qeydləri (entries) ziyarət edir. `for...in` dövrü çatmazdan əvvəl silinmiş xassələri buraxır. `for...in` zamanı əlavə edilən xassələrin ziyarət edilməsinə zəmanət verilmir.