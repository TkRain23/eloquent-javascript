# Chapter 2: Program Structure

### Expressions and Statements
Every value that is written literally is an expression.

### Bindings
`let` is the keyword that indicates that this is a sentence

```JavaScript
// this creates a binding called ten and makes it equal to 5 * 2
let ten = 5 * 2;
console.log(ten); // returns 10
```

Tip: Bindings are like tentacles. They grasp things as opposed to containing them like a box.

*Multiple Binding*

Use commas to define multiple bindings
```JavaScript
let potato = 1, tomato = 2
console.log(potato + tomato) // returns 3
```

*Theres more!*
Besides `let`, you can also use `const` and `var`

`const` = defines a constant binding, which points at the same value for as long as it lives. Usually used for names + easy reference.

`var` = discussed next chapter

### Binding Names

Binding names cannot start with a number

`9lives` is an invalid names

The only characters that may be included are
* `$` dollar signs
* `_` underscores

There are also words reserved for use like `var` and `class`

### Functions
Functions are a piece of program wrapped in a value

Executing a function is called by invoking, calling, or applying it

Example:

```JavaScript
prompt("Enter Credit Card #") // calls the prompt function
```

### The console.log Function

The `console.log` function writes out its to text

### Return Values

When a function produces a value, it is said to return that value

### Control Flow

*Single Line Control Flow*

A straight road without any conditionals

*Conditional Execution*

A branching road where a program takes the proper branch based on the situation (conditional)

*Blocks*

Braces and Brackets (`{()}`) used for a number of statements into a single statement

This single statement is known as a block

*If/Else*

Use these keywords together to create separate, alternative execution paths

### While and Do Loops

Looping control flows allow us to go back to a prior point in the program

While Loops: the loop keeps entering the statement as long as the expression produces a value that is True

Do Loops: the same as a while loop, but it executes its body atleast once.

### For Loops

There are usually three parts for initializing a for loop.

From left to right the three parts are:
1. defines a binding
2. checks if loop should continue
3. updates the state of the loops iterations

Example:
```JavaScript
for(counter = 0; counter < 11; counter ++)
{
    console.log(counter); // prints from 0-10
}
```

### Breaking Out of a Loop

Besides a condition producing `False`, you can use `break` to jump out of an enclosing loop

```JavaScript
// this loop breaks immediately preventing it to loop 999999 times
for(let x = 0; x < 999999; x++)
{
    console.log(x);
    break;
}
```

*Continue*

This keyword, similarly to break, jumps out of the body, and continues with the loop's next iteration

### Updating Binding Succintly

A binding is usually used in a loop to hold and update a value

```JavaScript
// long way
counter = counter + 1;

//shortcut

counter += 1;
```

### Dispatching on a Value with Switch

`switch` is a construct that is intended to express a dispatch

```JavaScript
switch (prompt("What should the cake say?")){
    case "Lakers":
        console.log("The Los Angeles Lakers are the 18-19 NBA Champions");
        break;
    case "Raptors":
        console.log("The Toronto Raptors are the 18-19 NBA Champions");
        break;
    default:
        console.log("No team won the 18-19 NBA Championship");
        break;
    }
```

### Capitalization

The standard for capitalizing a javascript function is not capitalizing the first word

```
theLosAngelesLakers; // correct

the_LosAngeles_Lakers; // incorrect
TheLosAngelesLakers; // incorrect
thelosangeleslakers; // incorrect
```

### Comments

```JavaScript
// Single Line Comment

/*
    Multi
        Line
            Comment
*/
```
