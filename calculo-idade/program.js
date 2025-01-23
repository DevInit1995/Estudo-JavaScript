let anoAtual = document.getElementById("anoAtual");
let anoNascimento = document.getElementById("anoNascimento");
let resultado = document.getElementById("resultado");
const btnCalucular = document.getElementById("btnCalcular");

btnCalucular.addEventListener("click", () => {
    let atual = parseInt(anoAtual.value);
    let nascimento = parseInt(anoNascimento.value);

    idade = atual - nascimento;

    resultado.innerText = `${"Ano Atual: " + atual} 
    ${"Ano Nascimento: " + nascimento} 
    ${"Idade: " + idade}`
});
