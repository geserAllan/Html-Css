

// var aluno = {
//             nome: "Alan",
//             notas: [7.8, 8.9],

//             media: function (n1, n2){
//                 return(n1 + n2) / 2;
//             }

// }
// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));










//  function mediaCalc (n1, n2){
//     return(n1 + n2) / 2;
//  }


// var aluno = {
//     nome: "Alan",
//     notas: [7.8, 8.9],

//     media: mediaCalc

// }


// var aluno2 = {
//     nome: "João",
//     notas: [8, 7],

//     media: mediaCalc

// }
// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// console.log(aluno2.nome);
// console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]));












function mediaCalc() {
    return(this.notas[0] + this.notas[1]) / 2       /* O this será usado sempre que quisermos           referenciar uma propriedade dentro de um objeto*/    
}



var aluno = {
            nome: "Alan",
            notas: [9, 8],

            media: mediaCalc

}


var aluno2 = {
            nome: "João",
            notas: [5, 8],

            media: mediaCalc

}
console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());