# Scope, Hoisting, Temporal Dead Zone

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| scope | görünmə sahəsi |
| global scope | qlobal scope |
| module scope | modul scope-u |
| function scope | funksiya scope-u |
| block scope | blok scope-u |
| lexical scope | leksik scope |
| scope chain | scope zənciri |
| outer scope | xarici scope |
| inner scope | daxili scope |
| enclosing scope | əhatə edən scope |
| variable lookup | dəyişən axtarışı |
| name conflict | ad toqquşması |
| shadowing | adın gizlədilməsi |
| hoisting | elanların yuxarı qaldırılması |
| temporal dead zone | müvəqqəti ölü zona |
| binding | dəyişənin dəyərə bağlılığı |
| declaration | elan etmə |
| initialization | ilk dəyər vermə |
| initializer | ilk dəyər ifadəsi |
| uninitialized | başladılmamış |
| early access | erkən müraciət |
| function declaration | funksiya elanı |
| function expression | funksiya ifadəsi |
| arrow function | ox funksiyası |
| class declaration | sinif elanı |
| parameter | parametr |
| default parameter | default dəyərli parametr |
| curly braces | fiqurlu mötərizələr |
| `case` clause | `case` bəndi |
| engine | mühərrik |
| write time | yazılma vaxtı |
| call time | çağırış vaxtı |

## 2. Interview Questions

### Question 1. What is scope?

**Sual:** Scope nədir?

**Answer:** Scope defines where a variable can be accessed in code. It controls the visibility of variables. Code in an inner scope can access variables of outer scopes. Code in an outer scope cannot access variables of inner scopes. Scope helps avoid name conflicts.

**Cavab:** Scope (görünmə sahəsi) dəyişənə kodun harasında müraciət oluna biləcəyini müəyyən edir. O, dəyişənlərin görünməsini idarə edir. Daxili scope-dakı kod xarici scope-ların dəyişənlərinə müraciət edə bilər. Xarici scope-dakı kod isə daxili scope-ların dəyişənlərinə müraciət edə bilməz. Scope ad toqquşmalarının (name conflicts) qarşısını alır.

---

### Question 2. What types of scope exist in JavaScript?

**Sual:** JavaScript-də hansı scope növləri mövcuddur?

**Answer:** Global scope is the outermost scope. Module scope applies to the top level of an ES module. Variables in module scope are not global. Function scope is created by each function. Block scope is created by curly braces, as in `if`, `for`, or a plain block. `let`, `const`, and `class` declarations are block-scoped. `var` ignores blocks and uses function scope.

**Cavab:** Global scope ən xarici scope-dur. Modul scope-u ES modulunun üst səviyyəsinə aiddir. Modul scope-undakı dəyişənlər qlobal deyil. Hər funksiya funksiya scope-u yaradır. Blok scope-u `if`, `for` kimi konstruksiyaların və ya sadə blokun fiqurlu mötərizələri (curly braces) ilə yaranır. `let`, `const` və `class` elanları blok scope-ludur. `var` isə blokları nəzərə almır və funksiya scope-u ilə işləyir.

---

### Question 3. What are lexical scope and the scope chain?

**Sual:** Lexical scope və scope chain nədir?

**Answer:** Lexical scope means scope is decided by where code is written. It is fixed at write time, not at call time. Each scope has a link to its outer scope. These links form the scope chain. A variable lookup starts in the current scope and moves outward. It stops at the first match. If no match is found in the global scope, reading the variable throws a ReferenceError.

**Cavab:** Lexical scope scope-un kodun yazıldığı yerə görə müəyyən olunması deməkdir. O, çağırış vaxtında yox, yazılma vaxtında sabitlənir. Hər scope-un xarici scope-a bağlantısı var. Bu bağlantılar scope chain-i əmələ gətirir. Dəyişən axtarışı (variable lookup) cari scope-dan başlayır və xaricə doğru davam edir. Axtarış ilk uyğunluqda dayanır. Qlobal scope-da da uyğunluq tapılmasa, dəyişəni oxumaq ReferenceError verir.

