let bangu = document.getElementById("bangu");
let madureira = document.getElementById("madureira");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    let diferenca;
    let golsBangu = parseInt(bangu.value);
    let golsMadureira = parseInt(madureira.value);
    
    if(golsBangu > golsMadureira){
        diferenca = golsBangu - golsMadureira;
    } else{
        diferenca = golsMadureira - golsBangu;
    }
    resultado.innerText = `Diferença: ${diferenca}`;

    switch(diferenca) {
        case 0:
            resultado.innerText = "STATUS: EMPATE";
            break;
        case 1:
        case 2:
        case 3:
            resultado.innerText = "STATUS: PARTIDA NORMAL";
            break;
        case 4:
        case 5:
        case 6:
            resultado.innerText = "STATUS: GOLEADA";
            break;
            default:
                resultado.innerText = "STATUS: ALGO INCOMUM." +
                "\n Você digitou os dados corretos?"
        
            
    }
});