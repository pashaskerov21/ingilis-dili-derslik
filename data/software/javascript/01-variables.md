# Variables: var, let, const

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| variable | dəyişən |
| keyword | açar söz |
| reserved word | rezerv olunmuş söz |
| case-sensitive | böyük və kiçik hərflər fərqlənir |
| declaration | elan etmə |
| initialization | ilk dəyər vermə |
| assignment | dəyər mənimsətmə |
| reassignment | yenidən dəyər mənimsətmə |
| redeclaration | təkrar elan etmə |
| scope | görünmə sahəsi |
| function scope | funksiya scope-u |
| block scope | blok scope-u |
| block | blok |
| hoisting | kodun yuxarı qaldırılması |
| temporal dead zone | müvəqqəti ölü zona |
| global object | qlobal obyekt |
| global variable | qlobal dəyişən |
| implicit global | gizli qlobal dəyişən |
| undeclared variable | elan edilməmiş dəyişən |
| strict mode | ciddi rejim |
| sloppy mode | ciddi olmayan rejim |
| ES module | ES modulu |
| binding | dəyişənin dəyərə bağlılığı |
| immutable | dəyişməz |
| mutable | dəyişə bilən |
| primitive value | primitiv dəyər |
| property | xassə |
| element | element |
| shallow | səthi |
| nested | daxili (iç-içə) |
| loop variable | dövr dəyişəni |
| counter | sayğac |
| iteration | iterasiya |
| closure | closure |
| callback | geri çağırış funksiyası |
| legacy code | köhnə kod |

## 2. Interview Questions

### Question 1. What is a variable?

**Sual:** Dəyişən nədir?

**Answer:** A variable is a name for a value in memory. In JavaScript, variables are declared with `var`, `let`, or `const`. `let` and `const` were added in ES6 (2015). Declaration creates the variable. Initialization gives it the first value. Assignment changes the value later. Variable names are case-sensitive. A name cannot start with a digit or be a reserved word.

**Cavab:** Dəyişən yaddaşdakı dəyərə verilən addır. JavaScript-də dəyişənlər `var`, `let` və ya `const` ilə elan edilir. `let` və `const` ES6 (2015) ilə əlavə olunub. Elan etmə (declaration) dəyişəni yaradır. İlk dəyər vermə (initialization) ona ilk dəyəri verir. Dəyər mənimsətmə (assignment) isə dəyəri sonradan dəyişir. Dəyişən adlarında böyük və kiçik hərflər fərqlənir. Ad rəqəmlə başlaya bilməz və rezerv olunmuş söz (reserved word) ola bilməz.

---

### Question 2. What are the main differences between `var`, `let`, and `const`?

**Sual:** `var`, `let` və `const` arasındakı əsas fərqlər hansılardır?

**Answer:** `var` is function-scoped. `let` and `const` are block-scoped. `var` and `let` allow reassignment, but `const` does not. `var` allows redeclaration in the same scope, but `let` and `const` do not. A `var` variable is hoisted and initialized with `undefined`. A `let` or `const` variable cannot be accessed before its declaration.

**Cavab:** `var` funksiya səviyyəli scope-a malikdir. `let` və `const` isə blok səviyyəli scope-a malikdir. `var` və `let` yenidən dəyər mənimsətməyə (reassignment) icazə verir, `const` isə vermir. `var` eyni scope-da təkrar elan edilə bilər (redeclaration), `let` və `const` isə bilməz. `var` dəyişəni hoisting olunur və `undefined` ilə başladılır. `let` və `const` dəyişəninə elan sətrindən əvvəl müraciət etmək olmaz.

---

### Question 3. What is `var`, and how does it behave?

**Sual:** `var` nədir və necə davranır?

**Answer:** `var` is the original way to declare variables in JavaScript. It is function-scoped, not block-scoped. A `var` declaration inside a block is visible in the whole function. The same name can be declared again in the same scope. At the top level of a browser script, a `var` variable becomes a property of the global object. In modules, it does not.

**Cavab:** `var` JavaScript-də dəyişən elan etməyin ilkin üsuludur. Onun scope-u funksiyadır, blok deyil. Blok daxilində `var` ilə elan edilən dəyişən bütün funksiyada görünür. Eyni ad eyni scope-da yenidən elan edilə bilər. Brauzerdə skriptin üst səviyyəsində `var` dəyişəni qlobal obyektin (global object) xassəsinə (property) çevrilir. Modullarda isə bu baş vermir.

