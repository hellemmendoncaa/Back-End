// Questão 15

function entradas(){
    let x = 10;
    let y = 20;
    return{
        x, y
    };
}
function soma(x ,y){
   let z = x + y;
    return z;
}

let z;
const {x, y} = entradas();
z = soma(x, y);
console.log('Z = '+z);
