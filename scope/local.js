// local scope

function fn(){
    let a = 10;
    if(a > 5){
        console.log("inside function " +a);
    }
}
fn();


function fnn(){
    let x = 10;
    console.log("1st function " +x);
}
function myfn(){
    let y = 5;
    console.log("2nd function "+y)
}
fnn();
myfn();