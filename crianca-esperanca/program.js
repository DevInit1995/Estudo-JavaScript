let opcaoDoacao = document.getElementById("opcaoDoacao");
let btnRegistrar = document.getElementById("btnRegistrar");
let doacaoFinalizada = document.getElementById("doacaoFinalizada");

btnRegistrar.addEventListener("click", () => {
    let doacao = parseInt(opcaoDoacao.value);

    let valor;
    switch(doacao) {
        case 1: 
            valor = 10;
            break;
        case 2:
            valor = 25;
            break;
        case 3:
            valor = 50;
            break;
        case 4:
            valor = parseFloat(prompt("Digite o valor que deseja doar:"))
            break;
        case 5:
            doacaoFinalizada.innerText = `Doação cancelada!`;
            break;
    }
    doacaoFinalizada.innerText = `Sua doação foi de R$ ${valor}`;
});