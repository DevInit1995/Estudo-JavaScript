let massa = document.getElementById("massa");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

let imc;
btnCalcular.addEventListener("click", () => {
    //obtém o valor digitado pelo usuário
    let valorMassa = parseFloat(massa.value);
    let valorAltura = parseFloat(altura.value);
    //cálculo imc
    let imc = valorMassa / Math.pow(valorAltura, 2);
    
    if(imc < 17){
        //atribui o valor do imc ao resultado (ID)
         resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
         ${"Muito Abaixo do peso"}`;
    }else if(imc >= 17 && imc <= 18.5){
        //atribui o valor do imc ao resultado (ID)
        resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
        ${"Abaixo do peso."}`;
    } else if (imc >= 18.5 && imc <= 25) {
        //atribui o valor do imc ao resultado (ID)
        resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
        ${"Parabens! Você está no seu peso ideal"}`;
    } else if (imc >= 25 && imc <= 30) {
        //atribui o valor do imc ao resultado (ID)
        resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
        ${"Sobrepeso"}`;    
    } else if (imc >= 30 && imc <= 35) {
        //atribui o valor do imc ao resultado (ID)
        resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
        ${"Obesidade."}`;
    } else if (imc >= 35 && imc <= 40) {
        //atribui o valor do imc ao resultado (ID)
        resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
        ${"Obesidade severa."}`;
    } else if (imc >= 40) {
        //atribui o valor do imc ao resultado (ID)
        resultado.innerText = `${"IMC: " + imc.toFixed(2)} 
        ${"Obesidade Mórbida."}`;
    }
});