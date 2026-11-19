# Operators & Expressions

## 1. Terminlər

| English | Azərbaycanca |
|---|---|
| expression | ifadə |
| statement | təlimat |
| expression statement | ifadə təlimatı |
| operator | operator |
| operand | operand |
| unary operator | unar operator |
| binary operator | binar operator |
| ternary operator | ternar operator |
| conditional operator | şərt operatoru |
| arithmetic operator | arifmetik operator |
| comparison operator | müqayisə operatoru |
| logical operator | məntiqi operator |
| bitwise operator | bit səviyyəli operator |
| comma operator | vergül operatoru |
| grouping operator | qruplaşdırma operatoru |
| assignment | mənimsətmə |
| compound operator | mürəkkəb operator |
| logical assignment | məntiqi mənimsətmə |
| prefix | prefiks |
| postfix | postfiks |
| remainder | qalıq |
| exponentiation | qüvvətə yüksəltmə |
| precedence | prioritet |
| associativity | assosiativlik |
| left-associative | soldan sağa yerinə yetirilən |
| right-associative | sağdan sola yerinə yetirilən |
| short-circuit evaluation | qısa yolla hesablama |
| side effect | əlavə təsir |
| guard check | qoruyucu yoxlama |
| default value | standart dəyər |
| prototype chain | prototip zənciri |
| non-configurable | konfiqurasiya oluna bilməyən |
| signed integer | işarəli tam ədəd |
| flag | bayraq |
| mask | maska |
| addition operator (`+`) | toplama operatoru |
| subtraction operator (`-`) | çıxma operatoru |
| multiplication operator (`*`) | vurma operatoru |
| division operator (`/`) | bölmə operatoru |
| remainder operator (`%`) | qalıq operatoru |
| exponentiation operator (`**`) | qüvvətə yüksəltmə operatoru |
| increment operator (`++`) | artırma operatoru |
| decrement operator (`--`) | azaltma operatoru |
| assignment operator (`=`) | mənimsətmə operatoru |
| addition assignment (`+=`) | toplama ilə mənimsətmə |
| multiplication assignment (`*=`) | vurma ilə mənimsətmə |
| logical OR assignment (`\|\|=`) | məntiqi VƏ YA ilə mənimsətmə |
| logical AND assignment (`&&=`) | məntiqi VƏ ilə mənimsətmə |
| nullish coalescing assignment (`??=`) | nullish birləşdirmə ilə mənimsətmə |
| loose equality (`==`) | tip çevirməklə bərabərlik |
| loose inequality (`!=`) | tip çevirməklə bərabər olmama |
| strict equality (`===`) | ciddi bərabərlik |
| strict inequality (`!==`) | ciddi bərabər olmama |
| less than (`<`) | kiçikdir |
| greater than (`>`) | böyükdür |
| less than or equal to (`<=`) | kiçik və ya bərabərdir |
| greater than or equal to (`>=`) | böyük və ya bərabərdir |
| logical AND (`&&`) | məntiqi VƏ |
| logical OR (`\|\|`) | məntiqi VƏ YA |
| logical NOT (`!`) | məntiqi DEYİL |
| nullish coalescing (`??`) | nullish birləşdirmə |
| bitwise AND (`&`) | bit səviyyəli VƏ |
| bitwise OR (`\|`) | bit səviyyəli VƏ YA |
| bitwise XOR (`^`) | bit səviyyəli XOR |
| bitwise NOT (`~`) | bit səviyyəli DEYİL |
| left shift (`<<`) | sola sürüşdürmə |
| signed right shift (`>>`) | işarəli sağa sürüşdürmə |
| unsigned right shift (`>>>`) | işarəsiz sağa sürüşdürmə |
| conditional operator (`?:`) | şərt operatoru |
| comma operator (`,`) | vergül operatoru |
| grouping operator (`()`) | qruplaşdırma operatoru (mötərizə) |
| typeof operator (`typeof`) | typeof operatoru |
| in operator (`in`) | in operatoru |
| instanceof operator (`instanceof`) | instanceof operatoru |
| delete operator (`delete`) | delete operatoru |
| void operator (`void`) | void operatoru |
| semicolon (`;`) | nöqtəli vergül |
| curly braces (`{}`) | fiqurlu mötərizələr |

## 2. Interview Questions

### Question 1. What is an expression, and how does it differ from a statement?

**Sual:** İfadə nədir və təlimatdan nə ilə fərqlənir?

**Answer:** An expression is code that produces a value. Examples are a literal, a variable name, or an operation such as addition. A statement is an instruction that performs an action, such as `if`, `for`, or a variable declaration. An expression can appear wherever a value is expected. A statement cannot appear in that position. An expression followed by a semicolon forms an expression statement.

