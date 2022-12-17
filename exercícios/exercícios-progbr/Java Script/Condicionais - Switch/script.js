var nota1 = 9.0;
var nota2 = 8.0;

var media = (nota1 + nota2) / 2;


if (media >= 8){

    var conceito = "Ótimo";
}

else if (media >= 6.5){

    var conceito = "Bom";
 
} else{

    var conceito = "Regular";

}

    // conceito = "Mais ou menos"; //aplicando default para variável conceito que não está declarada na condicional.

console.log(conceito);
console.log(media);

switch(conceito){

    case "Ótimo":
       console.log("Voce e um ótimo aluno.")     
        break;
    case "Bom":
        console.log("Voce está quase perfeito.")
        break;
    case "Regular":
        console.log("Estude mais um pouco mais")
        break;
    default:
        console.log("Existe um erro")
}