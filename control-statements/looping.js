//  while    --- it checks the condition first and check the statement later.
// do while  --- it executes the statement first and checks condition later.
// for       --- if number of iterations are known .

var a = 1;
while( a <= 5){
    console.log(" a is " + a );
    a++;
}

// do while 

let x = 10;
do {
    console.log(" x is " + x);
    x--;
}while(x>=1)


// for loop

for (n=1; n<=10; n++){
    console.log("value of n is " +n);
}