---

### Question 4. What is `let`, and how does it behave?

**Sual:** `let` nədir və necə davranır?

**Answer:** `let` was added in ES6 to declare block-scoped variables. A `let` variable exists only inside its block. Its value can be reassigned. The same name cannot be declared twice in the same scope. A `let` variable is not accessible before its declaration line. A `let` declaration without a value gives `undefined`. At the top level, `let` does not create a property of the global object.

**Cavab:** `let` blok scope-lu dəyişənləri elan etmək üçün ES6-da əlavə olunub. `let` dəyişəni yalnız öz blokunun (block) daxilində mövcuddur. Onun dəyəri sonradan dəyişdirilə bilər. Eyni ad eyni scope-da iki dəfə elan edilə bilməz. `let` dəyişəninə elan sətrindən əvvəl müraciət etmək olmaz. Dəyər verilmədən elan edilən `let` dəyişəni `undefined` olur. Üst səviyyədə `let` qlobal obyektin xassəsini yaratmır.

---

### Question 5. What is `const`, and how does it behave?

**Sual:** `const` nədir və necə davranır?

**Answer:** `const` declares a block-scoped variable that cannot be reassigned. It must be given a value at declaration. Declaring it without a value causes a SyntaxError. Reassignment causes a TypeError. The same name cannot be declared twice in the same scope. `const` fixes the binding, not the value itself.

**Cavab:** `const` yenidən dəyər mənimsədilə bilməyən blok scope-lu dəyişən elan edir. Ona elan zamanı dəyər verilməlidir. Dəyər verilmədən elan etmək SyntaxError-a səbəb olur. Yenidən dəyər mənimsətmə isə TypeError verir. Eyni ad eyni scope-da iki dəfə elan edilə bilməz. `const` dəyərin özünü yox, dəyişənin həmin dəyərə bağlılığını (binding) sabit saxlayır.

---

### Question 6. Does `const` make a value immutable?

**Sual:** `const` dəyəri dəyişməz edirmi?

**Answer:** No, `const` prevents reassignment only. Primitive values are immutable by nature. Objects and arrays declared with `const` can still be modified. Properties and elements can be added, changed, or removed. `Object.freeze()` blocks changes to the top-level properties of an object. It is shallow, so nested objects remain changeable. Changes to a frozen object fail silently, or throw a TypeError in strict mode.

**Cavab:** Xeyr, `const` yalnız yenidən dəyər mənimsətmənin qarşısını alır. Primitiv dəyərlər (primitive values) təbiətcə dəyişməzdir (immutable). `const` ilə elan edilən obyektlər və massivlər isə yenə də dəyişdirilə bilər. Onlara xassələr və elementlər əlavə oluna, dəyişdirilə və ya silinə bilər. `Object.freeze()` obyektin birinci səviyyəli xassələrinin dəyişdirilməsini əngəlləyir. Bu, səthi (shallow) əməliyyatdır, ona görə daxili (nested) obyektlər dəyişdirilə bilər. Dondurulmuş obyektdə dəyişiklik səssizcə uğursuz olur, strict mode-da isə TypeError verir.

---

### Question 7. What happens when a variable is used before its declaration?

**Sual:** Dəyişən elan olunmazdan əvvəl istifadə edildikdə nə baş verir?

**Answer:** The result depends on the keyword. A `var` variable is hoisted and initialized with `undefined`. Reading it early gives `undefined`. A `let` or `const` variable is hoisted but not initialized. It stays in the temporal dead zone until its declaration runs. Access in this zone throws a ReferenceError.

**Cavab:** Nəticə istifadə olunan açar sözdən (keyword) asılıdır. `var` dəyişəni hoisting olunur və `undefined` ilə başladılır. Ona erkən müraciət `undefined` qaytarır. `let` və `const` dəyişənləri də hoisting olunur, lakin başladılmır. Onlar elan sətri icra olunana qədər müvəqqəti ölü zonada (temporal dead zone) qalır. Bu zonada müraciət ReferenceError verir.

---

### Question 8. What happens when a value is assigned to an undeclared variable?

**Sual:** Elan edilməmiş dəyişənə dəyər mənimsədildikdə nə baş verir?

