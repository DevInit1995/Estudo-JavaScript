function descricaoClientes(){
    //debugger;
    const clientes = [
        {
            registro: 58745665,
            nome: "Jhon",
            sexo: "M",
            idade: 28,
            cpf: "000.000.000-00",
            rg: "MG-625.001.16",
            estado: "MG",
            cidade: "BH",
            rua: "Abacaxi",
            cep: "4569-5555",
            numero: 60
        },
        {
            registro: 41785255,
            nome: "Maria",
            sexo: "F",
            idade: 25,
            cpf: "000.000.000-00",
            rg: "SP-314.007.85",
            estado: "SP",
            cidade: "SP",
            rua: "Abacaxi",
            cep: "125478-7478",
            numero: 96
        }
    ];
    
    const listaClientes = document.getElementById("array");
    listaClientes.innerHTML = "";

    clientes.forEach(clientela => {
        const linhas = document.createElement("tr");

        const registro = document.createElement("td");
        registro.textContent = clientela.registro;
        linhas.appendChild(registro);

        const nome = document.createElement("td");
        nome.textContent = clientela.nome;
        linhas.appendChild(nome);

        const sexo = document.createElement("td");
        sexo.textContent = clientela.sexo;
        linhas.appendChild(sexo);

        const idade = document.createElement("td");
        idade.textContent = clientela.idade;
        linhas.appendChild(idade);

        const cpf = document.createElement("td");
        cpf.textContent = clientela.cpf;
        linhas.appendChild(cpf);

        const rg = document.createElement("td");
        rg.textContent = clientela.rg;
        linhas.appendChild(rg);

        const estado = document.createElement("td");
        estado.textContent = clientela.estado;
        linhas.appendChild(estado);

        const cidade = document.createElement("td");
        cidade.textContent = clientela.cidade;
        linhas.appendChild(cidade);

        const rua = document.createElement("td");
        rua.textContent = clientela.rua;
        linhas.appendChild(rua);

        const cep = document.createElement("td");
        cep.textContent = clientela.cep;
        linhas.appendChild(cep);

        const numero = document.createElement("td");
        numero.textContent = clientela.numero;
        linhas.appendChild(numero);

        listaClientes.appendChild(linhas);
    });


}