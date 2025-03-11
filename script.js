const atraso1 = 4000;
const atraso2 = 3000;
let mensagemElemento = document.getElementById("mensagem");
let botao = document.getElementById("meuBotao");
// Verificando se os elementos foram encontrados
if (mensagemElemento && botao) {
  // Função para mudar a mensagem com atraso
  function mudarMensagem() {
    mensagemElemento.textContent = "A vida não precisa ser chata. Desafie-se!";
    botao.style.display = "none"; // Oculta o botão
    // Usando setTimeout para criar um atraso de 3 segundos
    setTimeout(function () {
      mensagemElemento.textContent = "Tudo melhora quando tentamos ser melhores do que nós mesmos.";
      setTimeout(function () {
        mensagemElemento.textContent = "Dê o melhor de sí, o caminho fácil sempre tem fila";
        setTimeout(function () {
          mensagemElemento.textContent = "Não tente ser melhor que ninguém. Se inspire!";
          setTimeout(function () {
            let mensagemParcial = "Longe de ser uma imitação, mas sim: ";
            let mensagemColorida = document.createElement("span");
            mensagemElemento.textContent = mensagemParcial;
            mensagemElemento.appendChild(mensagemColorida);
            setTimeout(function () {
              mensagemColorida.textContent = "Polindo a sua melhor versão!";
              mensagemColorida.style.color = "#0056b3";
              setTimeout(function () {
                mensagemElemento.textContent = "Clique no botão abaixo para mudar a mensagem.";
                mensagemElemento.style.color = ""; // Removendo a cor
                botao.style.display = "block"; // Exibe o botão novamente
              }, atraso2);
            }, atraso2);
          }, atraso1);
        }, atraso1);
      }, atraso1);
    }, atraso1);
  }
  // Adicionando evento de clique ao botão
  botao.addEventListener("click", mudarMensagem);
} else {
  console.error("Elementos 'mensagem' ou 'meuBotao' não encontrados!");
}
