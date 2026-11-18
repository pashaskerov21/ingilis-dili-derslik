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

**Cavab:** Dəyişən, yaddaşdakı bir qiymətə verilən addır. JavaScript-də dəyişənlər `var`, `let` və ya `const` vasitəsilə elan edilir. `let` və `const` ES6 (2015) versiyasında əlavə olunub. Elan etmə (declaration) dəyişəni yaradır. İlkin dəyər vermə (initialization) ona ilk qiyməti təyin edir. Dəyər təyini (assignment) isə sonradan həmin qiyməti dəyişir. Dəyişən adlarında böyük və kiçik hərflər fərqləndirilir (case-sensitive). Ad rəqəmlə başlaya bilməz və ya xüsusi təyinatlı (rezerv edilmiş) söz ola bilməz.

---

### Question 2. What are the main differences between `var`, `let`, and `const`?

**Sual:** `var`, `let` və `const` arasındakı əsas fərqlər hansılardır?

**Answer:** `var` is function-scoped. `let` and `const` are block-scoped. `var` and `let` allow reassignment, but `const` does not. `var` allows redeclaration in the same scope, but `let` and `const` do not. A `var` variable is hoisted and initialized with `undefined`. A `let` or `const` variable cannot be accessed before its declaration.

**Cavab:** `var` funksiya səviyyəsində əhatə dairəsinə (function-scoped) malikdir. `let` və `const` isə blok səviyyəsində əhatə dairəsinə (block-scoped) malikdir. `var` və `let` dəyişənlərinə yeni dəyər mənimsədilə bilər, lakin `const` üçün bu mümkün deyil. `var` eyni əhatə dairəsində yenidən elan edilə bilər, ancaq `let` və `const` üçün bu yolverilməzdir. `var` dəyişəni "hoisting" (yuxarı qaldırılma) prosesinə məruz qalır və ilkin olaraq `undefined` dəyəri ilə inisiallaşdırılır. `let` və ya `const` dəyişənlərinə isə elan edilməzdən əvvəl müraciət etmək mümkün deyil.

---

### Question 3. What is `var`, and how does it behave?

**Sual:** `var` nədir və necə davranır?

**Answer:** `var` is the original way to declare variables in JavaScript. It is function-scoped, not block-scoped. A `var` declaration inside a block is visible in the whole function. The same name can be declared again in the same scope. At the top level of a browser script, a `var` variable becomes a property of the global object. In modules, it does not.

**Cavab:** `var` JavaScript-də dəyişənləri elan etməyin ilkin üsuludur. O, blok əhatə dairəsinə (block scope) deyil, funksiya əhatə dairəsinə (function scope) malikdir. Blok daxilində elan edilmiş `var` dəyişəni bütün funksiya daxilində görünür. Eyni əhatə dairəsində eyni adla təkrar dəyişən elan etmək mümkündür. Brauzer skriptinin ən üst səviyyəsində `var` dəyişəni qlobal obyektin xassəsinə çevrilir. Modullarda isə belə olmur.

---

### Question 4. What is `let`, and how does it behave?

**Sual:** `let` nədir və necə davranır?

**Answer:** `let` was added in ES6 to declare block-scoped variables. A `let` variable exists only inside its block. Its value can be reassigned. The same name cannot be declared twice in the same scope. A `let` variable is not accessible before its declaration line. A `let` declaration without a value gives `undefined`. At the top level, `let` does not create a property of the global object.

**Cavab:** `let` ES6 versiyasında blok əhatə dairəsinə (block scope) malik dəyişənləri elan etmək üçün əlavə edilmişdir. `let` dəyişəni yalnız aid olduğu blok daxilində mövcud olur. Onun dəyəri yenidən təyin edilə bilər. Eyni əhatə dairəsində eyni ada malik dəyişən iki dəfə elan edilə bilməz. `let` dəyişəninə onun elan olunduğu sətirdən əvvəl müraciət etmək mümkün deyil. Dəyər verilmədən elan edilən `let` dəyişəni `undefined` nəticəsini qaytarır. Ən üst səviyyədə `let` qlobal obyektin xassəsini (property) yaratmır.

---

### Question 5. What is `const`, and how does it behave?

**Sual:** `const` nədir və necə davranır?

