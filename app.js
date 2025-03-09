// Selecionando elementos
let mensagemElemento = document.getElementById("mensagem");
let botao = document.getElementById("meuBotao");

// Verificando se os elementos foram encontrados
if (mensagemElemento && botao) {
    // Função para mudar a mensagem com atraso
    function mudarMensagem() {
        mensagemElemento.textContent = "A vida não precisa ser chata. Desafie-se!";

        // Usando setTimeout para criar um atraso de 3 segundos
        setTimeout(function() {
            mensagemElemento.textContent = "Tudo melhora quando tentamos ser melhores do que nós mesmos.";
        }, 3000); // 3000 milissegundos = 3 segundos
    }

    // Adicionando evento de clique ao botão
    botao.addEventListener("click", mudarMensagem);
} else {
    console.error("Elementos 'mensagem' ou 'meuBotao' não encontrados!");
}