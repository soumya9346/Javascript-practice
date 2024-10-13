// opertaors are used to perfom arithmetic, logical and relational opertions on operands
// we mainly consider few types they are 
// 1. Arthmetic operators
// 2. Assignment operators
// 3. Comparision operators
// 4. Logical operators
// 5. Conditional opertors

// arthmetic operators --- used to perform arthmetic caluculations on operands 
// increment and decrement is also a part of arthmetic operators only 

let a = 10, b = 2;

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b);
console.log( a ** b);
console.log( a % b);

// assignment operators 
// = used to assign values
console.log(" Assignment operators ");

var x = 15, y = 3;

console.log( y+=1 );
console.log( y-=1 );
console.log( x/=3 );
console.log( y**=2 );
console.log( x*=2 );
console.log( y%=3 );

// comaprision operators 
// == only checks values but === this also check the equalls type 

console.log(" Comaprision operators ");


var A = 8, B = '8';


console.log( A == B);
console.log( A === B);
console.log( A > B);
console.log( A < B);
console.log( A != B );
console.log( A !== B);
console.log( A >= B );
console.log( A <= B );



console.log(" Logical operators ");


// Logical operators 
//  AND && --- Both values should satisfy 
//  OR ||  --- Any one value should satisfy
//  NOT !  --- opposite to the result 

let X = 10;
let Y = 5;

console.log( X>Y && Y>X);
console.log( X<Y || Y<X );
console.log(!(X=Y));


// conditional operators 
//  also known as ternary operators 
// syntax -- conditional_expression ? expression1 : expression 2 ;

console.log(" Conditional operators "); // only to divide the output parts 


let U = 20, K = 13;

U>K ? console.log(" U is bigger ") : console.log(" K is bigger ");