**Answer:** `const` declares a block-scoped variable that cannot be reassigned. It must be given a value at declaration. Declaring it without a value causes a SyntaxError. Reassignment causes a TypeError. The same name cannot be declared twice in the same scope. `const` fixes the binding, not the value itself.

**Cavab:** `const` blok əhatə dairəsinə malik, yenidən təyin edilə bilməyən dəyişən elan edir. Onu elan edərkən mütləq bir dəyər verilməlidir. Dəyər vermədən elan etmək `SyntaxError` xətasına səbəb olur. Yenidən təyin etməyə cəhd isə `TypeError` xətasına gətirib çıxarır. Eyni əhatə dairəsində eyni adla iki dəfə dəyişən elan etmək olmaz. `const` dəyərin özünü deyil, bağlamanı (binding) sabitləşdirir.

---

### Question 6. Does `const` make a value immutable?

**Sual:** `const` dəyəri dəyişməz edirmi?

**Answer:** No, `const` prevents reassignment only. Primitive values are immutable by nature. Objects and arrays declared with `const` can still be modified. Properties and elements can be added, changed, or removed. `Object.freeze()` blocks changes to the top-level properties of an object. It is shallow, so nested objects remain changeable. Changes to a frozen object fail silently, or throw a TypeError in strict mode.

**Cavab:** Xeyr, `const` yalnız yenidən təyin etmənin (reassignment) qarşısını alır. İbtidai (primitive) dəyərlər təbiətcə dəyişməzdir. `const` ilə elan edilmiş obyektlər və massivlər isə dəyişdirilə bilər; onlara xassələr və elementlər əlavə etmək, mövcud olanları dəyişdirmək və ya silmək mümkündür. `Object.freeze()` obyektin ən üst səviyyəsindəki xassələrdə dəyişiklik edilməsinin qarşısını alır. Bu, "səthi" (shallow) təsirə malikdir, yəni iç-içə yerləşən obyektlər dəyişdirilə bilən olaraq qalır. "Dondurulmuş" (frozen) obyekt üzərində dəyişiklik etməyə cəhd göstərildikdə, heç bir xəbərdarlıq verilmədən əməliyyat baş tutmur və ya "strict mode" (sərt rejim) aktiv olduqda `TypeError` xətası yaranır.

---

### Question 7. What happens when a variable is used before its declaration?

**Sual:** Dəyişən elan olunmazdan əvvəl istifadə edildikdə nə baş verir?

**Answer:** The result depends on the keyword. A `var` variable is hoisted and initialized with `undefined`. Reading it early gives `undefined`. A `let` or `const` variable is hoisted but not initialized. It stays in the temporal dead zone until its declaration runs. Access in this zone throws a ReferenceError.

**Cavab:** Nəticə açar sözdən asılıdır. `var` dəyişəni "yuxarı qaldırılır" (hoisting) və `undefined` dəyəri ilə ilkinləşdirilir. Ona vaxtından əvvəl müraciət etdikdə `undefined` nəticəsi alınır. `let` və ya `const` dəyişəni də "yuxarı qaldırılır", lakin ilkinləşdirilmir. O, elan edildiyi sətir icra olunana qədər "müvəqqəti ölü zona"da (temporal dead zone) qalır. Bu zonada dəyişənə müraciət etmək `ReferenceError` xətasına səbəb olur.

---

### Question 8. What happens when a value is assigned to an undeclared variable?

**Sual:** Elan edilməmiş dəyişənə dəyər mənimsədildikdə nə baş verir?

**Answer:** In sloppy mode, assignment to an undeclared name creates a global variable. This is called an implicit global. It becomes a property of the global object. In strict mode, the same assignment throws a ReferenceError. ES modules and class bodies always run in strict mode. Implicit globals are a common source of bugs.

**Cavab:** "Sloppy" (sərbəst) rejimdə, elan olunmamış bir ada dəyər mənimsədilməsi qlobal dəyişənin yaradılmasına səbəb olur. Buna "örtülü qlobal" (implicit global) deyilir. Bu, qlobal obyektin xassəsinə çevrilir. "Strict" (sərt) rejimdə isə eyni əməliyyat `ReferenceError` xətasına səbəb olur. ES modulları və sinif gövdələri həmişə "strict" rejimdə icra olunur. Örtülü qlobal dəyişənlər proqram xətalarının (baqların) tez-tez rast gəlinən mənbəyidir.

