// carne - 400gr por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoja + de horas - 2000ml
// Refrigerantes/água - 1000ml por pessoa + de 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById ("adultos")
let inputCriancas = document.getElementById ("criancas")
let inputDuracao = document.getElementById ("duracao")

let result = document.getElementById("resultado")

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let totalCarnes = carnesPP(duracao) * adultos + (carnesPP(duracao) / 2 * criancas)
    let totalCerveja = cervejaPP(duracao) * adultos
    let totalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

    result.innerHTML ="<h3>Você precisará de:<h3>"
    result.innerHTML +=`<p>${totalCarnes / 1000}kg de carnes<p>`
    // " + " junto ao " = " para q insira as demais linhas de codigo
    result.innerHTML +=`<p>${Math.ceil(totalCerveja / 355)} latas de Cerveja<p>`
    result.innerHTML +=`<p>${Math.ceil(totalCarnes / 2000)} Pet's de garrafa 2L de Bebidas<p>`
}

function carnesPP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}