---

### Question 4. What is variable shadowing?

**Sual:** Dəyişənin gizlədilməsi (shadowing) nədir?

**Answer:** Shadowing happens when an inner variable has the same name as an outer variable. The inner variable hides the outer one inside its scope. The outer variable is not changed. Function parameters can also shadow outer variables. A `var` cannot be declared with the same name as a `let` in an enclosing scope of the same function. This causes a SyntaxError.

**Cavab:** Shadowing daxili dəyişənin adı xarici dəyişənlə eyni olduqda baş verir. Daxili dəyişən öz scope-unda xarici dəyişəni gizlədir. Xarici dəyişən dəyişmir. Funksiya parametrləri də xarici dəyişənləri gizlədə bilər. `var` eyni funksiyadakı əhatə edən scope-da elan olunmuş `let` ilə eyni adla elan edilə bilməz. Bu, SyntaxError verir.

---

### Question 5. What is hoisting?

**Sual:** Hoisting nədir?

**Answer:** Hoisting is the process where declarations are registered before code runs. The engine processes declarations when a scope is entered. Only declarations are hoisted, not initializations. A `var` variable is hoisted to the top of its function scope and set to `undefined`. A `let`, `const`, or `class` binding is hoisted to the top of its block but not initialized. Hoisting does not physically move code.

**Cavab:** Hoisting elanların kod işləməzdən əvvəl qeydə alınması prosesidir. Mühərrik (engine) scope-a daxil olarkən elanları emal edir. Yalnız elanlar hoisting olunur, ilk dəyər vermə (initialization) isə olunmur. `var` dəyişəni funksiya scope-unun əvvəlinə qaldırılır və `undefined` ilə başladılır. `let`, `const` və `class` binding-i blokun əvvəlinə qaldırılır, lakin başladılmır. Hoisting kodu fiziki olaraq yerindən tərpətmir.

---

### Question 6. How are function declarations and function expressions hoisted?

**Sual:** Funksiya elanları və funksiya ifadələri necə hoisting olunur?

**Answer:** A function declaration is fully hoisted with its body. It can be called before its position in the code. A function expression is not hoisted as a function. With `var`, only the variable name is hoisted with the value `undefined`. Calling it early throws a TypeError. With `let` or `const`, calling it early throws a ReferenceError. Arrow functions follow the same rules as function expressions.

**Cavab:** Funksiya elanı (function declaration) gövdəsi ilə birlikdə tam hoisting olunur. Onu kodda yerləşdiyi yerdən əvvəl çağırmaq olar. Funksiya ifadəsi (function expression) funksiya kimi hoisting olunmur. `var` ilə yalnız dəyişən adı `undefined` dəyəri ilə qaldırılır. Onu erkən çağırmaq TypeError verir. `let` və ya `const` ilə erkən çağırış ReferenceError verir. Ox funksiyaları (arrow functions) funksiya ifadələri ilə eyni qaydalara tabedir.

---

### Question 7. Are `let`, `const`, and `class` hoisted?

**Sual:** `let`, `const` və `class` hoisting olunurmu?

**Answer:** Yes, they are hoisted, but they are not initialized. Their bindings exist from the start of the block. This can be seen with shadowing. If an inner block declares `let x`, an earlier access to `x` in that block does not read the outer `x`. It throws a ReferenceError instead. `class` declarations behave the same way. So the difference from `var` is initialization, not hoisting.

**Cavab:** Bəli, onlar hoisting olunur, lakin başladılmır. Binding-lər blokun əvvəlindən mövcuddur. Bunu shadowing göstərir. Daxili blokda `let x` elan olunubsa, həmin blokda ondan əvvəl `x`-ə müraciət xarici `x`-i oxumur. Əvəzində ReferenceError verir. `class` elanları (class declarations) da eyni cür davranır. Beləliklə, `var` ilə fərq hoisting-də yox, başladılmadadır.