**Cavab:** İfadə — qiymət hasil edən kod parçasıdır. Buna misal olaraq sabit qiymətləri (literalları), dəyişən adlarını və ya toplama kimi əməliyyatları göstərmək olar. Operator (və ya təlimat) — müəyyən bir hərəkəti yerinə yetirən göstərişdir; məsələn, `if`, `for` konstruksiyaları və ya dəyişən elanı buna aiddir. İfadə, qiymət tələb olunan istənilən yerdə istifadə edilə bilər, lakin operator (təlimat) həmin yerdə işlədilə bilməz. Sonuna nöqtəli vergül əlavə edilmiş ifadə isə "ifadə operatoru" (expression statement) adlanır.

---

### Question 2. What types of operators exist in JavaScript?

**Sual:** JavaScript-də hansı operator növləri var?

**Answer:** Operators are grouped by function and by operand count. The main groups are arithmetic, assignment, comparison, logical, and bitwise operators. By operand count, operators are unary, binary, or ternary. A unary operator has one operand, such as `typeof` or `!`. A binary operator has two operands, such as `+`. The conditional operator is the only ternary operator.

**Cavab:** Operatorlar funksiyalarına və operand sayına görə qruplaşdırılır. Əsas qruplara arifmetik, mənimsətmə, müqayisə, məntiqi və bit səviyyəli operatorlar daxildir. Operand sayına görə operatorlar unar, binar və ya ternar ola bilər. Unar operatorun bir operandı olur; buna misal olaraq `typeof` və ya `!` operatorlarını göstərmək olar. Binar operatorun iki operandı olur; məsələn, `+` operatoru. Şərt operatoru isə yeganə ternar operatordur.

---

### Question 3. What are the comparison operators?

**Sual:** Müqayisə operatorları hansılardır?

