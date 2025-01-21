// Array para armazenas os carros
const carros = [];

//Referências aos elementos do DOM
const form = document.getElementById("carrosForm");
const submitBtn = document.getElementById("submitBtn");
const listaCarros = document.getElementById("listaCarros");

// Função para adicionar um carros ao array
submitBtn.addEventListener("click", () => {
    // Captura os valores do formulário
    const carro = {
        marca: form.marca.value,
        placa: form.placa.value,
        cor: form.cor.value,
        ano: form.ano.value,
        tipo: form.tipo.value,
        km: parseInt(form.km.value, 10) || 0,
        combustivel: form.combustivel.value,
        motor: form.motor.value,
        preco: parseFloat(form.preco.value)
    };

    // Adiciona o carro ao array
    carros.push(carro);

    // Atualiza a lista na página
    atualizarLista();

    // Limpa o formulário
    form.reset();
});

// Função para atualizar a lista exibida na página
function atualizarLista() {
    listaCarros.innerHTML = "";
    carros.forEach((carro) => {
        const li = document.createElement("li");
        li.textContent = `${"Marca: " + carro.marca} - ${"Placa: " + carro.placa} - 
        ${"Cor: " + carro.cor} - ${"Ano: " + carro.ano} - ${"Tipo: " + carro.tipo} - 
        ${"KM: " + carro.km} - ${"Combustível: " + carro.combustivel} - 
        ${"Motor: " + carro.motor} - ${"Preço: " + carro.preco}`;
        listaCarros.appendChild(li);
    });
}