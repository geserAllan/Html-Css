
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





function criarAluno(nome, n1, n2){
        return  {
                nome: nome,
                nota1: n1,
                nota2: n2,

                media: function(){
                    return(this.nota1 + this.nota2) / 2;
                }
        }
        
}


var turma = [
            criarAluno("João", 9.0, 8.0),
            criarAluno("Carla", 5.0, 8.0),
            criarAluno("Marcos", 8, 5)
]

var aluno = turma[1];
console.log(aluno);
console.log(aluno.media());