// break    -- terminates the flow of control from one point to another point
// continue -- skips the loop 

for ( n=1; n<=10; n++){
    console.log("n is " + n);

    if(n==5){
        console.log("break statement executed")
        break;
    }
}

// continue 
for ( n=1; n<=10; n++){
    console.log("n is " + n);
    if (n==5){
        console.log("continue statement executed");
        continue;
    }
    if(n==10){
        console.log("break statement executed");
        break;
    }
}
