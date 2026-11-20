# Parameters, Arguments & Return Values

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| parameter | parametr |
| argument | arqument |
| positional parameter | mövqeli parametr |
| options object | options obyekti |
| default parameter | default parametr |
| rest parameter | rest parametr |
| duplicate parameter | təkrarlanan parametr |
| missing argument | çatışmayan arqument |
| extra argument | əlavə arqument |
| function definition | funksiya təyini |
| function call | funksiya çağırışı |
| caller | çağıran tərəf |
| local variable | lokal dəyişən |
| shadowing | adın gizlədilməsi |
| array-like object | massivəbənzər obyekt |
| array method | massiv metodu |
| index | indeks |
| `length` property | `length` xassəsi |
| evaluation order | hesablama sırası |
| side effect | əlavə təsir |
| return value | qaytarılan dəyər |
| return statement | return təlimatı |
| early return | erkən return |
| nested block | iç-içə blok |
| input | giriş dəyəri |
| destructuring | destructuring |
| spread syntax | spread sintaksisi |
| strict mode | ciddi rejim |
| sloppy mode | ciddi olmayan rejim |
| automatic semicolon insertion | avtomatik nöqtəli vergül əlavə edilməsi |
| line break | sətir keçidi |
| object literal | obyekt literalı |
| primitive | primitiv |
| reference | istinad |

## 2. Interview Questions

### Question 1. What is the difference between parameters and arguments?

**Sual:** Parametrlər ilə arqumentlər arasındakı fərq nədir?

**Answer:** Parameters are the names listed in a function definition. Arguments are the values passed when the function is called. Parameters act as local variables inside the function. Each argument is matched to a parameter by position. A function can have any number of parameters. Parameters and arguments do not need to match in number.

**Cavab:** Parametrlər (parameters) funksiya təyin edilərkən sadalanan adlardır. Arqumentlər (arguments) funksiya çağırılanda ötürülən dəyərlərdir. Parametrlər funksiya daxilində lokal dəyişənlər kimi işləyir. Hər arqument mövqeyinə görə parametrlə uyğunlaşdırılır. Funksiyanın istənilən sayda parametri ola bilər. Parametrlərin və arqumentlərin sayı eyni olmaq məcburiyyətində deyil.

---

### Question 2. What happens when fewer or more arguments are passed than parameters?

**Sual:** Parametrlərdən az və ya çox arqument ötürüləndə nə baş verir?

**Answer:** JavaScript does not check the number of arguments. A missing argument gives its parameter the value `undefined`. Extra arguments are ignored by the parameters. No error is thrown in either case. Extra arguments can still be read through the `arguments` object. `arguments.length` gives the number of passed arguments. The function's `length` property counts parameters before any default or rest parameter.

**Cavab:** JavaScript arqumentlərin sayını yoxlamır. Çatışmayan arqument (missing argument) öz parametrinə `undefined` dəyərini verir. Əlavə arqumentlər parametrlər tərəfindən nəzərə alınmır. Hər iki halda xəta atılmır. Əlavə arqumentləri hələ də `arguments` obyekti vasitəsilə oxumaq olar. `arguments.length` ötürülən arqumentlərin sayını verir. Funksiyanın `length` xassəsi default və ya rest parametrdən əvvəlki parametrləri sayır.

---

### Question 3. What is the `arguments` object?

**Sual:** `arguments` obyekti nədir?

**Answer:** `arguments` is an array-like object available inside regular functions. It contains all passed arguments. It has indexes and a `length` property. It does not have array methods such as `map()`. It can be converted to an array with `Array.from()` or the spread syntax. Arrow functions have no own `arguments` object. In sloppy mode with simple parameters, its entries are linked to the parameters.

**Cavab:** `arguments` adi funksiyaların daxilində mövcud olan massivəbənzər (array-like) obyektdir. O, ötürülən bütün arqumentləri saxlayır. Onun indekslər və `length` xassəsi var. Onda `map()` kimi massiv metodları yoxdur. O, `Array.from()` və ya spread sintaksisi ilə massivə çevrilə bilər. Ox funksiyalarının öz `arguments` obyekti yoxdur. Sloppy mode-da və sadə parametrlərlə onun elementləri parametrlərlə əlaqəlidir.

---

### Question 4. How do parameters behave as local variables?

**Sual:** Parametrlər lokal dəyişən kimi necə davranır?

**Answer:** Parameters are local variables of the function. Reassigning a parameter does not change the caller's variable. A primitive argument is copied, so changes stay inside the function. An object argument passes a copy of the reference. Changing a property of that object is visible to the caller. A parameter name can shadow an outer variable with the same name.

**Cavab:** Parametrlər funksiyanın lokal dəyişənləridir (local variables). Parametrə yenidən dəyər mənimsətmək çağıran tərəfin (caller) dəyişənini dəyişmir. Primitiv arqument kopyalanır, buna görə dəyişikliklər funksiyanın daxilində qalır. Obyekt arqumenti istinadın nüsxəsini ötürür. Həmin obyektin xassəsini dəyişmək çağıran tərəfdə görünür. Parametr adı eyni adlı xarici dəyişəni gizlədə bilər.

---

### Question 5. In what order are arguments evaluated?

**Sual:** Arqumentlər hansı sıra ilə hesablanır?

**Answer:** Arguments are evaluated from left to right. All arguments are evaluated before the function body starts. Side effects in arguments happen in that order. The function expression itself is evaluated before its arguments. An error in an argument stops the call before it starts. Values, not expressions, are bound to the parameters.

