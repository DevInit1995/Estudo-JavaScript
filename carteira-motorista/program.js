let anoAtual = document.getElementById("anoAtual");
let anoNascimento = document.getElementById("anoNascimento");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    //captura o valor fornecido pelo usuário
    let atual = parseInt(anoAtual.value);
    let nascimento = parseInt(anoNascimento.value);

    let idade = atual - nascimento;

    if(idade >= 18){
        resultado.innerText = `${"Você tem, " + idade + " anos."} 
        ${"Apto a tirar carteira."}`;
    }
    else if(idade < 18){
        resultado.innerText = `${"Você tem, " + idade + " anos."} 
        ${"Inapto a tirar carteira."}`;
    }
});