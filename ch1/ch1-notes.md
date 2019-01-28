# Chapter 1: Values, Types, and Operators

## Values
### Numbers
These are numeric values

Examples:
* `69`
* `4.20`
* `1996e8`

### Arithmetic
Examples:
* `1 + 1`
* `(100 + 4) * 23`

### Special Numbers
* `infinity`
* `-infinity`
* `NaN`

### Strings
*Written by enclosing their content in quotes*

Example:

`i like potatoes`

*Use backslashes to escape the character*

Example:

```JavaScript
cows go oink.\npigs go moo.
```

will produce

```JavaScript
cows go oink
pigs go moo
```

*You can't do arithmetic with strings, but you can concatenate with '+'*

Example:

```JavaScript
'Ele' + 'ph' = 'ant'
```

will produce

`Elephant`

*Template Literals can embed other values*

```JavaScript
`three times four is ${3 * 4}`
```

will produce

`three times four is 12`

### Operators

Unary operators use one value

```JavaScript
// typeof: an operator that produces a string value naming the type of value

console.log(typeof 6.9) // returns: number
console.log(typeof x) // returns: string
```

Binary operators use two values

```JavaScript
// '-' can be used as negative or subtract

console.log(-(24-8)) // returns: -16
```

### Boolean Values
The boolean type has two Values
* True
* False

* Comparison *
```JavaScript
console.log(6 > 9) // returns False (numeric)
console.log('Aqua' > 'Lava') // returns True (alphabetic)
console.log("potato" == "potato") // returns True (equal or not)

// One value cannot be equal to itself: `NaN`
```

### Logical Operators
JavaScript supports three logical operators
1. and = `(true && false)`
2. or `(vanilla || chocolate)`
3. not `(banana != apple)`

### Conditional Operator
value on the left picks which of the other two value will come out

```JavaScript
console.log(true ? 1 : 2) // returns 1
console.log(false ? 1 : 2) //  returns 2
```

### Empty Values
`null` and `undefined` denote the absence of meaningful value

### Automatic Type Conversion
Type Coercion is where "wrong" type values are automatically converted to the type it needs (usually wrong)

These are used to prevent unexpected type conversions like `(null == undefined)` returning True

`===` is strictly precise
`!==` not strictly precise

### Short-Circuiting of Logical Operators
The `||` operator returns the left value if it can be converted to true -- otherwise it will pick the right value

`0`, `NaN`, and `""` count as False

### Summary
```
+ = addition
- = subtraction
* = multiplication
/ = division
% = modulo

== = equal to
!= = not equal to
=== = precisely equal to
!== = precisely not equal to
< = less than
> = greater than
<= = less than or equal to
>= = great than or equal to

&& = and
|| = or

-/! = negate locally
?: = ternay operator
```
