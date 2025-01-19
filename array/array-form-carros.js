
function cadastrarCarros() {
    //debugger;
    //Obtém o elemento <input> pelo ID inputMarca e armazena na variável inputMarca
    const marcaCarro = document.getElementById("inputMarca");

    //Extrai o valor do campo de entrada (value) e remove espaços em branco extras
    //com trim()
    const marca = marcaCarro.value.trim();

    const placaCarro = document.getElementById("inputPlaca");
    
    const placa = placaCarro.value.trim();
    
    const corCarro = document.getElementById("inputCor");

    const cor = corCarro.value.trim();
    
    const anoCarro = document.getElementById("inputAno");

    const ano = anoCarro.value.trim();

    const tipoCarro = document.getElementById("inputTipo");

    const tipo = tipoCarro.value.trim();

    const kmCarro = document.getElementById("inputKm");
    
    const km = kmCarro.value.trim();

    const combustivelCarro = document.getElementById("inputCombustivel");

    const combustivel = combustivelCarro.value.trim();

    const motorCarro = document.getElementById("inputMotor");

    const motor = motorCarro.value.trim();

    const precoCarro = document.getElementById("inputPreco");

    const preco = precoCarro.value.trim();

    if(marca == "" || placa == "" || cor == ""
        || ano == "" || tipo == "" || km == ""
        || combustivel == "" || motor == "" || preco == ""){
        const tipoVazio = "Preencha todos os campos!"
        const mensagem = document.getElementById("mensagemAlerta");
        mensagem.style.color = "#A34743";
        mensagem.textContent = tipoVazio;
    }
    else {
        //Obtém o elemento <ul> pelo ID formCarros e armazena na variável listaMarca 
        const listaMarca = document.getElementById("formCarros");

        //Cria um novo elemento <li> (um item de lista) e armazena na 
        // variável novaMarca
        const novaMarca = document.createElement("li");

        //Define o texto do item da lista como o valor digitado pelo usuário
        novaMarca.textContent = marca;

        //Adiciona o novo item <li> á lista <ul>
        listaMarca.appendChild(novaMarca);

        const listaPlaca = document.getElementById("formCarros");
        
        const novaPlaca = document.createElement("li");

        novaPlaca.textContent = placa;

        listaPlaca.appendChild(novaPlaca);

        const listaCor = document.getElementById("formCarros");

        const novaCor = document.createElement("li");

        novaCor.textContent = cor;

        listaCor.appendChild(novaCor);

        const listaAno = document.getElementById("formCarros");
        const novoAno = document.createElement("li");
    
        novoAno.textContent = ano;
    
        listaAno.appendChild(novoAno);

        const listaTipo = document.getElementById("formCarros");
        
        const novoTipo = document.createElement("li");

        novoTipo.textContent = tipo;

        listaTipo.appendChild(novoTipo);

        const listaKm = document.getElementById("formCarros");
        
        const novoKm = document.createElement("li");

        novoKm.textContent = km;

        listaKm.appendChild(novoKm);

        const listaCombustivel = document.getElementById("formCarros");
    
        const novoCombustivel = document.createElement("li");

        novoCombustivel.textContent = combustivel;

        listaCombustivel.appendChild(novoCombustivel);

        const listaMotor = document.getElementById("formCarros");
        
        const novoMotor = document.createElement("li");

        novoMotor.textContent = motor;

        listaMotor.appendChild(novoMotor);

        const listaPreco = document.getElementById("formCarros");
        
        const novoPreco = document.createElement("li");

        novoPreco.textContent = preco;

        listaPreco.appendChild(novoPreco);

        const mensagem = document.getElementById("mensagemAlerta");
        const tipoVazio = "Formulário salvo com sucesso!"
        mensagem.style.color = "#28A745";
        mensagem.textContent = tipoVazio; 
    }

    //Limpa o campo de entrada (<input>) após o item ser adcionado á lista
    marcaCarro.value = "";
    placaCarro.value = "";
    corCarro.value = "";
    tipoCarro.value = "";
    kmCarro.value = "";
    combustivelCarro.value = "";
    motorCarro.value = "";
    precoCarro.value = "";
    anoCarro.value = "";
}