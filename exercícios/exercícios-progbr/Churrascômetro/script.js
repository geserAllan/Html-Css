// Carne - 400g por pessoa. + de 6 horas de evento = 650g por pessoa.
// Cerveja - 1200ml por pessoa. + de 6 horas de evento = 2000ml por pessoa.
// Refrigerante/Água - 1000ml por pessoa. + de 6 horas de evento = 1500ml por pessoa.

//Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + ( 400 / 2 * criancas);
    console.log(qtdTotalCarne);

}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else {
        return 400;
    }

}