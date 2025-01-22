let valor = document.getElementById("fahrenheit");
let resultado = document.getElementById("resultado");
const btnConverter = document.getElementById("btnConversor");

btnConverter.addEventListener("click", () => {
    //captura o valor digitado pelo usuário
    let valorFahrenheit = parseInt(valor.value);
    //calculo para conversão do valor
    let valorConvertido = (5 / 9) * (valorFahrenheit - 32);
    //recebe o valor da conversão e exibe em valor (ID)
    resultado.innerHTML = `Fº ${valorFahrenheit} = Cº ${valorConvertido.toFixed(2)}`;
});