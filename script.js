function adicionarTarefa(){
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