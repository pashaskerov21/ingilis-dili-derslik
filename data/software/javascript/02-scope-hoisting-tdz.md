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

**Cavab:** Əhatə dairəsi (scope) kod daxilində dəyişənə haradan müraciət oluna biləcəyini müəyyən edir. O, dəyişənlərin görünürlüğünə nəzarət edir. Daxili əhatə dairəsindəki kod xarici əhatə dairələrindəki dəyişənlərə müraciət edə bilər. Xarici əhatə dairəsindəki kod isə daxili əhatə dairələrindəki dəyişənlərə müraciət edə bilməz. Əhatə dairəsi ad toqquşmalarının qarşısını almağa kömək edir.

---

### Question 2. What types of scope exist in JavaScript?

**Sual:** JavaScript-də hansı scope növləri mövcuddur?

**Answer:** Global scope is the outermost scope. Module scope applies to the top level of an ES module. Variables in module scope are not global. Function scope is created by each function. Block scope is created by curly braces, as in `if`, `for`, or a plain block. `let`, `const`, and `class` declarations are block-scoped. `var` ignores blocks and uses function scope.

**Cavab:** Qlobal əhatə dairəsi (global scope) ən xarici əhatə dairəsidir. Modul əhatə dairəsi (module scope) ES modulunun ən üst səviyyəsinə aiddir. Modul əhatə dairəsindəki dəyişənlər qlobal deyil. Funksiya əhatə dairəsi (function scope) hər bir funksiya tərəfindən yaradılır. Blok əhatə dairəsi (block scope) isə `if`, `for` və ya sadə bir blokda olduğu kimi, fiqurlu mötərizələr vasitəsilə formalaşır. `let`, `const` və `class` elanları blok əhatə dairəsinə malikdir. `var` isə blokları nəzərə almır və funksiya əhatə dairəsindən istifadə edir.

---

### Question 3. What are lexical scope and the scope chain?

**Sual:** Lexical scope və scope chain nədir?

**Answer:** Lexical scope means scope is decided by where code is written. It is fixed at write time, not at call time. Each scope has a link to its outer scope. These links form the scope chain. A variable lookup starts in the current scope and moves outward. It stops at the first match. If no match is found in the global scope, reading the variable throws a ReferenceError.

**Cavab:** Leksik əhatə dairəsi (lexical scope) o deməkdir ki, əhatə dairəsi kodun harada yazılması ilə müəyyən edilir. O, çağırış zamanı deyil, kodun yazıldığı vaxt təyin olunur və dəyişməz qalır. Hər bir əhatə dairəsinin özündən xaricdəki əhatə dairəsinə bağlantısı olur. Bu bağlantılar "əhatə dairəsi zənciri"ni (scope chain) təşkil edir. Dəyişənin axtarışı cari əhatə dairəsindən başlayır və xaricə doğru davam edir. Axtarış ilk uyğunluq tapılan kimi dayanır. Əgər qlobal əhatə dairəsində heç bir uyğunluq tapılmazsa, həmin dəyişəni oxumağa cəhd etdikdə `ReferenceError` xətası yaranır.

---

### Question 4. What is variable shadowing?

**Sual:** Dəyişənin gizlədilməsi (shadowing) nədir?

**Answer:** Shadowing happens when an inner variable has the same name as an outer variable. The inner variable hides the outer one inside its scope. The outer variable is not changed. Function parameters can also shadow outer variables. A `var` cannot be declared with the same name as a `let` in an enclosing scope of the same function. This causes a SyntaxError.

**Cavab:** Kölgələmə (shadowing) o zaman baş verir ki, daxili dəyişənin adı xarici dəyişənin adı ilə eyni olsun. Daxili dəyişən öz əhatə dairəsi daxilində xarici dəyişəni gizlədir. Xarici dəyişən isə dəyişmir. Funksiya parametrləri də xarici dəyişənləri kölgələyə bilər. Eyni funksiyanın əhatə dairəsində `let` ilə elan edilmiş dəyişənlə eyni ada malik `var` dəyişəni elan etmək olmaz. Bu, `SyntaxError` xətasına səbəb olur.

---

### Question 5. What is hoisting?

**Sual:** Hoisting nədir?