---

### Question 9. What is the difference between `undefined` and a ReferenceError for variables?

**Sual:** Dəyişənlər üçün `undefined` ilə ReferenceError arasındakı fərq nədir?

**Answer:** A declared variable without a value holds `undefined`. An undeclared variable has no binding at all. Reading it throws a ReferenceError. The `typeof` operator returns the string "undefined" for an undeclared name. It does not throw in that case. It does throw for a `let` or `const` variable in the temporal dead zone.

**Cavab:** Dəyər verilmədən elan edilmiş dəyişən `undefined` qiymətini saxlayır. Elan edilməmiş dəyişənin isə heç bir bağlılığı (istinadı) yoxdur. Ona müraciət etmək `ReferenceError` xətasına səbəb olur. `typeof` operatoru elan edilməmiş ad üçün "undefined" sətri qaytarır; bu halda heç bir xəta baş vermir. Lakin `let` və ya `const` dəyişənləri "müvəqqəti ölü zona"da (temporal dead zone) olduqda, xəta yaranır.

---

### Question 10. Why do `var` and `let` behave differently in loops with asynchronous callbacks?

**Sual:** Asinxron geriçağırma funksiyaları (callbacks) olan dövrlərdə `var` və `let` niyə fərqli davranır?

**Answer:** A `var` loop variable belongs to the whole function. All callbacks share the same variable. They run after the loop ends and see its final value. A `let` loop variable is created again for each iteration. Each callback sees its own variable. This is a typical closure-related interview trap.

**Cavab:** `var` ilə təyin edilmiş dövr dəyişəni bütün funksiyaya aiddir. Bütün "callback" funksiyaları eyni dəyişəni paylaşır. Onlar dövr başa çatdıqdan sonra icra olunur və həmin dəyişənin son qiymətini görürlər. `let` ilə təyin edilmiş dövr dəyişəni isə hər iterasiya üçün yenidən yaradılır. Hər bir "callback" funksiyası özünə məxsus dəyişəni görür. Bu, "closure" (bağlam) mövzusu ilə bağlı müsahibələrdə tez-tez rast gəlinən tipik bir tələdir.

---

### Question 11. Can `const` be used as a loop variable?

**Sual:** `const` dövr dəyişəni kimi istifadə oluna bilərmi?

**Answer:** It depends on the loop type. In `for...of` and `for...in` loops, `const` works. A new binding is created for each iteration. In a classic `for` loop, the counter is changed after each iteration. A `const` counter therefore throws a TypeError on the first increment. A `let` counter is used in that case.

**Cavab:** Bu, dövrün növündən asılıdır. `for...of` və `for...in` dövrlərində `const` işləyir; hər iterasiya üçün yeni bir bağlama (binding) yaradılır. Klassik `for` dövründə isə sayğac hər iterasiyadan sonra dəyişdirilir. Buna görə də, `const` ilə təyin edilmiş sayğac ilk artırma əməliyyatı zamanı `TypeError` xətasına səbəb olur. Belə hallarda `let` ilə təyin edilmiş sayğacdan istifadə olunur.

---

### Question 12. Which keyword is used by default, and why?

**Sual:** Standart olaraq hansı açar söz istifadə olunur və niyə?

**Answer:** `const` is used by default in modern JavaScript. It shows that a variable will not be reassigned. `let` is used only when reassignment is needed. `var` is mostly found in legacy code. The block scope of `let` and `const` limits where a variable is visible. This reduces accidental bugs.

**Cavab:** Müasir JavaScript-də standart olaraq `const` istifadə olunur. Bu, dəyişənə yenidən dəyər təyin edilməyəcəyini göstərir. `let` isə yalnız yenidən təyinat tələb olunduqda istifadə edilir. `var` daha çox köhnə kodlarda rast gəlinir. `let` və `const`-un malik olduğu blok əhatə dairəsi (block scope) dəyişənin görünmə sahəsini məhdudlaşdırır. Bu da təsadüfi xətaların yaranma ehtimalını azaldır.