**Answer:** In sloppy mode, assignment to an undeclared name creates a global variable. This is called an implicit global. It becomes a property of the global object. In strict mode, the same assignment throws a ReferenceError. ES modules and class bodies always run in strict mode. Implicit globals are a common source of bugs.

**Cavab:** Sloppy mode-da elan edilməmiş ada dəyər mənimsətmək qlobal dəyişən yaradır. Buna gizli qlobal dəyişən (implicit global) deyilir. O, qlobal obyektin xassəsinə çevrilir. Strict mode-da eyni əməliyyat ReferenceError verir. ES modulları və sinif gövdələri həmişə strict mode-da işləyir. Gizli qlobal dəyişənlər xətaların geniş yayılmış mənbəyidir.

---

### Question 9. What is the difference between `undefined` and a ReferenceError for variables?

**Sual:** Dəyişənlər üçün `undefined` ilə ReferenceError arasındakı fərq nədir?

**Answer:** A declared variable without a value holds `undefined`. An undeclared variable has no binding at all. Reading it throws a ReferenceError. The `typeof` operator returns the string "undefined" for an undeclared name. It does not throw in that case. It does throw for a `let` or `const` variable in the temporal dead zone.

**Cavab:** Dəyər verilmədən elan edilmiş dəyişən `undefined` saxlayır. Elan edilməmiş dəyişənin (undeclared variable) isə heç bir binding-i yoxdur. Ona müraciət ReferenceError verir. `typeof` operatoru elan edilməmiş ad üçün "undefined" sətrini qaytarır. Bu halda xəta atmır. Lakin müvəqqəti ölü zonadakı `let` və ya `const` dəyişəni üçün xəta atır.

---

### Question 10. Why do `var` and `let` behave differently in loops with asynchronous callbacks?

**Sual:** Asinxron callback-lər olan dövrlərdə `var` və `let` niyə fərqli davranır?

**Answer:** A `var` loop variable belongs to the whole function. All callbacks share the same variable. They run after the loop ends and see its final value. A `let` loop variable is created again for each iteration. Each callback sees its own variable. This is a typical closure-related interview trap.

**Cavab:** `var` ilə elan edilən dövr dəyişəni (loop variable) bütün funksiyaya aiddir. Bütün callback-lər eyni dəyişəni paylaşır. Onlar dövr bitdikdən sonra işləyir və son dəyəri görür. `let` ilə elan edilən dövr dəyişəni isə hər iterasiya (iteration) üçün yenidən yaradılır. Hər callback öz dəyişənini görür. Bu, closure ilə bağlı tipik interview tələsidir.

---

### Question 11. Can `const` be used as a loop variable?

**Sual:** `const` dövr dəyişəni kimi istifadə oluna bilərmi?

**Answer:** It depends on the loop type. In `for...of` and `for...in` loops, `const` works. A new binding is created for each iteration. In a classic `for` loop, the counter is changed after each iteration. A `const` counter therefore throws a TypeError on the first increment. A `let` counter is used in that case.

**Cavab:** Bu, dövrün növündən asılıdır. `for...of` və `for...in` dövrlərində `const` işləyir. Hər iterasiya üçün yeni binding yaradılır. Klassik `for` dövründə sayğac (counter) hər iterasiyadan sonra dəyişdirilir. Buna görə `const` sayğac ilk artımda TypeError verir. Belə hallarda `let` sayğac istifadə olunur.

---

### Question 12. Which keyword is used by default, and why?

**Sual:** Standart olaraq hansı açar söz istifadə olunur və niyə?

**Answer:** `const` is used by default in modern JavaScript. It shows that a variable will not be reassigned. `let` is used only when reassignment is needed. `var` is mostly found in legacy code. The block scope of `let` and `const` limits where a variable is visible. This reduces accidental bugs.

**Cavab:** Müasir JavaScript-də standart olaraq `const` istifadə olunur. O, dəyişənin yenidən dəyər almayacağını göstərir. `let` yalnız yenidən dəyər mənimsətmə lazım olduqda işlədilir. `var` əsasən köhnə koda (legacy code) aiddir. `let` və `const`-un blok scope-u dəyişənin görünmə sahəsini məhdudlaşdırır. Bu, təsadüfi xətaların sayını azaldır.