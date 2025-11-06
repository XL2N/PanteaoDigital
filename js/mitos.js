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
            texto: "Pandora foi criada pelos deuses a mando de Zeus como a primeira mulher da humanidade. Moldada por Hefesto e dotada de dons de várias divindades, ela recebeu uma caixa (ou jarro) que jamais deveria ser aberta. Movida pela curiosidade, Pandora abriu o recipiente e libertou todos os males do mundo — doenças, sofrimento, inveja, velhice e desgraças. Apenas a esperança permaneceu no fundo, simbolizando que, mesmo diante do caos, o ser humano ainda guarda algo que o motiva a seguir. O mito representa a origem dos males e a dualidade entre curiosidade e esperança, sendo uma metáfora da própria condição humana. Assim, Pandora nos lembra que a busca pelo conhecimento pode trazer consequências, mas também é o que impulsiona a humanidade a evoluir e encontrar significado.",
            link: "https://brasilescola.uol.com.br/mitologia/a-caixa-pandora.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "odisseu": {
            titulo: "A jornada de Odisseu",
            imagem: "../images/herois/odisseu.png",
            texto: "Odisseu, conhecido pelos romanos como Ulisses, é o herói grego protagonista da Odisseia, epopeia de Homero. Após a Guerra de Troia, ele enfrenta uma longa e perigosa jornada de dez anos para retornar à sua terra natal, Ítaca. Durante o caminho, Odisseu enfrenta criaturas míticas como o ciclope Polifemo, as sereias, o gigante Lestrigão e a feiticeira Circe, além de sofrer a ira de Poseidon, que o impede de chegar em casa. Astuto e engenhoso, ele se destaca mais pela inteligência do que pela força, simbolizando o triunfo da razão humana sobre os desafios e tentações. A narrativa aborda temas como o retorno ao lar (nóstos), a fidelidade, a coragem e a perseverança diante do destino. Sua história é também uma reflexão sobre a própria jornada interior e o desejo humano de reencontrar o que realmente importa.",
            link: "https://brasilescola.uol.com.br/mitologia/a-odisseia.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "perseu": {
            titulo: "Perseu e Medusa",
            imagem: "../images/mitos/medusaEperseu.png",
            texto: "Perseu é um dos heróis mais célebres da mitologia grega. Filho de Zeus e da mortal Danae, ele foi encarregado de realizar uma tarefa quase impossível: derrotar Medusa, a górgona cujo olhar transformava qualquer um em pedra. Com a ajuda dos deuses — Hermes lhe deu sandálias aladas e Atena um escudo espelhado — Perseu conseguiu decapitá-la sem olhar diretamente para ela. Do sangue de Medusa nasceu o cavalo alado Pégaso. Mais tarde, Perseu salvou Andrômeda, que seria sacrificada a um monstro marinho, e a tomou por esposa. O mito representa a coragem, a superação do medo e a vitória da inteligência divina sobre o terror. Ele também simboliza o poder do autoconhecimento, pois olhar indiretamente para Medusa é aprender a enfrentar o próprio medo sem ser dominado por ele.",
            link: "https://seresmitologicos.com.br/perseu/",
            fonte: "Fonte: Seres Mitológicos"
        },
        "hercules": {
            titulo: "As doze tarefas de Hércules",
            imagem: "../images/mitos/hercules.png",
            texto: "Héracles, conhecido em Roma como Hércules, é o herói símbolo da força e da resistência. Filho de Zeus e da mortal Alcmena, foi vítima da fúria de Hera, que o fez cometer um terrível crime contra sua própria família. Para se redimir, o oráculo de Delfos impôs-lhe doze tarefas impossíveis, determinadas pelo rei Euristeu. Entre elas estavam matar o Leão de Nemeia, capturar o javali de Erimanto, limpar os estábulos de Áugias e capturar Cérbero, o cão guardião do submundo. Cada tarefa simbolizava o domínio sobre instintos, perigos e desafios humanos. Após cumpri-las, Hércules ascendeu ao Olimpo, tornando-se um deus, exemplo de força e redenção. Sua lenda mostra que mesmo as maiores quedas podem levar à glória quando há coragem, sacrifício e arrependimento verdadeiro.",
            link: "https://brasilescola.uol.com.br/mitologia/hercules.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "teseu": {
            titulo: "Teseu e o Minotauro",
            imagem: "../images/mitos/teseuEminotauro.png",
            texto: "Teseu era filho de Egeu, rei de Atenas, e ficou conhecido por enfrentar o temido Minotauro, criatura metade homem e metade touro. A cada nove anos, sete jovens e sete donzelas eram enviados como sacrifício ao monstro, que vivia no labirinto construído por Dédalo em Creta. Teseu se ofereceu para ir e, com a ajuda de Ariadne, filha do rei Minos, recebeu um novelo de fio para não se perder no caminho. Ele matou o Minotauro e conseguiu escapar, tornando-se símbolo de coragem, inteligência e heroísmo civilizador. O mito representa a vitória da razão sobre a brutalidade e a busca humana por liberdade e justiça. Assim, Teseu encarna o herói que desafia o caos e cria ordem, abrindo caminhos para a superação dos próprios labirintos da alma.",
            link: "https://seresmitologicos.com.br/minotauro/",
            fonte: "Fonte: Seres Mitológicos"
        },
        "sisifo": {
            titulo: "Sísifo",
            imagem: "../images/mitos/sisifo.png",
            texto: "Sísifo foi um rei astuto e enganador, que tentou trapacear os deuses várias vezes. Por sua arrogância e desafio à ordem divina, foi condenado por Zeus a um castigo eterno: empurrar uma enorme pedra montanha acima, apenas para vê-la rolar de volta toda vez que chegava ao topo. O mito de Sísifo é uma poderosa metáfora sobre o esforço inútil e o ciclo interminável do trabalho humano. Na filosofia moderna, especialmente em Albert Camus, Sísifo simboliza a condição humana — o absurdo da existência e a necessidade de encontrar sentido mesmo em meio ao sofrimento inevitável. Sua figura nos lembra que há dignidade em persistir, mesmo quando o destino parece inescapável, e que a verdadeira força está em continuar empurrando a pedra.",
            link: "https://brasilescola.uol.com.br/mitologia/mito-de-sisifo.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "persefone": {
            titulo: "O rapto de Perséfone",
            imagem: "../images/mitos/persefone.png",
            texto: "Perséfone era filha de Deméter, deusa da colheita e fertilidade. Um dia, enquanto colhia flores, foi raptada por Hades, deus do submundo, que a levou para seu reino e a tornou sua esposa. Inconsolável, Deméter fez com que a Terra se tornasse infértil, mergulhando o mundo em fome. Zeus interveio, e ficou decidido que Perséfone passaria parte do ano com Hades (outono e inverno) e parte com sua mãe (primavera e verão). O mito simboliza o ciclo das estações e a alternância entre morte e renascimento na natureza. Também representa o vínculo entre mãe e filha e o equilíbrio entre luz e escuridão. É uma lembrança poética de que todo fim traz um recomeço, e que a vida se renova mesmo após os períodos de maior escuridão.",
            link: "https://brasilescola.uol.com.br/mitologia/persefone.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "eros": {
            titulo: "Eros e Psiquê",
            imagem: "../images/mitos/erosEpsique.png",
            texto: "Eros, deus do amor, apaixonou-se pela mortal Psiquê, cuja beleza despertou ciúmes em Afrodite. A deusa impôs à jovem várias provas impossíveis, que Psiquê superou com coragem e auxílio divino. Um dos desafios foi descer ao mundo dos mortos e trazer uma caixa com a beleza de Perséfone, mas Psiquê, movida pela curiosidade, abriu-a e caiu em sono profundo. Eros a salvou e pediu a Zeus que a tornasse imortal, para que pudessem se unir para sempre. O mito representa a jornada do amor verdadeiro, que vence obstáculos e revela a união entre alma (Psiquê) e desejo (Eros). É uma celebração da transformação espiritual que o amor provoca, mostrando que amar é também crescer e se tornar divino.",
            link: "https://seresmitologicos.com.br/psique/",
            fonte: "Fonte: Seres Mitológicos"
        },
        "icaro": {
            titulo: "Dédalo e Ícaro",
            imagem: "../images/mitos/dedaloEicaro.png",
            texto: "Dédalo, grande inventor ateniense, foi aprisionado em Creta junto com seu filho Ícaro pelo rei Minos. Para escapar, ele construiu asas feitas de penas e cera. Antes de voarem, Dédalo advertiu Ícaro para não se aproximar demais do sol, pois o calor derreteria a cera. Fascinado pela sensação de liberdade, o jovem desobedeceu e subiu alto demais; as asas se desmancharam e ele caiu no mar. O mito de Ícaro é um lembrete sobre os perigos da arrogância e do excesso de ambição, mas também sobre o impulso humano de buscar o impossível, mesmo com o risco da queda. Ele nos ensina que a verdadeira sabedoria está no equilíbrio entre sonho e prudência, entre o céu e a terra.",
            link: "https://brasilescola.uol.com.br/mitologia/dedalo-icaro.htm",
            fonte: "Fonte: Brasil Escola"
        },
        "midas": {
            titulo: "Rei Midas",
            imagem: "../images/mitos/reimidas.png",
            texto: "O rei Midas era conhecido por sua riqueza e ganância. Um dia, ajudou o deus Dionísio a encontrar seu amigo Sileno e, como recompensa, pediu o dom de transformar em ouro tudo o que tocasse. No início, encantado com seu poder, Midas transformou objetos, flores e até o próprio palácio em ouro. Mas logo percebeu o castigo de seu desejo quando a comida e até sua filha se transformaram em metal. Desesperado, pediu perdão a Dionísio, que o orientou a se banhar no rio Páctolo, livrando-o do dom amaldiçoado. A história ensina sobre a avareza e o verdadeiro valor das coisas simples e humanas. É uma advertência sobre os perigos do desejo desmedido e a importância de reconhecer o que realmente tem valor.",
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