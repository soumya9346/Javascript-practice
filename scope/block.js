// if we use let and const inside the { } curly braces cannot be accessed outside 
// if we use var inside the { } curly braces can be accessed outside.

let a = 10;
if ( a > 3 ){
    console.log("inside");
    var b = 5;
}
console.log("outside "+b);