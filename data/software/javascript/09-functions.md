# Functions: Declarations, Expressions, Arrow Functions

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| function | funksiya |
| function declaration | funksiya elanı |
| function expression | funksiya ifadəsi |
| named function expression | adlı funksiya ifadəsi |
| anonymous function | anonim funksiya |
| arrow function | ox funksiyası |
| regular function | adi funksiya |
| function body | funksiya gövdəsi |
| parameter | parametr |
| argument | arqument |
| return statement | return təlimatı |
| implicit return | gizli qaytarma |
| explicit return | açıq qaytarma |
| object literal | obyekt literalı |
| method | metod |
| constructor | konstruktor |
| prototype | prototip |
| generator function | generator funksiyası |
| hoisting | hoisting |
| scope | görünmə sahəsi |
| block scope | blok scope-u |
| surrounding scope | əhatə edən scope |
| lexical this | lexical this |
| first-class function | birinci dərəcəli funksiya |
| higher-order function | yüksək səviyyəli funksiya |
| callback | geri çağırış funksiyası |
| IIFE | dərhal çağırılan funksiya ifadəsi |
| wrapping parentheses | əhatə edən mötərizələr |
| event handler | hadisə işləyicisi |
| stack trace | çağırış izi |
| strict mode | ciddi rejim |
| sloppy mode | ciddi olmayan rejim |
| module | modul |
| duplicate parameter | təkrarlanan parametr |
| web compatibility | veb uyğunluğu |
| legacy rules | köhnə qaydalar |

## 2. Interview Questions

### Question 1. What is a function in JavaScript?

**Sual:** JavaScript-də funksiya nədir?

**Answer:** A function is a reusable block of code. It is defined once and can be called many times. In JavaScript, functions are objects. They can have properties and methods. A function is called by writing its name followed by parentheses. A function without a `return` statement returns `undefined`.

**Cavab:** Funksiya (function) təkrar istifadə oluna bilən kod blokudur. O, bir dəfə təyin edilir və dəfələrlə çağırıla bilər. JavaScript-də funksiyalar obyektdir. Onların xassələri və metodları ola bilər. Funksiya adı və ardınca mötərizələr yazılaraq çağırılır. `return` təlimatı olmayan funksiya `undefined` qaytarır.

---

### Question 2. What is a function declaration?

**Sual:** Funksiya elanı nədir?

**Answer:** A function declaration starts with the `function` keyword. It requires a name. It is hoisted together with its body. It can be called before its position in the code. It is available in the whole scope where it is declared. It is a statement, so it does not need a semicolon.

**Cavab:** Funksiya elanı (function declaration) `function` açar sözü ilə başlayır. Ad tələb olunur. O, gövdəsi ilə birlikdə hoisting olunur. Onu kodda yerləşdiyi yerdən əvvəl çağırmaq olar. O, elan edildiyi bütün scope-da mövcuddur. O, təlimatdır, buna görə nöqtəli vergül tələb etmir.

---

### Question 3. What is a function expression?

**Sual:** Funksiya ifadəsi nədir?

**Answer:** A function expression creates a function as part of an expression. The result is usually assigned to a variable. The function can be anonymous. It is not hoisted as a function. With `var`, the variable is `undefined` before the assignment. With `let` or `const`, access before the assignment throws a ReferenceError.

**Cavab:** Funksiya ifadəsi (function expression) funksiyanı ifadənin bir hissəsi kimi yaradır. Nəticə adətən dəyişənə mənimsədilir. Funksiya anonim (anonymous) ola bilər. O, funksiya kimi hoisting olunmur. `var` ilə dəyişən mənimsətmədən əvvəl `undefined` olur. `let` və ya `const` ilə mənimsətmədən əvvəl müraciət ReferenceError verir.

---

### Question 4. What is a named function expression?

**Sual:** Adlı funksiya ifadəsi nədir?

**Answer:** A named function expression has a name after the `function` keyword. The name is visible only inside the function. It is not added to the outer scope. The name allows the function to call itself. The name also appears in stack traces. Assigning to that name inside the function has no effect in sloppy mode. In strict mode, it throws a TypeError.

