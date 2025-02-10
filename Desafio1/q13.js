// Questão 13

function areaCirculo(r){
    let area = Math.PI * r * r;
    return area;
}

let raio = 3;
let area = areaCirculo(raio);
console.log('A área do círculo é '+area+' cm².');
