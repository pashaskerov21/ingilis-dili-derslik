# Conditional Statements: if, else, switch

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| conditional statement | şərt təlimatı |
| statement | təlimat |
| expression | ifadə |
| condition | şərt |
| branch | budaq |
| block | blok |
| body | gövdə |
| curly braces | fiqurlu mötərizələr |
| parentheses | mötərizələr |
| indentation | girinti |
| truthy | true kimi qəbul olunan dəyər |
| falsy | false kimi qəbul olunan dəyər |
| empty string | boş string |
| assignment | mənimsətmə |
| comparison | müqayisə |
| strict equality | ciddi bərabərlik |
| type conversion | tip çevrilməsi |
| syntax error | sintaksis xətası |
| logic error | məntiq xətası |
| linter | linter |
| case clause | case bəndi |
| default clause | default bəndi |
| label | etiket |
| match | uyğunluq |
| fall-through | növbəti bəndə keçid |
| break statement | çıxış təlimatı |
| scope | görünmə sahəsi |
| temporal dead zone | müvəqqəti ölü zona |
| reference | istinad |
| literal | literal |
| range | aralıq |
| complex condition | mürəkkəb şərt |
| comment | şərh |

## 2. Interview Questions

### Question 1. What is the `if` statement?

**Sual:** `if` təlimatı nədir?

**Answer:** The `if` statement runs a block of code when a condition is true. The condition is placed in parentheses. It is converted to a boolean. If the result is false, the block is skipped. The block is written inside curly braces. The statement does not return a value.

**Cavab:** `if` təlimatı (statement) şərt `true` olduqda kod blokunu icra edir. Şərt (condition) mötərizə daxilində yazılır. O, boolean-a çevrilir. Nəticə `false` olarsa, blok buraxılır. Blok fiqurlu mötərizələr daxilində yazılır. Təlimat dəyər qaytarmır.

---

### Question 2. How do `else` and `else if` work?

**Sual:** `else` və `else if` necə işləyir?

**Answer:** The `else` block runs when the `if` condition is false. An `else if` adds another condition. Conditions are checked from top to bottom. The first true condition runs its block. All remaining branches are skipped. `else if` is not a separate keyword. It is an `else` followed by a new `if` statement.

**Cavab:** `else` bloku `if` şərti `false` olduqda icra olunur. `else if` başqa şərt əlavə edir. Şərtlər yuxarıdan aşağıya yoxlanılır. İlk `true` şərt öz blokunu icra edir. Qalan bütün budaqlar (branches) buraxılır. `else if` ayrıca açar söz deyil. O, ardınca yeni `if` təlimatı gələn `else`-dir.

---

### Question 3. What values are treated as true or false in a condition?

**Sual:** Şərtdə hansı dəyərlər doğru, hansılar yalan sayılır?

**Answer:** A condition does not need to be a boolean. JavaScript converts the value to a boolean first. Falsy values are `false`, `0`, `-0`, `0n`, an empty string, `null`, `undefined`, and `NaN`. All other values are truthy. This includes empty arrays and empty objects. The strings "0" and "false" are also truthy.

**Cavab:** Şərtin boolean olması vacib deyil. JavaScript əvvəlcə dəyəri boolean-a çevirir. Falsy dəyərlər `false`, `0`, `-0`, `0n`, boş string (empty string), `null`, `undefined` və `NaN`-dır. Bütün digər dəyərlər truthy-dir. Buraya boş massivlər və boş obyektlər də daxildir. "0" və "false" string-ləri də truthy-dir.

---

### Question 4. Are curly braces required in an `if` statement, and what is the dangling else problem?

**Sual:** `if` təlimatında fiqurlu mötərizələr məcburidirmi və dangling else problemi nədir?

**Answer:** Curly braces are optional when the body has one statement. Without braces, only the next statement belongs to the `if`. Adding a second line later can cause a logic error. An `else` always belongs to the nearest `if` that has no `else`. Indentation does not change this rule. This is called the dangling else problem.

**Cavab:** Gövdədə (body) bir təlimat olduqda fiqurlu mötərizələr məcburi deyil. Mötərizələr olmadıqda yalnız növbəti təlimat `if`-ə aiddir. Sonradan ikinci sətir əlavə etmək məntiq xətasına (logic error) səbəb ola bilər. `else` həmişə `else`-i olmayan ən yaxın `if`-ə aiddir. Girinti (indentation) bu qaydanı dəyişmir. Buna dangling else problemi deyilir.

---

### Question 5. What is the common mistake with the assignment operator in a condition?

**Sual:** Şərtdə mənimsətmə operatoru ilə bağlı ümumi səhv nədir?

**Answer:** The `=` operator assigns a value, and the `==` and `===` operators compare values. An assignment is an expression that returns the assigned value. If `=` is written in a condition by mistake, the assigned value is tested. The condition then depends on the assigned value, not on a comparison. The code runs without a syntax error. Linters usually report this mistake.

**Cavab:** `=` operatoru dəyər mənimsədir, `==` və `===` operatorları isə dəyərləri müqayisə edir. Mənimsətmə (assignment) mənimsədilən dəyəri qaytaran ifadədir. Şərtdə səhvən `=` yazılarsa, mənimsədilən dəyər yoxlanılır. Beləliklə, şərt müqayisədən yox, mənimsədilən dəyərdən asılı olur. Kod sintaksis xətası (syntax error) olmadan işləyir. Linter-lər adətən bu səhvi bildirir.

---

### Question 6. What is the `switch` statement?

**Sual:** `switch` təlimatı nədir?

**Answer:** The `switch` statement compares one expression with several `case` values. It runs the code of the first matching `case`. The expression is evaluated once. The `case` expressions are evaluated in order, from top to bottom. The `default` clause runs when no `case` matches. `switch` is used when one value is checked against many options.