**Cavab:** Arqumentlər soldan sağa hesablanır. Bütün arqumentlər funksiyanın gövdəsi başlamazdan əvvəl hesablanır. Arqumentlərdəki əlavə təsirlər (side effects) bu sırayla baş verir. Funksiya ifadəsinin özü arqumentlərindən əvvəl hesablanır. Arqumentdəki xəta çağırışı başlamazdan əvvəl dayandırır. Parametrlərə ifadələr yox, dəyərlər bağlanır.

---

### Question 6. What happens when parameter names are duplicated?

**Sual:** Parametr adları təkrarlandıqda nə baş verir?

**Answer:** In sloppy mode, duplicate parameter names are allowed in regular functions. The last parameter with that name receives the value. In strict mode, duplicate names cause a SyntaxError. They are also not allowed in arrow functions. They are not allowed with default, rest, or destructured parameters.

**Cavab:** Sloppy mode-da adi funksiyalarda təkrarlanan parametr adlarına (duplicate parameter names) icazə verilir. Dəyəri həmin adlı sonuncu parametr alır. Strict mode-da təkrarlanan adlar SyntaxError verir. Onlara ox funksiyalarında da icazə verilmir. Default, rest və ya destructuring parametrləri olduqda da icazə verilmir.

---

### Question 7. How can an options object replace many positional parameters?

**Sual:** Options obyekti çoxlu mövqeli parametrləri necə əvəz edə bilər?

**Answer:** Positional parameters depend on argument order. Many positional parameters are hard to read and easy to confuse. An options object passes named values in one parameter. The order of properties does not matter. Missing properties read as `undefined`. This pattern is common for functions with optional settings.

**Cavab:** Mövqeli parametrlər (positional parameters) arqumentlərin sırasından asılıdır. Çoxlu mövqeli parametrlərin oxunması çətindir və onları qarışdırmaq asandır. Options obyekti adlı dəyərləri bir parametrdə ötürür. Xassələrin sırası əhəmiyyət daşımır. Çatışmayan xassələr `undefined` kimi oxunur. Bu nümunə istəyə bağlı ayarları olan funksiyalarda geniş yayılıb.

---

### Question 8. What does the `return` statement do?

**Sual:** `return` təlimatı nə edir?

**Answer:** The `return` statement ends the function and sends a value to the caller. Code after `return` in the same path is not executed. A function without `return` returns `undefined`. A `return` without a value also returns `undefined`. `return` can be placed inside loops and conditions. It exits the whole function, not only the loop.

**Cavab:** `return` təlimatı (statement) funksiyanı bitirir və çağıran tərəfə dəyər göndərir. Eyni yolda `return`-dən sonrakı kod icra olunmur. `return` olmayan funksiya `undefined` qaytarır. Dəyəri olmayan `return` da `undefined` qaytarır. `return` dövrlərin və şərtlərin daxilində yazıla bilər. O, yalnız dövrdən yox, bütün funksiyadan çıxır.

---

### Question 9. Can a function return multiple values?

**Sual:** Funksiya bir neçə dəyər qaytara bilərmi?

**Answer:** A function returns only one value. Several values can be returned inside an array or an object. An array suits ordered values. An object suits values with names. The caller can read the result with indexes, property names, or destructuring. A new array or object can be created on each call.

**Cavab:** Funksiya yalnız bir dəyər qaytarır. Bir neçə dəyər massiv və ya obyekt daxilində qaytarıla bilər. Massiv sıralı dəyərlər üçün uyğundur. Obyekt adlı dəyərlər üçün uyğundur. Çağıran tərəf nəticəni indekslər, xassə adları və ya destructuring ilə oxuya bilər. Hər çağırışda yeni massiv və ya obyekt yaradıla bilər.

---

### Question 10. What is an early return?

**Sual:** Erkən return nədir?

**Answer:** An early return exits a function as soon as a condition is met. It avoids deeply nested `if` and `else` blocks. Invalid input is often handled at the top of the function. The main logic then stays at one level. The remaining code runs only for valid cases.

**Cavab:** Erkən return (early return) şərt ödənildikdə funksiyadan dərhal çıxır. O, dərin iç-içə `if` və `else` bloklarının (nested blocks) qarşısını alır. Yanlış giriş dəyərləri (input) çox vaxt funksiyanın əvvəlində emal olunur. Əsas məntiq beləcə bir səviyyədə qalır. Qalan kod yalnız düzgün hallar üçün icra olunur.

---

### Question 11. What is the automatic semicolon insertion trap with `return`?

**Sual:** `return` ilə bağlı avtomatik nöqtəli vergül əlavə edilməsi tələsi nədir?

**Answer:** A line break directly after `return` triggers automatic semicolon insertion. The function then returns `undefined`. The expression on the next line is never executed. This happens even when that expression is an object literal. The expression must start on the same line as `return`. An opening parenthesis on that line allows a multi-line value.

**Cavab:** `return`-dən dərhal sonra sətir keçidi (line break) avtomatik nöqtəli vergül əlavə edilməsinə (automatic semicolon insertion) səbəb olur. Bu zaman funksiya `undefined` qaytarır. Növbəti sətirdəki ifadə heç vaxt icra olunmur. Bu, həmin ifadə obyekt literalı olduqda da baş verir. İfadə `return` ilə eyni sətirdə başlamalıdır. Həmin sətirdəki açılan mötərizə çoxsətirli dəyərə imkan verir.