**Answer:** Comparison operators compare two values and return a boolean. The operators are `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, and `>=`. `===` and `!==` are strict and do not convert types. `==` and `!=` convert types first when the types differ. `<`, `>`, `<=`, and `>=` compare numbers numerically and two strings lexicographically.

**Cavab:** Müqayisə operatorları iki dəyəri müqayisə edir və məntiqi (boolean) nəticə qaytarır. Bu operatorlar bunlardır: `==`, `!=`, `===`, `!==`, `<`, `>`, `<=` və `>=`. `===` və `!==` operatorları ciddi (strict) hesab olunur və tipləri çevirmir. `==` və `!=` operatorları isə, əgər müqayisə olunan dəyərlərin tipləri fərqlidirsə, əvvəlcə onları çevirir. `<`, `>`, `<=` və `>=` operatorları ədədləri ədədi dəyərlərinə, sətirləri isə leksikoqrafik (əlifba) ardıcıllığa görə müqayisə edir.

---

### Question 4. What are the arithmetic operators and their special behaviors?

**Sual:** Aritmetik operatorlar hansılardır və onların xüsusi davranışları nələrdir?

**Answer:** The arithmetic operators are `+`, `-`, `*`, `/`, `%`, and `**`. `%` is the remainder operator, and the result has the sign of the left operand. `**` is the exponentiation operator, and it is right-associative. A unary minus directly before the base in an exponentiation causes a SyntaxError. Parentheses are required in that case. Division by zero gives `Infinity`, `-Infinity`, or `NaN` and does not throw an error.

**Cavab:** Aritmetik operatorlar bunlardır: `+`, `-`, `*`, `/`, `%` və `**`. `%` qalıq operatorudur və nəticə sol operandın işarəsini daşıyır. `**` qüvvətə yüksəltmə operatorudur və sağdan sola assosiativdir (sağdan sola qruplaşdırılır). Qüvvətə yüksəltmə əməliyyatında əsasın bilavasitə qarşısında unar minus işarəsinin olması `SyntaxError` (sintaksis xətası) ilə nəticələnir. Belə hallarda mötərizələrdən istifadə etmək tələb olunur. Sıfıra bölmə əməliyyatı `Infinity`, `-Infinity` və ya `NaN` nəticəsini verir və xəta (istisna) yaratmır.

---

### Question 5. What is the difference between prefix and postfix increment?

**Sual:** Prefiks və postfiks artırma arasındakı fərq nədir?

**Answer:** The operators `++` and `--` add or subtract 1 from a variable. The prefix form changes the value first and returns the new value. The postfix form returns the old value and then changes the variable. The result differs only when the returned value is used. The operand is converted to a number first. `BigInt` operands stay `BigInt`. The operand must be a variable or a property, not a literal.

**Cavab:** `++` və `--` operatorları dəyişənin üzərinə 1 əlavə edir və ya ondan 1 çıxır. Prefiks (ön) forma əvvəlcə dəyəri dəyişir və yeni dəyəri qaytarır. Postfiks (son) forma isə əvvəlcə köhnə dəyəri qaytarır, daha sonra dəyişənin qiymətini dəyişir. Nəticə yalnız qaytarılan dəyərdən istifadə edildikdə fərqlənir. Operand əvvəlcə ədədə çevrilir. `BigInt` tipində olan operandlar isə `BigInt` olaraq qalır. Operand sabit (literal) deyil, dəyişən və ya xassə (property) olmalıdır.

---

### Question 6. What are assignment operators?

**Sual:** Mənimsətmə operatorları nədir?

**Answer:** The `=` operator assigns a value to a variable or property. An assignment is an expression and returns the assigned value. Compound operators such as `+=` and `*=` combine an operation with assignment. Assignment is right-associative, so chained assignment works from right to left. Logical assignment operators are `||=`, `&&=`, and `??=`. Each assigns only when the matching logical operator would evaluate its right side.

**Cavab:** `=` operatoru dəyişənə və ya xassəyə bir qiymət mənimsədir. Mənimsətmə bir ifadədir və mənimsədilən qiyməti qaytarır. `+=` və `*=` kimi mürəkkəb operatorlar bir əməliyyatı mənimsətmə ilə birləşdirir. Mənimsətmə sağdan sola assosiativdir (sağdan sola doğru işləyir), buna görə də zəncirvari mənimsətmələr sağdan sola doğru icra olunur. Məntiqi mənimsətmə operatorları bunlardır: `||=`, `&&=` və `??=`. Bunların hər biri yalnız müvafiq məntiqi operator özünün sağ tərəfini qiymətləndirəcəyi halda mənimsətməni həyata keçirir.

---

### Question 7. How do the logical operators work?

**Sual:** Məntiqi operatorlar necə işləyir?

**Answer:** The logical operators are `&&`, `||`, and `!`. `&&` and `||` return one of their operands, not always a boolean. `&&` returns the first falsy operand, or the last operand if none is falsy. `||` returns the first truthy operand, or the last operand if none is truthy. `!` always returns a boolean. It converts its operand to boolean and then negates it.

**Cavab:** Məntiqi operatorlar `&&`, `||` və `!`-dir. `&&` və `||` operatorları həmişə məntiqi (boolean) dəyər deyil, operandlarından birini qaytarır. `&&` operatoru ilk "yalan" (falsy) operandı, əgər belə operand yoxdursa, sonuncu operandı qaytarır. `||` operatoru isə ilk "doğru" (truthy) operandı, əgər belə operand yoxdursa, sonuncu operandı qaytarır. `!` operatoru isə həmişə məntiqi (boolean) dəyər qaytarır; o, operandını məntiqi dəyərə çevirir və sonra onu inkar edir.

---

### Question 8. What is short-circuit evaluation?

**Sual:** Qısa qapanma qiymətləndirməsi nədir?

**Answer:** Short-circuit evaluation means the right operand is not always evaluated. For `&&`, the right side is skipped when the left side is falsy. For `||`, the right side is skipped when the left side is truthy. Skipped expressions produce no side effects, such as function calls. This allows guard checks and default values in expressions. The same rule applies to `??`, `||=`, `&&=`, and `??=`.

**Cavab:** "Qısa qapanma" (short-circuit) qiymətləndirməsi o deməkdir ki, sağ operand həmişə hesablanmır. `&&` operatoru üçün, sol tərəf "yalan" (falsy) dəyər verdikdə sağ tərəf nəzərə alınmır (ötürülür). `||` operatoru üçün isə, sol tərəf "doğru" (truthy) dəyər verdikdə sağ tərəf ötürülür. Ötürülən ifadələr heç bir yan təsir (məsələn, funksiya çağırışları) yaratmır. Bu xüsusiyyət ifadələrdə qoruyucu yoxlamalardan (guard checks) və standart dəyərlərdən istifadə etməyə imkan verir. Eyni qayda `??`, `||=`, `&&=` və `??=` operatorları üçün də keçərlidir.

---

### Question 9. What is the ternary operator?

**Sual:** Üçlü operator nədir?

**Answer:** The conditional operator is the only operator with three operands. Its form is a condition, then a value for true, then a value for false. Only the selected branch is evaluated. It is an expression, so it returns a value. It can be used inside template literals and arguments, where statements are not allowed. It is right-associative, so chained conditions are possible. Deep nesting makes it harder to read.

**Cavab:** Şərt operatoru üç operanda malik yeganə operatordur. O, bir şərtdən, ardınca şərt doğru olduqda qaytarılacaq dəyərdən və şərt yalan olduqda qaytarılacaq dəyərdən ibarətdir. Yalnız seçilmiş budaq icra olunur (qiymətləndirilir). Bu, bir ifadə (expression) olduğu üçün nəticədə bir dəyər qaytarır. Onu, ifadələrin (statements) istifadəsinə icazə verilməyən yerlərdə — məsələn, şablon sətirlərinin (template literals) daxilində və ya arqument qismində — tətbiq etmək mümkündür. Operator sağdan sola assosiativdir, bu da şərtlərin zəncirvari şəkildə birləşdirilməsinə imkan verir. Lakin həddindən artıq iç-içə yerləşdirmə kodun oxunmasını çətinləşdirir.

---

### Question 10. What are operator precedence and associativity?

**Sual:** Operator prioriteti və assosiativlik nədir?

**Answer:** Precedence decides which operator is evaluated first. Operators with higher precedence are grouped first. Associativity decides the direction for operators with equal precedence. Most operators are left-associative. Assignment, `**`, unary operators, and the conditional operator are right-associative. Parentheses, called the grouping operator, override the default order. Operands are always evaluated from left to right, even when precedence differs.

**Cavab:** Prioritet, hansı operatorun ilk olaraq hesablanacağını müəyyən edir. Daha yüksək prioritetə ​​malik operatorlar ilk növbədə qruplaşdırılır. Assosiativlik isə eyni prioritetə ​​malik operatorlar üçün icra istiqamətini təyin edir. Operatorların əksəriyyəti soldan sağa assosiativdir (sol assosiativdir). Mənimsətmə, `**` (qüvvətə yüksəltmə), unar operatorlar və şərti operator isə sağdan sola assosiativdir (sağ assosiativdir). Qruplaşdırma operatoru adlanan mötərizələr, standart icra ardıcıllığını dəyişdirir. Prioritetlər fərqli olsa belə, operandlar həmişə soldan sağa doğru hesablanır.

---

### Question 11. What do the `in`, `instanceof`, `delete`, and `void` operators do?

**Sual:** `in`, `instanceof`, `delete` və `void` operatorları nə edir?

**Answer:** The `in` operator checks whether a property exists in an object or its prototype chain. The `instanceof` operator checks whether a constructor's prototype appears in an object's prototype chain. The `delete` operator removes an own property from an object. It returns a boolean and does not remove variables. In strict mode, deleting a non-configurable property throws a TypeError. The `void` operator evaluates its operand and returns `undefined`.

**Cavab:** `in` operatoru bir xassənin obyektin özündə və ya onun prototip zəncirində mövcud olub-olmadığını yoxlayır. `instanceof` operatoru konstruktorun prototipinin obyektin prototip zəncirində yer alıb-almadığını yoxlayır. `delete` operatoru obyektin özünə məxsus xassəsini silir. O, boolean (məntiqi) dəyər qaytarır və dəyişənləri silmir. "Strict mode" (sərt rejim) zamanı konfiqurasiya edilə bilməyən xassənin silinməyə cəhd edilməsi `TypeError` xətasına səbəb olur. `void` operatoru öz operandını qiymətləndirir və `undefined` qaytarır.

---

### Question 12. What are the bitwise operators?

**Sual:** Bit səviyyəli operatorlar hansılardır?

**Answer:** Bitwise operators work on the binary form of numbers. They are `&`, `|`, `^`, `~`, `<<`, `>>`, and `>>>`. Operands are converted to 32-bit signed integers first. The result is a regular number. `>>` preserves the sign, while `>>>` shifts in zeros. Bitwise operators are different from the logical operators `&&` and `||`. They are used for flags, masks, and low-level tasks.

**Cavab:** Bit səviyyəli operatorlar ədədlərin ikilik təsviri üzərində işləyir. Bunlar `&`, `|`, `^`, `~`, `<<`, `>>` və `>>>` operatorlarıdır. Əməliyyatda iştirak edən ədədlər (operandlar) əvvəlcə 32-bitlik işarəli tam ədədlərə çevrilir. Nəticə isə adi bir ədəd olur. `>>` operatoru işarəni qoruyub saxlayır, `>>>` operatoru isə sürüşdürmə zamanı boşalan yerlərə sıfırlar daxil edir. Bit səviyyəli operatorlar `&&` və `||` məntiqi operatorlarından fərqlənir. Onlar bayraqlar (flags), maskalar və aşağı səviyyəli tapşırıqlar üçün istifadə olunur.

---

### Question 13. What is the comma operator?

**Sual:** Vergül operatoru nədir?

**Answer:** The comma operator evaluates its operands from left to right. It returns the value of the last operand. It has the lowest precedence of all operators. It is mostly seen in `for` loop headers. It is different from commas in lists, such as array elements and function arguments.

**Cavab:** Vergül operatoru öz operandlarını soldan sağa doğru qiymətləndirir. O, sonuncu operandın qiymətini qaytarır. Bütün operatorlar arasında ən aşağı prioritetə ​​malikdir. Əsasən `for` dövrü başlıqlarında rast gəlinir. Bu, massiv elementləri və ya funksiya arqumentləri kimi siyahılardakı vergüllərdən fərqlənir.