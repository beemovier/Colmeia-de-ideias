// Selecionando elementos
const atraso1 = 3000;
const atraso2 = 4000;
const atraso3 = 5000;
let mensagemElemento = document.getElementById("mensagem");
let botao = document.getElementById("meuBotao");

// Verificando se os elementos foram encontrados
if (mensagemElemento && botao) {
  // Função para mudar a mensagem com atraso
  function mudarMensagem() {
    mensagemElemento.textContent = "A vida não precisa ser chata. Desafie-se!";

    // Usando setTimeout para criar um atraso de 3 segundos
    setTimeout(function () {
      mensagemElemento.textContent = "Tudo melhora quando tentamos ser melhores do que nós mesmos.";
      setTimeout(function () {
        mensagemElemento.textContent = "Dê o melhor de sí";
        setTimeout(function () {
          mensagemElemento.textContent = "Não seja como eu";
        }, atraso3); // Correção: atraso3
      }, atraso2); // Correção: atraso2
    }, atraso1); // Correção: atraso1
  }

  // Adicionando evento de clique ao botão
  botao.addEventListener("click", mudarMensagem);
} else {
  console.error("Elementos 'mensagem' ou 'meuBotao' não encontrados!");
}