**Cavab:** Adlı funksiya ifadəsi (named function expression) `function` açar sözündən sonra ada malikdir. Ad yalnız funksiyanın daxilində görünür. O, xarici scope-a əlavə edilmir. Ad funksiyaya özünü çağırmağa imkan verir. Ad həm də stack trace-lərdə görünür. Sloppy mode-da funksiya daxilində bu ada mənimsətmənin təsiri olmur. Strict mode-da isə TypeError verir.

---

### Question 5. What is the difference between function declarations and function expressions?

**Sual:** Funksiya elanları ilə funksiya ifadələri arasındakı fərq nədir?

**Answer:** A declaration is hoisted with its body, and an expression is not. A declaration requires a name, and an expression can be anonymous. A declaration is a statement. An expression can be used wherever a value is expected. A function expression can be passed as an argument or returned. A declaration cannot be written in those positions. Both create function objects.

**Cavab:** Elan gövdəsi ilə birlikdə hoisting olunur, ifadə isə olunmur. Elan ad tələb edir, ifadə isə anonim ola bilər. Elan təlimatdır. İfadə dəyərin gözlənildiyi hər yerdə istifadə oluna bilər. Funksiya ifadəsi arqument (argument) kimi ötürülə və ya qaytarıla bilər. Elan bu mövqelərdə yazıla bilməz. Hər ikisi funksiya obyektləri yaradır.

---

### Question 6. What are arrow functions?

**Sual:** Ox funksiyaları nədir?

**Answer:** Arrow functions were added in ES6. They use the `=>` syntax and are always expressions. A single parameter does not need parentheses. Zero or several parameters require parentheses. If the body is one expression, its value is returned implicitly. A body in curly braces needs an explicit `return`. Returning an object literal directly requires wrapping it in parentheses.

**Cavab:** Ox funksiyaları (arrow functions) ES6-da əlavə olunub. Onlar `=>` sintaksisindən istifadə edir və həmişə ifadədir. Tək parametr (parameter) mötərizə tələb etmir. Sıfır və ya bir neçə parametr mötərizə tələb edir. Gövdə bir ifadədirsə, onun dəyəri gizli şəkildə qaytarılır. Fiqurlu mötərizədəki gövdə açıq `return` tələb edir. Obyekt literalını (object literal) birbaşa qaytarmaq onu mötərizəyə almağı tələb edir.

---

### Question 7. How does `this` behave in arrow functions and regular functions?

**Sual:** `this` ox funksiyalarında və adi funksiyalarda necə davranır?

**Answer:** In a regular function, `this` is set by how the function is called. In an arrow function, `this` is taken from the surrounding scope. This is called lexical `this`. `call()`, `apply()`, and `bind()` cannot change `this` of an arrow function. An arrow function used as an object method does not get the object as `this`. An arrow function inside a method keeps the method's `this`.

**Cavab:** Adi funksiyada (regular function) `this` funksiyanın necə çağırıldığına görə təyin olunur. Ox funksiyasında `this` əhatə edən scope-dan götürülür. Buna lexical `this` deyilir. `call()`, `apply()` və `bind()` ox funksiyasının `this`-ini dəyişə bilmir. Obyekt metodu kimi istifadə olunan ox funksiyası obyekti `this` kimi almır. Metodun daxilindəki ox funksiyası metodun `this`-ini saxlayır.

---

### Question 8. What other differences exist between arrow functions and regular functions?

**Sual:** Ox funksiyaları ilə adi funksiyalar arasında başqa hansı fərqlər var?

**Answer:** Arrow functions have no own `arguments` object. They cannot be used with `new`, so they are not constructors. They have no `prototype` property. They have no own `super` or `new.target`. They cannot be generator functions. Duplicate parameter names are not allowed in them.

