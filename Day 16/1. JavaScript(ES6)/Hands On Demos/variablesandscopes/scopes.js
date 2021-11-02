{{{var v =42;}}}

console.log(v);

{
    // Block Scope
}

if(true){
    //Block Scope
}

// Block Scope with var
// for(var  i = 1;i<=10;i++){
    // Block Scope
// }
// console.log(i);

// Block Scope with let
for(let  i = 1;i<=10;i++){
    // Block Scope
}

console.log(i);

function sum(a,b){
    // Function Scope
    var result = a+b;
    // console.log(result);
}

// console.log(sum(4 + 3))  ;
// console.log(result);

{
    // Block Scope
    {
        // Nested Block Scope
        // let, const
    }
}