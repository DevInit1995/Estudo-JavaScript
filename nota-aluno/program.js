let primeiraNota = document.getElementById("primeiraNota");
let segundaNota = document.getElementById("segundaNota");
let resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    //recebe as notas informadas pelo usuário
    let recebeNota1 = parseFloat(primeiraNota.value);
    let recebeNota2 = parseFloat(segundaNota.value);

    let calculo = (recebeNota1 + recebeNota2) / 2;

    if(calculo >= 6){
        resultado.innerText = `${"Aluno aprovado." + " Nota: " + calculo.toFixed(2)}`;
    }
    else {
        resultado.innerText = `${"Aluno reprovado." + " Nota: " + calculo.toFixed(2)}`;
    }
});
