const submitBtn = document.getElementById("btnSubmit");
let real = document.getElementById("real");
let resultado = document.getElementById("resultado");
submitBtn.addEventListener("click", () => {
    //Obter o valor do input como número
    let valorReal = parseFloat(real.value);
    //Converte o valor
    let valorConvertido = valorReal / 6.04;
    // Atualizar o conteúdo do p com o resultado
    resultado.innerText = `R$ ${valorReal} = US$ ${valorConvertido.toFixed(2)}`;
});