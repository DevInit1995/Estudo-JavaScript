function adicionarTarefa(){
  debugger;
  //PEGA O ELEMENTO DO CAMPO DE ENTRADA DE TEXTO
  let inputTarefa = document.getElementById("inputTarefa");

  //VALOR É ARMAZENADO NA VARIÁVEL TAREFA
  let tarefa = inputTarefa.value.trim();
  let mensagem = document.getElementById("mensagem");

  if(tarefa == ""){
    mensagem.style.color = "#A34743";
    let campoVazio = "Digite uma tarefa para adicioná-la a sua lista!";
    mensagem.textContent = campoVazio;
  }else{
    mensagem.style.color = "#28A745";
    /*MENSAGEM TAREFA ADICIONADA COM SUCESSO É ATRIBUIDA 
     AO CONTEÚDO DE TEXTO DO ELEMENTO COM O ID="MENSAGEM"*/
     let mensagemSucesso = "Tarefa adicionada com sucesso!";
     mensagem.textContent = mensagemSucesso;

    /*
      A variável listaTarefas obtém o elemento da lista 
      (provavelmente uma <ul> ou <ol>) onde as tarefas serão adicionadas. 
      A função então cria um novo item de lista (<li>) com o texto da tarefa 
      que o usuário digitou, e o adiciona à lista.
     */

      let listaTarefas = document.getElementById("listaTarefas");
      let novaTarefa = document.createElement("li");

      novaTarefa.textContent = tarefa;

      /*é responsável por adicionar um novo item 
      (novaTarefa) à lista de tarefas já existente na página.*/
      listaTarefas.appendChild(novaTarefa);
  }

  //LIMPA O CAMPO APÓS CLICAR NO BOTÃO PARA ADICIONAR TAREFA
  inputTarefa.value = "";
}

//debugger;
const car = {
  caracteristicas: {
    montadora: "volkswagen",
    modelo: "polo"
  },
  ano: 2019,
  cor: "azul",
}

for (const key in car) {
  const value = car[key];
  if (typeof value === 'object') {
    // Se for um objeto, itere sobre as suas propriedades
    for (const veichile in value) {
      console.log("Veichile - Properties: " + value[veichile]);
    }
  } else {
    console.log("Car - Property: " + value);
  }
}
//undefined
console.log(Object.values(car).map(value => value.caracteristicas));
console.log(car.caracteristicas, car.ano, car.cor);

new Date();
console.log(new Date("2024-06-24"));
console.log(new Date(2024, 6, 22, 12, 0,1));

//arrow function
const myFunction = () => "Exemplo da minha função";
console.log(myFunction());

const myExeFunction = (param) => {
  return `Exemplo da minha função ${param}`;
}
console.log(myExeFunction("Jhon"));