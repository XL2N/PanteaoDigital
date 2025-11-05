/* LÓGICA DA GALERIA DE MITOS */

document.addEventListener('DOMContentLoaded', () => {

    // Procura os elementos da página de Mitos
    const listaMitos = document.querySelector('.lista-mitos');
    if (!listaMitos) {
        return; 
    }

    // Após encontrar pega os elementos
    const botoesMito = document.querySelectorAll('.btn-mito');
    const displayInicial = document.getElementById('mito-display-inicial');
    const displayConteudo = document.getElementById('mito-display-conteudo');
    
    // Elementos que vamos preencher
    const tituloMito = document.getElementById('mito-titulo');
    const imagemMito = document.getElementById('mito-imagem');
    const textoMito = document.getElementById('mito-texto');
    const referenciaMito = document.getElementById('mito-referencia');

    // "Banco de Dados" dos Mitos
    const mitosData = {
        "pandora": {
            titulo: "A Caixa de Pandora",
            imagem: "../images/mitos/pandora.png",
            texto: "A história sobre como todos os males do mundo foram libertados quando Pandora abriu a caixa, e a esperança permaneceu no fundo.",
            link: "https://brasilescola.uol.com.br/mitologia/a-caixa-pandora.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "odisseu": {
            titulo: "A jornada de Odisseu",
            imagem: "../images/herois/odisseu.png",
            texto: "A longa e árdua jornada de volta para casa do herói Odisseu após a Guerra de Troia, enfrentando ciclopes, sereias e a fúria dos deuses.",
            link: "https://brasilescola.uol.com.br/mitologia/a-odisseia.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "perseu": {
            titulo: "Perseu e Medusa",
            imagem: "../images/mitos/medusaEperseu.png",
            texto: "A história do herói que enfrentou a górgona de cabelos de serpente para resgatar a princesa Andrômeda.",
            link: "https://seresmitologicos.com.br/perseu/",
            fonte: "Fonte: Seres Mitológicos"
        },
        "hercules": {
            titulo: "As doze tarefas de Hércules",
            imagem: "../images/mitos/hercules.png",
            texto: "As tarefas impossíveis que o herói Héracles (Hércules) teve que cumprir como penitência por seus crimes.",
            link: "https://brasilescola.uol.com.br/mitologia/hercules.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "teseu": {
            titulo: "Teseu e o Minotauro",
            imagem: "../images/mitos/teseuEminotauro.png",
            texto: "A aventura do herói Teseu ao se voluntariar para entrar no labirinto de Creta e matar o monstruoso Minotauro.",
            link: "https://seresmitologicos.com.br/minotauro/",
            fonte: "Fonte: Seres Mitológicos"
        },
        "sisifo": {
            titulo: "Sísifo",
            imagem: "../images/mitos/sisifo.png",
            texto: "O mito sobre o trabalho árduo e o sofrimento eterno, com Sísifo condenado pelos deuses a empurrar uma pedra montanha acima para sempre.",
            link: "https://brasilescola.uol.com.br/mitologia/mito-de-sisifo.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "persefone": {
            titulo: "O rapto de Perséfone",
            imagem: "../images/mitos/persefone.png",
            texto: "A história que explica as estações do ano, com Perséfone sendo levada ao submundo por Hades e retornando à Terra para sua mãe, Deméter.",
            link: "https://brasilescola.uol.com.br/mitologia/persefone.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "eros": {
            titulo: "Eros e Psiquê",
            imagem: "../images/mitos/erosEpsique.png",
            texto: "A história de amor entre o deus do amor Eros (Cupido) e a mortal Psiquê, que enfrentou desafios para provar seu amor verdadeiro.",
            link: "https://seresmitologicos.com.br/psique/",
            fonte: "Fonte: Seres Mitológicos"
        },
        "icaro": {
            titulo: "Dédalo e Ícaro",
            imagem: "../images/mitos/dedaloEicaro.png",
            texto: "A história do inventor Dédalo e seu filho Ícaro, que voou muito perto do sol com asas de cera, resultando em sua queda fatal no mar.",
            link: "https://brasilescola.uol.com.br/mitologia/dedalo-icaro.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "midas": {
            titulo: "Rei Midas",
            imagem: "../images/mitos/reimidas.png",
            texto: "A história do rei que desejou que tudo que tocasse virasse ouro, e aprendeu o valor das coisas simples da vida.",
            link: "https://brasilescola.uol.com.br/mitologia/o-toque-de-midas.htm",
            fonte: "Fonte: Brasil Escola"
        }
    };

    // Função que atualiza o conteúdo
    function atualizarMito(nomeMito) {
        // Pega os dados do "banco de dados"
        const dados = mitosData[nomeMito];
        displayInicial.style.display = "none";
        displayConteudo.style.display = "block";

        // Preenche o HTML
        tituloMito.innerText = dados.titulo;
        imagemMito.src = dados.imagem;
        imagemMito.alt = dados.titulo;
        textoMito.innerText = dados.texto;
        referenciaMito.href = dados.link;
        referenciaMito.innerText = dados.fonte;
    }

    // 6. Adiciona o click do botão
    botoesMito.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o valor do mito clicado no banco
            const nomeMito = botao.dataset.mito;
            // Chama a função para atualizar o conteúdo
            atualizarMito(nomeMito);
        });
    });

});