/* Espera todo o HTML da página carregar antes de rodar o script */
document.addEventListener('DOMContentLoaded', () => {
    
    // --------------------------------------------------------------------
    //  1. ARMAZENAR OS ELEMENTOS DA PÁGINA
    // --------------------------------------------------------------------
    
    // Tenta encontrar o botão e os textos na página
    const botaoGerar = document.getElementById('btn-gerar');
    const textoCitacao = document.getElementById('texto-citacao');
    const autorCitacao = document.getElementById('autor-citacao');

    // --------------------------------------------------------------------
    //  2. NOSSA "BASE DE DADOS" DE CITAÇÕES
    // --------------------------------------------------------------------
    
    // Uma lista (array) de objetos. Cada objeto tem uma citação e um autor.
    const citacoes = [
        {
            quote: "A persistência é o caminho do êxito.",
            author: "Charles Chaplin"
        },
        {
            quote: "A única forma de fazer um grande trabalho é amar o que você faz.",
            author: "Steve Jobs"
        },
        {
            quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
            author: "Robert Collier"
        },
        {
            quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "A criatividade exige a coragem de largar as certezas.",
            author: "Erich Fromm"
        },
        {
            quote: "Comece onde você está. Use o que você tem. Faça o que você pode.",
            author: "Arthur Ashe"
        },
        {
            quote: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
            author: "Roberto Shinyashiki"
        }
    ];

    // --------------------------------------------------------------------
    //  3. A FUNÇÃO PRINCIPAL (O QUE ACONTECE NO CLIQUE)
    // --------------------------------------------------------------------
    
    // Esta função será chamada quando o botão for clicado
    function gerarNovaCitacao() {
        // 1. Gera um número aleatório.
        // Math.random() -> dá um número entre 0 e 0.99
        // Multiplicamos pelo tamanho da lista (ex: 7)
        // Math.floor() -> arredonda para baixo (ex: 6.99 vira 6)
        const indiceAleatorio = Math.floor(Math.random() * citacoes.length);
        
        // 2. Pega a citação sorteada da lista usando o número aleatório
        const citacaoSorteada = citacoes[indiceAleatorio];
        
        // 3. Atualiza o HTML com a nova citação e autor
        textoCitacao.innerText = `"${citacaoSorteada.quote}"`; // Adiciona aspas
        autorCitacao.innerText = `- ${citacaoSorteada.author}`;
    }

    // --------------------------------------------------------------------
    //  4. CONECTAR O BOTÃO À FUNÇÃO
    // --------------------------------------------------------------------
    
    // IMPORTANTE:
    // Verificamos se o botão 'btn-gerar' REALMENTE existe nesta página.
    // Isso evita que o script dê erro nas páginas "sobre.html" e "temas.html".
    if (botaoGerar) {
        // Se o botão existe, adiciona o "ouvidor de clique".
        // Quando o usuário clicar, ele chama a função 'gerarNovaCitacao'.
        botaoGerar.addEventListener('click', gerarNovaCitacao);
    }

});