**Answer:** Hoisting is the process where declarations are registered before code runs. The engine processes declarations when a scope is entered. Only declarations are hoisted, not initializations. A `var` variable is hoisted to the top of its function scope and set to `undefined`. A `let`, `const`, or `class` binding is hoisted to the top of its block but not initialized. Hoisting does not physically move code.

**Cavab:** "Hoisting" (yuxarı qaldırma) prosesi, kod icra olunmazdan əvvəl elanların qeydə alınmasıdır. Mühərrik, müəyyən bir əhatə dairəsinə (scope) daxil olunduqda elanları emal edir. Yalnız elanlar "yuxarı qaldırılır", ilkin dəyər mənimsətmələri (initializations) isə yox. `var` ilə təyin edilmiş dəyişən öz funksiya əhatə dairəsinin ən yuxarısına qaldırılır və ona `undefined` dəyəri verilir. `let`, `const` və ya `class` təyinatları isə öz bloklarının ən yuxarısına qaldırılır, lakin onlara ilkin dəyər mənimsədilmir. "Hoisting" prosesi kodu fiziki olaraq başqa yerə daşımır.

---

### Question 6. How are function declarations and function expressions hoisted?

**Sual:** Funksiya elanları və funksiya ifadələri necə "hoist" olunur (yuxarı qaldırılır)?

**Answer:** A function declaration is fully hoisted with its body. It can be called before its position in the code. A function expression is not hoisted as a function. With `var`, only the variable name is hoisted with the value `undefined`. Calling it early throws a TypeError. With `let` or `const`, calling it early throws a ReferenceError. Arrow functions follow the same rules as function expressions.

**Cavab:** Funksiya elanı (function declaration) öz gövdəsi ilə birlikdə tam şəkildə "yuxarı qaldırılır" (hoisting). Onu kodda yerləşdiyi yerdən əvvəl çağırmaq mümkündür. Funksiya ifadəsi (function expression) isə funksiya kimi "yuxarı qaldırılmır". `var` istifadə edildikdə, yalnız dəyişənin adı `undefined` dəyəri ilə birlikdə "yuxarı qaldırılır". Onu vaxtından əvvəl çağırmaq `TypeError` xətasına səbəb olur. `let` və ya `const` istifadə edildikdə isə, onu vaxtından əvvəl çağırmaq `ReferenceError` xətası yaradır. Ox funksiyaları (arrow functions) da funksiya ifadələri ilə eyni qaydalara tabedir.
---

### Question 7. Are `let`, `const`, and `class` hoisted?

**Sual:** `let`, `const` və `class` hoisting olunurmu?

**Answer:** Yes, they are hoisted, but they are not initialized. Their bindings exist from the start of the block. This can be seen with shadowing. If an inner block declares `let x`, an earlier access to `x` in that block does not read the outer `x`. It throws a ReferenceError instead. `class` declarations behave the same way. So the difference from `var` is initialization, not hoisting.

**Cavab:** Bəli, onlar "hoisting" (yuxarı qaldırılma) prosesinə məruz qalır, lakin ilkin dəyər mənimsədilmir (initsiallaşdırılmır). Onların bağlamaları (bindings) blokun əvvəlindən etibarən mövcud olur. Bunu "kölgələmə" (shadowing) nümunəsində görmək olar: əgər daxili blokda `let x` elan edilərsə, həmin blokda `x`-ə daha əvvəl müraciət edildikdə, bu, xarici `x`-i oxumur; əvəzində `ReferenceError` xətası verir. `class` elanları da eyni şəkildə davranır. Beləliklə, `var`-dan fərq "hoisting"də deyil, ilkin dəyər mənimsədilməsi (initsiallaşdırma) mərhələsindədir.

---

### Question 8. What is the temporal dead zone?

**Sual:** Müvəqqəti ölü zona nədir?

**Answer:** The temporal dead zone is the period between entering a scope and running a declaration. In this period, a `let`, `const`, or `class` binding exists but is uninitialized. Accessing it throws a ReferenceError. The zone ends when the declaration is evaluated. It depends on the time of execution, not on the position in the text. A function that uses the variable can be written above the declaration if it is called after it.

