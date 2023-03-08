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
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas / 2000} Lts de Bebidas </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja </p>`
    
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else {
        return 400;
    }

}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }else {
        return 1200;
    }

}
function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    }else {
        return 1000;
    }

}