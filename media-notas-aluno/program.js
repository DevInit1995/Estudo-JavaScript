let primeiraNota = document.getElementById("primeiraNota");
let segundaNota = document.getElementById("segundaNota");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    //recebe a nota preenchida pelo usuário
    let recebeNota1 = parseFloat(primeiraNota.value);
    let recebeNota2 = parseFloat(segundaNota.value);

    let media = (recebeNota1 + recebeNota2) / 2;

    if(media >= 5 || media <= 7){
        resultado.innerText = `${"Aluno em RECUPERAÇÃO"} 
        ${"\nA média do aluno foi: " + media.toFixed(2)}`;
    }else {
        resultado.innerText = `${"Aluno REPROVADO"} 
        ${"\nA média do aluno foi: " + media.toFixed(2)}`;
    }
});