**Cavab:** "Müvəqqəti ölü zona" (temporal dead zone) — əhatə dairəsinə (scope) daxil olma anı ilə deklarasiyanın icra olunması arasındakı dövrdür. Bu müddət ərzində `let`, `const` və ya `class` vasitəsilə təyin edilmiş element mövcud olur, lakin ilkin qiyməti təyin edilməmiş (uninitialized) vəziyyətdə qalır. Ona müraciət etməyə cəhd göstərildikdə `ReferenceError` xətası yaranır. Deklarasiya qiymətləndirildikdə (icra olunduqda) bu zona başa çatır. Bu proses kodun mətn daxilindəki mövqeyindən deyil, icra anından asılıdır. Əgər dəyişəndən istifadə edən funksiya həmin dəyişənin deklarasiyasından sonra çağırılacaqsa, həmin funksiyanı deklarasiyadan əvvəl yazmaq mümkündür.

---

### Question 9. Why does the temporal dead zone exist?

**Sual:** Temporal dead zone niyə mövcuddur?

**Answer:** The temporal dead zone catches use-before-declaration errors early. It prevents code from silently reading `undefined`. It also makes `const` meaningful. A `const` variable should never be observed with two different values. With `var`-style initialization, `const` would be `undefined` first and then change. It also makes block-scoped variables more predictable.

**Cavab:** Müvəqqəti ölü zona (temporal dead zone) dəyişən elan olunmazdan əvvəl ondan istifadə edildikdə baş verən xətaları erkən mərhələdə aşkar edir. Bu, kodun səssizcə `undefined` dəyərini oxumasının qarşısını alır. Həmçinin, bu mexanizm `const` açar sözünə məna qazandırır. `const` dəyişəni heç vaxt iki fərqli dəyərlə müşahidə olunmamalıdır. Əgər `var` üslubunda inisializasiya tətbiq edilsəydi, `const` əvvəlcə `undefined` olardı, daha sonra isə dəyəri dəyişərdi. Bundan əlavə, bu yanaşma blok əhatə dairəsinə (block scope) malik dəyişənlərin davranışını daha proqnozlaşdırıla bilən edir.

---

### Question 10. In which cases does the temporal dead zone appear besides simple early access?

**Sual:** Sadə erkən girişdən (early access) başqa, hansı hallarda "müvəqqəti ölü zona" (temporal dead zone) yaranır?

**Answer:** Besides simple early access, the temporal dead zone appears in several cases. In a declaration, the initializer cannot refer to the variable itself. A default parameter cannot refer to a parameter that comes later. The `typeof` operator throws for a variable in the temporal dead zone. All `case` clauses of a `switch` share one block scope. A `let` declared in one `case` can therefore be in the temporal dead zone in another.

**Cavab:** Sadəcə erkən müraciətdən əlavə, "müvəqqəti ölü zona" (temporal dead zone) anlayışı bir neçə başqa halda da ortaya çıxır. Dəyişənin elan edilməsi zamanı onun ilkin qiymət təyinedicisi (initializer) həmin dəyişənin özünə istinad edə bilməz. Funksiyanın standart parametri özündən sonra gələn başqa bir parametrə istinad edə bilməz. "Müvəqqəti ölü zona"da olan dəyişənə `typeof` operatoru ilə müraciət edildikdə xəta baş verir. `switch` ifadəsindəki bütün `case` blokları vahid əhatə dairəsini (scope) paylaşır. Buna görə də, bir `case` daxilində `let` vasitəsilə elan edilmiş dəyişən, başqa bir `case` daxilində "müvəqqəti ölü zona"da ola bilər.

---

### Question 11. What happens when a function and a `var` have the same name?

**Sual:** Bir funksiya və bir `var` eyni ada sahib olduqda nə baş verir?

**Answer:** Function declarations are hoisted before `var` declarations. If a `var` and a function share a name, the name holds the function at the start. A `var` declaration without a value does not overwrite it. A later assignment does overwrite it. The final value therefore depends on the order of assignments in the code.

**Cavab:** Funksiya elanları `var` elanlarından əvvəl yuxarı qaldırılır (hoisting). Əgər `var` və funksiya eyni ada sahibdirsə, həmin ad başlanğıcda funksiyanı özündə saxlayır. Dəyəri olmayan `var` elanı onu əvəz etmir. Lakin sonradan edilən mənimsətmə onu əvəz edir. Buna görə də, yekun dəyər kodda mənimsətmələrin ardıcıllığından asılıdır.