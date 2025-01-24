let valor = document.getElementById("valor");
let resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
    //obtém o valor informado pelo user
    let valorRecebido = parseInt(valor.value);

    if(valorRecebido % 2 == 0){
        resultado.innerText = `${"VALOR INFORMADO: " + valorRecebido} É PAR`;
    }
    else{
        resultado.innerText = `${"VALOR INFORMADO: " + valorRecebido} É IMPAR`;
    }
    
});