**Cavab:** Ox funksiyalarının öz `arguments` obyekti yoxdur. Onlar `new` ilə istifadə oluna bilməz, buna görə konstruktor (constructor) deyil. Onların `prototype` xassəsi yoxdur. Onların öz `super` və ya `new.target` dəyərləri yoxdur. Onlar generator funksiyası ola bilməz. Onlarda təkrarlanan parametr adlarına icazə verilmir.

---

### Question 9. In which cases are arrow functions not suitable?

**Sual:** Ox funksiyaları hansı hallarda uyğun deyil?

**Answer:** Arrow functions are not suitable as constructors. They are not suitable as object methods that need `this` to refer to the object. They do not work as prototype methods that rely on `this`. They are not suitable for event handlers that need `this` to be the element. They cannot use their own `arguments` object. Regular functions are used in these cases.

**Cavab:** Ox funksiyaları konstruktor kimi uyğun deyil. Onlar `this`-in obyekti göstərməsi lazım olan obyekt metodları kimi uyğun deyil. Onlar `this`-ə əsaslanan prototip metodları kimi işləmir. Onlar `this`-in element olması lazım olan hadisə işləyiciləri (event handlers) üçün uyğun deyil. Onlar öz `arguments` obyektindən istifadə edə bilməz. Bu hallarda adi funksiyalardan istifadə olunur.

---

### Question 10. What is an IIFE?

**Sual:** IIFE nədir?

**Answer:** IIFE means immediately invoked function expression. The function is defined and called at once. Wrapping parentheses make the `function` keyword start an expression instead of a declaration. It creates its own function scope. Variables inside it do not leak to the outer scope. It was commonly used before ES modules and `let` and `const`.

**Cavab:** IIFE dərhal çağırılan funksiya ifadəsi (immediately invoked function expression) deməkdir. Funksiya eyni anda təyin edilir və çağırılır. Əhatə edən mötərizələr `function` açar sözünün elan əvəzinə ifadə başlatmasını təmin edir. O, öz funksiya scope-unu yaradır. Onun daxilindəki dəyişənlər xarici scope-a sızmır. O, ES modullarından, `let` və `const`-dan əvvəl geniş istifadə olunurdu.

---

### Question 11. What does it mean that functions are first-class citizens?

**Sual:** Funksiyaların birinci dərəcəli olması nə deməkdir?

**Answer:** First-class functions are treated like any other value. They can be assigned to variables. They can be passed as arguments to other functions. They can be returned from functions. They can be stored in objects and arrays. A function that takes or returns a function is a higher-order function. A function passed as an argument is called a callback.

**Cavab:** Birinci dərəcəli funksiyalar (first-class functions) hər hansı digər dəyər kimi qəbul edilir. Onlar dəyişənlərə mənimsədilə bilər. Onlar başqa funksiyalara arqument kimi ötürülə bilər. Onlar funksiyalardan qaytarıla bilər. Onlar obyektlərdə və massivlərdə saxlanıla bilər. Funksiya qəbul edən və ya qaytaran funksiya higher-order function adlanır. Arqument kimi ötürülən funksiya callback adlanır.

---

### Question 12. How do function declarations behave inside blocks?

**Sual:** Funksiya elanları blokların daxilində necə davranır?

**Answer:** In strict mode and in modules, a function declaration inside a block is block-scoped. It is hoisted to the top of that block. In sloppy mode, extra legacy rules apply for web compatibility. The function can become visible outside the block after the block runs. Results can differ between modes. Function expressions assigned with `let` or `const` always follow block scope.

**Cavab:** Strict mode-da (strict mode) və modullarda blok daxilindəki funksiya elanı blok scope-ludur. O, həmin blokun əvvəlinə qaldırılır. Sloppy mode-da veb uyğunluğu üçün əlavə köhnə qaydalar (legacy rules) tətbiq olunur. Funksiya blok icra olunduqdan sonra blokdan kənarda görünə bilər. Nəticələr rejimlər arasında fərqlənə bilər. `let` və ya `const` ilə mənimsədilən funksiya ifadələri həmişə blok scope-a tabe olur.