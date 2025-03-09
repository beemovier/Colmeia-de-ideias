// Selecionando elementos
const atraso1 = 4000;
const atraso2 = 2000;

let mensagemElemento = document.getElementById("mensagem");
let botao = document.getElementById("meuBotao");

// Verificando se os elementos foram encontrados
if (mensagemElemento && botao) {
  // Função para mudar a mensagem com atraso
  function mudarMensagem() {
    botao.style.display = "none"; // Oculta o botão

    mensagemElemento.textContent = "A vida não precisa ser chata. Desafie-se!";

    // Usando setTimeout para criar um atraso de 3 segundos
    setTimeout(function () {
      mensagemElemento.textContent = "Tudo melhora quando tentamos ser melhores do que nós mesmos.";
      setTimeout(function () {
        mensagemElemento.textContent = "Dê o melhor de sí";
        setTimeout(function () {
          mensagemElemento.textContent = "Não seja como eu!";
          setTimeout(function (){
            let mensagemParcial = "Não seja uma imitação, mas sim...";
            let mensagemColorida = document.createElement("span");
            mensagemColorida.textContent = " a sua melhor versão!";
            mensagemColorida.style.color = "red";
            mensagemElemento.textContent = mensagemParcial;
            mensagemElemento.appendChild(mensagemColorida);

            // Reiniciando após 4 segundos
            setTimeout(function() {
              mensagemElemento.textContent = "Clique no botão abaixo para mudar a mensagem.";
              mensagemElemento.style.color = ""; // Removendo a cor
              botao.style.display = "block"; // Exibe o botão novamente
            }, atraso1);
          }, atraso1);
        }, atraso1);
      }, atraso1);
    }, atraso2);
  }

  // Adicionando evento de clique ao botão
  botao.addEventListener("click", mudarMensagem);
} else {
  console.error("Elementos 'mensagem' ou 'meuBotao' não encontrados!");
}