

//Nome do aluno -- Nota 1 | Nota 2 | Media | Aprovação


var nomes = ["Alan" , "João" , "Maria"];
var notasA = [7.0, 6.0, 9.0];
var notasB = [8.0, 7.0, 8.5];


function media(n1, n2){
    return(n1 + n2) / 2;

}

function passou(media){
    if(media > 7){
        return "Aprovado";
    }else
        return "Reprovado";
}

for (var index in nomes){


    var notas1 = notasA[index];
    var notas2 = notasB[index];

    var m = media(notas1, notas2);


    console.log(nomes[index] + 
        " | " + 
        notas1 +
        " | " + 
        notas2 + 
        " | " + m +
        " | " + 
        passou(m));

}