let preco = document.getElementById("preco");
let resultado = document.getElementById("resultado");
let btnCalculo = document.getElementById("btnCalculo");

btnCalculo.addEventListener("click", () => {
    let percentual, preco_com_imposto;
    //debugger;
    let valorPreco = parseFloat(preco.value);
    if(valorPreco == 50){
        percentual = 20;
        var calculo = (valorPreco * percentual) / 100;
        preco_com_imposto = valorPreco + calculo;
        resultado.innerText = `Valor informado R$${valorPreco} = Valor com imposto R$${preco_com_imposto}`;
    }else if(valorPreco > 50.1 && valorPreco <= 3000){
        percentual = 60;
        var calculo = (valorPreco * percentual) / 100;
        preco_com_imposto = valorPreco + calculo;
        resultado.innerText = `Valor informado R$ ${valorPreco} = Valor com imposto R$ ${preco_com_imposto}`
    }
});