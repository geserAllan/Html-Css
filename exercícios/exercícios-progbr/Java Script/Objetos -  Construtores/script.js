
// function calcMedia(){
//             return(this.nota1 + this.nota2) / 2
// }

// var turma = [
//             {
//             nome: "Alan",
//             nota1: 9,
//             nota2: 8,
//             media: calcMedia
//             }
            
// ]
// var aluno = turma[0];

// console.log(aluno);
// console.log(aluno.media());











// function criarAluno(nome, n1, n2){
//         return  {
//                 nome: nome,
//                 nota1: n1,
//                 nota2: n2,

//                 media: function(){
//                     return(this.nota1 + this.nota2) / 2;
//                 }
//         }
        
// }


// var turma = [
//             criarAluno("João", 9.0, 8.0),
//             criarAluno("Carla", 5.0, 8.0),
//             criarAluno("Marcos", 8, 5)
// ]

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());












// // function criarAluno(nome, n1, n2){
// //     return  {
// //             nome: nome,
// //             nota1: n1,
// //             nota2: n2,

// //             media: function(){
// //                 return(this.nota1 + this.nota2) / 2;
// //             }
// //     }
    
// // }


// // var turma = [
// //             criarAluno("João", 9.0, 8.0),
// //             criarAluno("Carla", 5.0, 8.0),
// //             criarAluno("Marcos", 8, 5)
// //     ]

// // var aluno = turma[1];

// // for(var aluno of turma){
// //     console.log(aluno.nome + " - " + aluno.media());
   
// }










function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return( this.nota1 + this.nota2) / 2;
    }
}

    var a = new aluno("Alan", 6, 8);
    var b = new aluno("Vanessa", 5 , 8);

    console.log(a.nome + " - " + a.media());
    console.log(b.nome + " - " + b.media());







