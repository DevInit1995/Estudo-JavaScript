function exibePropriedadeCarros() {
    //debugger;
    const carros = [
        {
            marca: "Honda-Civic",
            placa: "55A-7444",
            cor: "Branco",
            ano: 2004,
            tipo: "Sedan",
            km: 264197,
            combustivel: "Gasolina",
            potenciaMotor: 1.7,
            preco: "18.000"
        },
        {
            marca: "Fiat-Uno",
            placa: "888-ABL89",
            cor: "Preto",
            ano: 2004,
            tipo: "Hatch",
            km: 170000,
            combustivel: "Gasolina",
            potenciaMotor: 1.0,
            preco: "9.900"
        }
    ];

    const listaCarros = document.getElementById("array");
    listaCarros.innerHTML = "";

    carros.forEach(carangas => {
        const linha = document.createElement("tr");

        const marca = document.createElement("td");
        marca.textContent = carangas.marca;
        linha.appendChild(marca);

        const placa = document.createElement("td");
        placa.textContent = carangas.placa;
        linha.appendChild(placa);

        const cor = document.createElement("td");
        cor.textContent = carangas.cor;
        linha.appendChild(cor);

        const ano = document.createElement("td");
        ano.textContent = carangas.ano;
        linha.appendChild(ano);

        const tipo = document.createElement("td");
        tipo.textContent = carangas.tipo;
        linha.appendChild(tipo);

        const km = document.createElement("td");
        km.textContent = carangas.km;
        linha.appendChild(km);

        const combustivel = document.createElement("td");
        combustivel.textContent = carangas.combustivel;
        linha.appendChild(combustivel);
        
        const potenciaMotor = document.createElement("td");
        potenciaMotor.textContent = carangas.potenciaMotor;
        linha.appendChild(potenciaMotor);

        const preco = document.createElement("td");
        preco.textContent = carangas.preco;
        linha.appendChild(preco);

        listaCarros.appendChild(linha);
    });
}


