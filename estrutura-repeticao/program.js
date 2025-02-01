//for
let btnContar = document.getElementById("btnContar");
let resultado = document.getElementById("resultado");

btnContar.addEventListener("click", () =>{
    let i;
    for(i = 0; i <= 10; i++){
        console.log(i);
    }
});

//while
let btnContarWhile = document.getElementById("btnContarWhile");
let resultadoWhile = document.getElementById("resultadoWhile");

btnContarWhile.addEventListener("click", () => {
    let i = 0;
    while(i <= 10){
        console.log(i);
        i++;
    }
});

let btnContarWhile2 = document.getElementById("btnContarWhile2");
let resultadoWhile2 = document.getElementById("resultadoWhile2");

btnContarWhile2.addEventListener("click", () => {
    let x = 10;
    while(x >= 0){
        console.log(x);
        x--;
    }
});

let informeValor = document.getElementById("informeValor");
let resultadoWhile3 = document.getElementById("resultadoWhile3");
let btnContarWhile3 = document.getElementById("btnContarWhile3");

btnContarWhile3.addEventListener("click", () =>{
    let valor = parseInt(informeValor.value);
    
    let a = 0;
    while(a <= valor){
        console.log(a);
        a++;
    }
});

let informeValor1 = document.getElementById("informeValor1");
let resultadoWhile4 = document.getElementById("resultadoWhile4");
let btnContarWhile4 = document.getElementById("btnContarWhile4");
let mensagem = document.getElementById("mensagem");
let valoresElemento = document.getElementById("valores");
let somaValores = document.getElementById("somaValores");
let mediaValores = document.getElementById("media");

btnContarWhile4.addEventListener("click", () => {
    let valores = [];
    let soma = 0;
    let i = 0;

    let valor = parseInt(informeValor1.value);

    if(valor <= 0){
        mensagem.innerText = "Informe um número inteiro válido.";
    }

    while(i <= valor){
        valores.push(valor);
        soma =+ valor;
        i++; 
        console.log(i);
    }

    valoresElemento.innerText = valores.join(", ");
    
    let media = soma / valores.length;
    mediaValores.innerText = media.toFixed(2);

    somaValores.innerText = soma;
});

let inicio = document.getElementById("inicio");
let fim = document.getElementById("fim");
let btnContador = document.getElementById("btnContador");
let contando = document.getElementById("contando");

btnContador.addEventListener("click", () => {
    let valores = [];
    let valorInicio = parseInt(inicio.value);
    let valorFim = parseInt(fim.value);

    while(valorInicio <= valorFim){
        valores.push(valorInicio);
        //console.log(valorInicio);
        valorInicio++;
    }

    contando.innerText = valores.join(", ");
});