**Cavab:** `switch` təlimatı bir ifadəni (expression) bir neçə `case` dəyəri ilə müqayisə edir. O, ilk uyğun gələn `case`-in kodunu icra edir. İfadə bir dəfə hesablanır. `case` ifadələri yuxarıdan aşağıya sırayla hesablanır. Heç bir `case` uyğun gəlmədikdə `default` bəndi (clause) icra olunur. `switch` bir dəyər çoxlu seçimlərlə yoxlandıqda istifadə olunur.

---

### Question 7. How does `switch` compare values?

**Sual:** `switch` dəyərləri necə müqayisə edir?

**Answer:** `switch` uses strict equality (`===`). No type conversion happens. The number 1 does not match the string "1". `NaN` never matches a `case`, because it is not equal to itself. Objects match only when they are the same reference. `case` values can be any expression, not only literals.

**Cavab:** `switch` ciddi bərabərlikdən (strict equality) istifadə edir (`===`). Heç bir tip çevrilməsi (type conversion) baş vermir. 1 ədədi "1" string-i ilə uyğun gəlmir. `NaN` heç vaxt `case` ilə uyğun gəlmir, çünki o, özünə bərabər deyil. Obyektlər yalnız eyni istinad (reference) olduqda uyğun gəlir. `case` dəyərləri yalnız literallar deyil, istənilən ifadə ola bilər.

---

### Question 8. What is fall-through, and what is the role of `break`?

**Sual:** Fall-through nədir və `break`-in rolu nədir?

**Answer:** After a match, execution continues through all following `case` clauses. This behavior is called fall-through. It continues until a `break` statement or the end of the `switch`. `break` exits the `switch`. `return` and `throw` also stop execution inside a function. A missing `break` is a common bug. Intentional fall-through is usually marked with a comment.

**Cavab:** Uyğunluq tapıldıqdan sonra icra sonrakı bütün `case` bəndləri üzrə davam edir. Bu davranış fall-through adlanır. O, `break` təlimatına və ya `switch`-in sonuna qədər davam edir. `break` `switch`-dən çıxır. `return` və `throw` da funksiya daxilində icranı dayandırır. Buraxılmış `break` geniş yayılmış xətadır. Qəsdən edilən fall-through adətən şərhlə (comment) qeyd olunur.

---

### Question 9. What is the `default` clause?

**Sual:** `default` bəndi nədir?

**Answer:** The `default` clause runs when no `case` matches. It is optional. It can be placed anywhere inside the `switch`. It is still checked last, after all `case` values. If `default` is not the last clause and has no `break`, execution falls through to the next clause.

**Cavab:** `default` bəndi heç bir `case` uyğun gəlmədikdə icra olunur. O, məcburi deyil. O, `switch`-in istənilən yerində yerləşə bilər. O, yenə də bütün `case` dəyərlərindən sonra sonuncu yoxlanılır. `default` sonuncu bənd deyilsə və `break` yoxdursa, icra növbəti bəndə keçir.

---

### Question 10. How does scope work inside a `switch` statement?

**Sual:** `switch` təlimatının daxilində scope necə işləyir?

**Answer:** All `case` clauses share one block scope. A `let` or `const` declared in one `case` is visible in the others. Declaring the same name in two `case` clauses causes a SyntaxError. A declaration in an unmatched `case` stays in the temporal dead zone. Accessing it throws a ReferenceError. Curly braces around each `case` body create a separate scope.

**Cavab:** Bütün `case` bəndləri bir blok scope-u paylaşır. Bir `case`-də elan edilən `let` və ya `const` digərlərində görünür. Eyni adı iki `case` bəndində elan etmək SyntaxError verir. Uyğun gəlməyən `case`-dəki elan temporal dead zone-da (müvəqqəti ölü zona) qalır. Ona müraciət ReferenceError verir. Hər `case` gövdəsinin ətrafındakı fiqurlu mötərizələr ayrıca scope yaradır.

---

### Question 11. How can several `case` clauses share the same code?

**Sual:** Bir neçə `case` bəndi eyni kodu necə paylaşa bilər?

**Answer:** Several `case` labels can be stacked without code between them. They all share the code that follows the last label. This works because of fall-through. The matching `case` starts the execution. No `break` is needed between the stacked labels. A `break` is placed after the shared code.

**Cavab:** Bir neçə `case` etiketi (label) arasında kod olmadan ardıcıl yazıla bilər. Onların hamısı son etiketdən sonra gələn kodu paylaşır. Bu, fall-through sayəsində işləyir. Uyğun gələn `case` icranı başladır. Ardıcıl etiketlər arasında `break` lazım deyil. `break` paylaşılan koddan sonra yazılır.

---

### Question 12. When is `switch` used instead of `if...else if`?

**Sual:** `switch` nə vaxt `if...else if` əvəzinə istifadə olunur?

**Answer:** `switch` suits one value compared with many fixed options. `if...else if` suits ranges and complex conditions. `if` conditions can combine different variables and operators. `switch` compares only by strict equality. A `switch` on the value `true` is possible, but each `case` must evaluate to exactly `true`. Truthy values do not match.

**Cavab:** `switch` bir dəyərin çoxlu sabit seçimlərlə müqayisəsi üçün uyğundur. `if...else if` aralıqlar (ranges) və mürəkkəb şərtlər (complex conditions) üçün uyğundur. `if` şərtləri müxtəlif dəyişənləri və operatorları birləşdirə bilər. `switch` yalnız ciddi bərabərliklə müqayisə edir. `true` dəyəri üzərində `switch` mümkündür, lakin hər `case` dəqiq `true` nəticəsi verməlidir. Truthy dəyərlər uyğun gəlmir.