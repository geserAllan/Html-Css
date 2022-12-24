

var aluno = {
            nome: "Alan",
            notas: [7.8, 8.9],

            media: function (n1, n2){
                return(n1 + n2) / 2;
            }

}
console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));