---

### Question 8. What is the temporal dead zone?

**Sual:** Temporal dead zone nədir?

**Answer:** The temporal dead zone is the period between entering a scope and running a declaration. In this period, a `let`, `const`, or `class` binding exists but is uninitialized. Accessing it throws a ReferenceError. The zone ends when the declaration is evaluated. It depends on the time of execution, not on the position in the text. A function that uses the variable can be written above the declaration if it is called after it.

**Cavab:** Temporal dead zone (müvəqqəti ölü zona) scope-a daxil olma ilə elanın icrası arasındakı dövrdür. Bu dövrdə `let`, `const` və ya `class` binding-i mövcuddur, lakin başladılmayıb (uninitialized). Ona müraciət ReferenceError verir. Zona elan icra olunanda bitir. O, mətndəki yerə görə yox, icra vaxtına görə müəyyən edilir. Dəyişəndən istifadə edən funksiya elandan yuxarıda yazıla bilər, əgər o, elandan sonra çağırılırsa.

---

### Question 9. Why does the temporal dead zone exist?

**Sual:** Temporal dead zone niyə mövcuddur?

**Answer:** The temporal dead zone catches use-before-declaration errors early. It prevents code from silently reading `undefined`. It also makes `const` meaningful. A `const` variable should never be observed with two different values. With `var`-style initialization, `const` would be `undefined` first and then change. It also makes block-scoped variables more predictable.

**Cavab:** Temporal dead zone elandan əvvəl istifadə xətalarını erkən aşkar edir. O, kodun səssizcə `undefined` oxumasının qarşısını alır. Bu, `const`-u da mənalı edir. `const` dəyişəni heç vaxt iki fərqli dəyərlə müşahidə olunmamalıdır. `var` kimi başladılma olsaydı, `const` əvvəlcə `undefined` olar, sonra dəyişərdi. O, blok scope-lu dəyişənlərin davranışını da daha proqnozlaşdırıla bilən edir.

---

### Question 10. In which cases does the temporal dead zone appear besides simple early access?

**Sual:** Sadə erkən müraciətdən başqa, temporal dead zone hansı hallarda meydana çıxır?

**Answer:** Besides simple early access, the temporal dead zone appears in several cases. In a declaration, the initializer cannot refer to the variable itself. A default parameter cannot refer to a parameter that comes later. The `typeof` operator throws for a variable in the temporal dead zone. All `case` clauses of a `switch` share one block scope. A `let` declared in one `case` can therefore be in the temporal dead zone in another.

**Cavab:** Sadə erkən müraciətdən (early access) başqa, temporal dead zone bir neçə halda meydana çıxır. Elan zamanı ilk dəyər ifadəsi (initializer) dəyişənin özünə müraciət edə bilməz. Default dəyərli parametr (default parameter) sonrakı parametrə müraciət edə bilməz. `typeof` operatoru temporal dead zone-dakı dəyişən üçün xəta atır. `switch`-in bütün `case` bəndləri bir blok scope-u paylaşır. Buna görə bir `case`-də elan olunan `let` başqa `case`-də temporal dead zone-da ola bilər.

---

### Question 11. What happens when a function and a `var` have the same name?

**Sual:** Funksiya ilə `var` eyni ada malik olduqda nə baş verir?

**Answer:** Function declarations are hoisted before `var` declarations. If a `var` and a function share a name, the name holds the function at the start. A `var` declaration without a value does not overwrite it. A later assignment does overwrite it. The final value therefore depends on the order of assignments in the code.

**Cavab:** Funksiya elanları `var` elanlarından əvvəl hoisting olunur. `var` və funksiya eyni ada malikdirsə, əvvəlcə ad funksiyanı saxlayır. Dəyər verilməyən `var` elanı onun üzərinə yazmır. Sonrakı dəyər mənimsətmə isə onun üzərinə yazır. Beləliklə, son dəyər kodda mənimsətmələrin ardıcıllığından asılıdır.