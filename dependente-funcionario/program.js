let nomeFuncionario = document.getElementById("nomeFuncionario");
let salarioFuncionario = document.getElementById("salarioFuncionario");
let quantidadeDependentes = document.getElementById("quantidadeDependentes");
let btnCalcular = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () =>{
    let valorSalario;
    debugger
    let nome = (nomeFuncionario.value);
    let salario = parseFloat(salarioFuncionario.value);
    let dependentes = parseInt(quantidadeDependentes.value);

    switch(dependentes){
        case 0:
            valorSalario = salario + (salario * 5) / 100;
            break;
        case 1:
        case 2:
        case 3:
            valorSalario = salario + (salario * 10) / 100;
            break;
        case 4:
        case 5:
        case 6:
            valorSalario = salario + (salario * 15) / 100;
            break;
        default:
            valorSalario = salario + (salario * 18) / 100;
    }
    resultado.innerText = `O novo salário de ` + nome + ` será de R$ ` + valorSalario.toFixed(2);
});