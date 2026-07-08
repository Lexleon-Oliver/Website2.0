import { Injectable } from '@angular/core';
import { BlogItem } from '../models/blog-item';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private news!:BlogItem[];

  constructor() {
    this.news=[
      {
        id:1,
        title:"O que é phishing e como se proteger desse golpe online",
        slogan:"Você já recebeu um e-mail informando que sua conta foi bloqueada e você precisa agir imediatamente para "+
        "desbloqueá-la? Ou talvez uma mensagem dizendo que você ganhou um prêmio, mas precisa clicar em um link para confirmar "+
        "seus dados? Esses tipos de mensagens podem ser tentativas de phishing, um dos golpes mais comuns na Internet atualmente.",
        content: `
        <p>Phishing é um golpe virtual em que criminosos tentam enganar as pessoas para que revelem informações pessoais, como senhas, números de cartão de crédito ou dados bancários. Esses golpistas se disfarçam de empresas ou pessoas confiáveis, enviando e-mails, mensagens de texto ou até mesmo ligando. O objetivo é roubar suas informações para fazer compras, transferir dinheiro ou até mesmo roubar sua identidade.</p>
        <p>O termo phishing é uma variação de fishing (pesca, em inglês), simbolizando a ideia de "pescar" informações pessoais das vítimas. A primeira letra "f" foi substituída por "ph", uma forma popular de escrita na cultura da informática. A analogia com a pesca é usada porque o golpista tenta "fisgar" a vítima com iscas, como e-mails ou sites que parecem legítimos, esperando que a pessoa "morda" e forneça suas informações.</p>
        <h4>Como funciona o phishing?</h4>
        <p>O phishing pode assumir diversas formas, mas o padrão é sempre o mesmo: o criminoso tenta induzir a vítima a clicar em um link ou baixar um arquivo malicioso. Ao clicar no link, você pode ser direcionado para um site falso que parece um site legítimo (como um banco ou uma loja online). A partir daí, o golpista tenta coletar suas informações pessoais e usá-las para prejudicá-lo.</p>
        <p>Essas mensagens muitas vezes parecem urgentes e pedem que você faça algo imediatamente. Por exemplo, um e-mail informando que sua conta será bloqueada se você não atualizar suas informações ou que você precisa fornecer suas informações de contato para evitar problemas. Muitas pessoas, vendo essa urgência, acabam caindo na armadilha.</p>
        <h4>Como identificar um golpe de phishing?</h4>
        <ul>
          <li><strong>Mensagem suspeita:</strong> O primeiro conselho é sempre ter cuidado com mensagens inesperadas, principalmente se elas pedirem para você clicar em links ou fornecer informações pessoais.</li>
          <li><strong>Erros gramaticais e ortográficos:</strong> as mensagens de phishing geralmente contêm erros ortográficos ou palavras estranhas.</li>
          <li><strong>Links falsos:</strong> passe o mouse sobre o link sem clicar para ver o endereço real. Se o link parecer estranho ou não corresponder ao site oficial, é um sinal de alerta.</li>
          <li><strong>Urgência:</strong> O phishing geralmente usa um tom alarmante, pedindo que você aja rapidamente para evitar problemas.</li>
          <li><strong>Anexos inesperados:</strong> se você não esperava receber um anexo, não o abra. Esses arquivos podem conter vírus ou malware.</li>
        </ul>
        <h4>Como você se protege contra phishing?</h4>
        <p>Felizmente, existem algumas etapas simples que você pode seguir para se proteger contra golpes de phishing:</p>
        <ul>
          <li><strong>Verifique o remetente:</strong> se o e-mail vier de uma fonte desconhecida ou parecer estranho, não o abra. Em vez disso, verifique diretamente com a empresa ou pessoa que supostamente enviou a mensagem.</li>
          <li><strong>Cuidado com links e anexos:</strong> nunca clique em links suspeitos ou baixe anexos de fontes desconhecidas. Se precisar acessar um site, digite o endereço diretamente na barra de navegação.</li>
          <li><strong>Use a verificação em duas etapas:</strong> isso adiciona uma camada extra de segurança, solicitando que você forneça uma segunda forma de verificação (como um código enviado ao seu telefone) ao acessar suas contas.</li>
          <li><strong>Mantenha seu antivírus atualizado:</strong> os programas de segurança podem identificar e bloquear links e anexos maliciosos antes que possam causar danos.</li>
          <li><strong>Cuidado com os sinais de alerta:</strong> se algo parece bom demais para ser verdade, provavelmente é. Não se deixe enganar por promessas ou ofertas de preços irrealistas.</li>
        </ul>
      `,
        subtitle:"Phishing é um golpe online perigoso e muito comum, mas com um pouco de cuidado e atenção você pode se "+
        "proteger. Tenha sempre cuidado ao verificar suas mensagens e nunca forneça informações pessoais a fontes não "+
        "verificadas. Com essas dicas simples, você pode navegar na web com mais segurança e evitar golpes online.",
        date:"09/12/2024 20:00:00",
        url:"https://www.malwarebytes.com/wp-content/uploads/sites/2/2024/05/phishing.webp?w=1024",
        type:"Dica"
      },
      {
        id:2,
        title:"Feliz Natal e um próspero Ano Novo! 🎉",
        slogan:"Neste fechamento de ano, quero expressar minha gratidão e esperar que o Natal traga felicidade em abundância, "+
          "enquanto o Ano Novo seja repleto de novas oportunidades, aprendizado, segurança e contentamento, tanto no ambiente "+
          "digital quanto na vida cotidiana.",
        content: `
        <p>Ao final deste ano, quero aproveitar para enviar meus votos de um Feliz Natal e um Ano Novo cheio de conquistas! Que
          cada momento com seus familiares seja especial e que a tecnologia continue sendo uma grande parceira neste novo capítulo,
          seja para lazer, trabalho ou aprendizado.</p>
        <p>Lembre-se de que, assim como realizamos manutenção em nossos equipamentos para que não falhem, é importante realizar uma
          "manutenção" no nosso bem-estar pessoal e nas nossas relações no dia-a-dia. Que o novo ano traga-nos mais paz, saúde e
          oportunidades para crescer, aprender e admirar as maravilhas do mundo digital com máxima segurança e sapiência. E já que
          falamos em segurança, mantenha sempre-se em estado de alerta durante a navegação: use senhas fortes, mantenha seus
          dispositivos atualizados e, claro, fique atento aos perigos do phishing e das fraudes online. A tecnologia é fabulosa,
          mas deve ser usada com cuidado para não nos causar problemas.</p>
        <p>Estou à sua disposição para ajudá-lo a resolver quaisquer problemas, seja no computador, smartphone ou navegação segura
          na internet.</p>
      `,
        subtitle:"Que 2025 seja um ano de muito sucesso, aprendizado e, claro, boas conexões (tanto digitais quanto pessoais)!",
        date:"23/12/2024 17:41:12",
        url:"https://vidadesuporte.com.br/wp-content/uploads/2013/12/2013-12-09-16.15.jpg",
        type:"Mensagem"
      },
      {
        id:3,
        title:"Como Criar uma Senha Segura Facilmente para Proteger Suas Contas",
        slogan:"Criar uma senha segura não precisa ser complicado, mas exige atenção e um pouco de criatividade. "+
        "Neste artigo, vou compartilhar dicas práticas e eficazes para criar uma senha que proteja suas contas de forma robusta. "+
        "Vamos explorar técnicas simples e exemplos claros para você se proteger no mundo digital. Vamos lá!",
        content: `
        <p>No mundo digital em que vivemos, a segurança das nossas informações pessoais e profissionais é mais importante do que
        nunca. Uma das primeiras linhas de defesa contra invasões e ataques cibernéticos é a criação de uma senha segura.
        Como técnico, sei que muitas pessoas subestimam a importância de uma senha forte, mas a verdade é que uma senha fraca
        pode ser a porta de entrada para problemas graves, como roubo de dados e fraudes.</p>

        <h2>Por que uma Senha Forte é Importante?</h2>

        <p>Antes de mergulharmos nas dicas, é crucial entender por que uma senha forte é tão importante.
        Senhas fracas, como <code>"123456"</code> ou <code>"senha123"</code>, são facilmente adivinhadas por hackers que
        usam ferramentas automatizadas para testar combinações comuns. Uma senha segura dificulta esse processo, protegendo
        suas contas de e-mail, redes sociais, bancos e outros serviços online.</p>

        <h2>Dicas para Criar uma Senha Segura</h2>

        <h3>1. Use uma Combinação de Caracteres Diferentes</h3>
        <p>Uma senha forte deve incluir letras maiúsculas, minúsculas, números e símbolos. Quanto mais variada for a
        combinação, mais difícil será para alguém adivinhar ou quebrar a senha.</p>

        <h3>2. Substitua Letras por Números e Símbolos Parecidos</h3>
        <p>Uma técnica eficaz é substituir letras por números ou símbolos que se pareçam com elas. Por exemplo:</p>
        <ul>
            <li>A letra <strong>"a"</strong> pode ser substituída por <code>"@"</code>.</li>
            <li>A letra <strong>"A"</strong> pode ser substituída por <code>"4"</code>.</li>
            <li>A letra <strong>"E"</strong> pode ser substituída por <code>"3"</code>.</li>
            <li>A letra <strong>"I"</strong> pode ser substituída por <code>"!"</code> ou <code>"1"</code>.</li>
            <li>A letra <strong>"O"</strong> pode ser substituída por <code>"0"</code> (zero).</li>
            <li>A letra <strong>"S"</strong> pode ser substituída por <code>"$"</code>.</li>
        </ul>
        <p><strong>Exemplo:</strong> A palavra <code>"Seguranca"</code> pode se tornar <code>"$3gur@nc@"</code>.</p>

        <h3>3. Crie Senhas Longas</h3>
        <p>Quanto mais longa for a senha, mais difícil será de quebrar. Procure usar pelo menos 12 caracteres. Frases
        longas ou combinações de palavras aleatórias são uma boa opção.</p>

        <h3>4. Evite Informações Pessoais</h3>
        <p>Nunca use informações como nomes, datas de nascimento, números de telefone ou outras informações facilmente
        associadas a você.</p>

        <h3>5. Use Frases ou Combinações Aleatórias</h3>
        <p>Em vez de uma única palavra, crie uma senha baseada em uma frase ou combinação de palavras que faça sentido apenas
        para você. Por exemplo:</p>

        <p><strong>Frase Original:</strong> <code>"CachorroGostaDeOsso2025!"</code></p>
        <p><strong>Senha Forte:</strong> <code>"C@chorr0G0st@D3O$$02025!"</code></p>


        <h3>6. Ative a Autenticação de Dois Fatores (2FA)</h3>
        <p>Mesmo com uma senha forte, é recomendável ativar a autenticação de dois fatores sempre que possível. Isso adiciona
        uma camada extra de segurança, exigindo um código adicional além da senha.</p>

        <h2>Exemplos Práticos de Senhas Seguras</h2>

        <p>Aqui estão alguns exemplos de como transformar palavras ou frases simples em senhas seguras:</p>
        <ul>
            <li><strong>Frase Original:</strong> <code>"MinhaSenhaSegura"</code><br>
                <strong>Senha Forte:</strong> <code>"M!nh@$3nh@$3gur@"</code></li>
            <li><strong>Frase Original:</strong> <code>"TecnicoEmInformatica"</code><br>
                <strong>Senha Forte:</strong> <code>"T3cn!c0Em1nf0rm@t!c@"</code></li>
            <li><strong>Frase Original:</strong> <code>"PrefeituraDaMinhaCidade"</code><br>
                <strong>Senha Forte:</strong> <code>"Pr3f3!tur@D@M!nh@C!d@d3"</code></li>
            <li><strong>Frase Original:</strong> <code>"CurriculoOnline2023"</code><br>
                <strong>Senha Forte:</strong> <code>"Curr!cul0Onl!n3@2023"</code></li>
        </ul>

        <h2>Como Gerenciar Várias Senhas Fortes</h2>

        <p>Criar senhas seguras é apenas o primeiro passo. Lembrar de todas elas pode ser um desafio. Aqui estão algumas
        dicas para gerenciar suas senhas:</p>
        <ul>
            <li><strong>Use um Gerenciador de Senhas:</strong> Ferramentas como LastPass, Bitwarden ou 1Password ajudam a
            armazenar e gerenciar suas senhas de forma segura.</li>
            <li><strong>Nunca Repita Senhas:</strong> Use uma senha única para cada conta. Se uma senha for comprometida,
            as outras contas permanecerão seguras.</li>
            <li><strong>Atualize Suas Senhas Regularmente:</strong> Mesmo que uma senha seja forte, é uma boa prática
            alterá-la periodicamente, especialmente para contas importantes.</li>
        </ul>

      `,
        subtitle:"Ao seguir as dicas deste artigo, você estará protegendo suas contas e informações contra ameaças cibernéticas. "+
        "Lembre-se: a segurança digital começa com você! ",
        date:"11/02/2025 18:34:24",
        url:"https://images.squarespace-cdn.com/content/55c378d4e4b031b2fa7cbe45/1502991328962-DXY5BWTLDZH597I8NI4F/senha-segura.png?format=1500w&content-type=image%2Fpng",
        type:"Dica"
      },
      {
        "id": 4,
        "title": "Por que trocar o HD por um SSD deixa seu PC mais rápido?",
        "slogan": "Se o seu computador está lento e demora para ligar ou abrir programas, pode ser hora de trocar o HD por um SSD. Essa simples mudança pode transformar completamente o desempenho do seu PC.",
        "content": `
          <p>Se o seu computador está muito lento, trocar o HD por um SSD pode resolver o problema. Mas por que isso faz tanta diferença? Vou explicar de um jeito fácil de entender.</p>

          <h4>O que é HD e SSD?</h4>
          <ul>
            <li><strong>HD (Disco Rígido):</strong> É como um toca-discos antigo - tem um disco que gira e uma agulha que lê as informações. Isso o torna mais lento e pode quebrar com o tempo.</li>
            <li><strong>SSD:</strong> Funciona como um pendrive gigante - armazena tudo em chips de memória, sem partes móveis. Por isso é muito mais rápido e durável.</li>
          </ul>

          <h4>Por que o SSD é melhor?</h4>
          <ul>
            <li><strong>É super rápido:</strong> Encontra arquivos num piscar de olhos, enquanto o HD precisa "procurar" girando o disco.</li>
            <li><strong>Não trava:</strong> Sem partes mecânicas, dificilmente apresenta falhas ou quebra.</li>
            <li><strong>Responde na hora:</strong> Quando você clica em algo, o computador reage imediatamente.</li>
          </ul>

          <h4>Vantagens do SSD</h4>
          <ul>
            <li><strong>O PC liga em segundos</strong> e abre programas sem demora</li>
            <li><strong>Dura mais tempo</strong> e não estraga com pequenos impactos</li>
            <li><strong>Não faz barulho</strong> e esquenta menos</li>
            <li><strong>Dá nova vida</strong> a computadores antigos</li>
          </ul>

          <h4>Quanto custa?</h4>
          <p>Os preços caíram muito! Um SSD básico (240GB) custa menos que muitos celulares e é suficiente para a maioria dos usuários. Se precisar de mais espaço, você pode usar o HD antigo como "gaveta" para arquivos.</p>

          <h4>Como fazer a troca?</h4>
          <p>A instalação é simples, basta entrar em contato e solicitar um orçamento. Faço a troca e transferência de tudo do HD antigo sem perder seus arquivos.</p>

          <h4>Vale a pena?</h4>
          <p>Com certeza! É o melhor custo-benefício para deixar seu computador rápido sem gastar fortunas em um novo.</p>
        `,
        "subtitle": "Trocar o HD por um SSD é a forma mais fácil de turbinar seu computador. Seu PC vai ligar rápido, programas vão abrir sem travar e você ainda ganha em durabilidade.",
        "date": "24/03/2025 18:07:19",
        "url": "https://img.freepik.com/fotos-gratis/partes-de-um-disco-rigido-pertencentes-ao-hardware-do-computador-explodiram-uma-a-uma-e-organizadas_463209-20.jpg",
        "type": "Dica"
      },
      {
        "id": 5,
        "title": "Windows 10 Chega ao Fim: Microsoft Sugere Reciclar PCs Antigos",
        "slogan": "O suporte ao Windows 10 será encerrado em outubro de 2025, e a Microsoft já está orientando usuários sobre o que fazer com seus computadores antigos.",
        "content": `
          <p>A Microsoft está usando diferentes métodos para avisar os usuários do Windows 10 que o suporte ao sistema operacional está chegando ao fim. Uma das formas é por meio de e-mails com respostas a perguntas frequentes, como: <em>"O que posso fazer com meu computador antigo?"</em></p>

          <h4>Microsoft Recomenda Vender ou Reciclar PCs Antigos</h4>
          <p>Uma das respostas mais chamativas no e-mail é a sugestão da Microsoft sobre o destino dos computadores antigos: a empresa recomenda que eles sejam <strong>vendidos ou reciclados</strong> por organizações locais. A mensagem deixa claro que <strong>não haverá extensão do suporte ao Windows 10</strong>.</p>


          <h4>O Que Acontece Quando o Suporte Acabar?</h4>
          <ul>
            <li>Seu PC com Windows 10 <strong>não vai parar de funcionar</strong></li>
            <li>Mas <strong>não receberá mais atualizações de segurança</strong></li>
            <li>Você ficará <strong>exposto a riscos de vírus e falhas</strong></li>
          </ul>

          <h4>Windows 11 é a Alternativa, mas Exige Hardware Novo</h4>
          <p>A Microsoft promove o Windows 11 como opção segura, mas ele precisa de PCs mais modernos (com processadores de <strong>2017 ou mais recentes</strong>). A empresa não menciona no e-mail a opção de suporte estendido pago (US$ 30/ano), sugerindo indiretamente migrar para um PC novo.</p>

          <h4>Alternativas Para Quem Não Quer Trocar de PC</h4>
          <ul>
            <li><strong>Continuar no Windows 10</strong> (mas assumindo os riscos de segurança)</li>
            <li><strong>Instalar Linux</strong> (Ubuntu, Mint ou Fedora são boas opções para iniciantes)</li>
          </ul>
          <p><em>Fonte da notícia: <a href="https://engenhariae.com.br/noticia/descontinuacao-do-windows-10-microsoft-recomenda-ate-reciclar-pcs-antigos" target="_blank">Engenharia e</a></em></p>

          <h4>Minha Opinião: A Microsoft Está Forçando a Atualização?</h4>
          <p>Parece que a Microsoft está empurrando os usuários para o Windows 11. Muitos PCs funcionais podem acabar sendo descartados sem necessidade. E você, está pronto para se despedir do Windows 10?</p>
        `,
        "subtitle": "Com fim do suporte em outubro/2025, Microsoft sugere reciclagem de PCs antigos e migração para Windows 11, mas existem alternativas para quem não quer trocar de computador.",
        "date": "05/04/2025 11:25:17",
        "url": "https://cdn.pixabay.com/photo/2020/09/26/11/36/laptop-5603790_1280.jpg",
        "type": "Notícia"
      },
      {
        "id": 6,
        "title": "Notebook ou Desktop: Qual Escolher Para Suas Necessidades?",
        "slogan": "Descubra qual é a melhor opção. Analisamos as vantagens de notebooks e desktops para ajudar você a escolher o computador ideal para seu estilo de uso e necessidades específicas.",
        "content": `
          <p>Na hora de comprar um computador, muita gente fica em dúvida: notebook ou desktop? A escolha certa depende muito
          do seu estilo de vida, do espaço disponível e das tarefas que você pretende realizar no dia a dia.</p>

          <p>Neste artigo, vamos explicar de forma simples as principais diferenças entre essas duas opções e ajudar você a
          decidir qual se encaixa melhor nas suas necessidades.</p>

          <h4>📱 Quando o Notebook é a Melhor Escolha</h4>
          <p>O notebook é aquele computador portátil que você pode levar para qualquer lugar. Ele se destaca em várias
          situações do dia a dia:</p>

          <ul>
            <li><strong>Você precisa de mobilidade:</strong> Ideal para quem estuda, trabalha em cafés, coworkings ou faz
            reuniões fora do escritório.</li>
            <li><strong>Mora em um espaço pequeno:</strong> Se você vive em apartamento pequeno ou não tem uma mesa exclusiva
            para trabalhar, o notebook ocupa menos espaço.</li>
            <li><strong>Trabalha no modelo híbrido ou remoto:</strong> Fica fácil levar o notebook do escritório para casa e
            vice-versa.</li>
            <li><strong>Viaja com frequência ou faz apresentações externas:</strong> Professores, vendedores e consultores
            costumam se beneficiar bastante da portabilidade.</li>
          </ul>

          <div class="alert alert-tip">
            💡 <strong>Dica:</strong> Hoje em dia, muitos notebooks já vêm com bom desempenho, bateria que dura várias horas e
            até placas de vídeo dedicadas para tarefas mais pesadas, como edição de vídeo ou jogos leves.
          </div>

          <h4>🖥️ Quando o Desktop Ainda é Imbatível</h4>
          <p>O desktop, também conhecido como computador de mesa, é ideal para quem busca potência e durabilidade. Veja quando
          ele faz mais sentido:</p>

          <ul>
            <li><strong>Você precisa de alto desempenho:</strong> Gamers, arquitetos, engenheiros e editores de vídeo costumam
            exigir máquinas mais potentes — e os desktops geralmente entregam mais desempenho pelo mesmo preço.</li>
            <li><strong>Quer fazer upgrades no futuro:</strong> No desktop, é mais fácil trocar só a placa de vídeo, colocar
            mais memória RAM ou adicionar armazenamento.</li>
            <li><strong>Busca conforto para longas horas de uso:</strong> Telas maiores, teclado separado e mouse ergonômico
            ajudam na postura e evitam dores.</li>
            <li><strong>Está de olho no custo-benefício:</strong> Um desktop costuma ser mais barato que um notebook com as
            mesmas configurações — ou mais potente pelo mesmo valor.</li>
          </ul>

          <div class="alert alert-info">
            📊 <strong>Curiosidade:</strong> Uma pesquisa da IDC Brasil (2023) mostrou que os desktops ainda são muito
            procurados por profissionais que precisam de desempenho máximo, apesar do crescimento nas vendas de notebooks.
          </div>

          <h4>⚖️ Comparativo Direto: Vantagens e Desvantagens</h4>
            <table class="container-fluid">
              <thead>
                <tr>
                  <th>Fator</th>
                  <th>Notebook</th>
                  <th>Desktop</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td>Portabilidade</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐☆☆☆☆</td>
                </tr>
                <tr>
                  <td>Potência</td>
                  <td>⭐⭐⭐☆☆</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Durabilidade física</td>
                  <td>⭐⭐⭐☆☆</td>
                  <td>⭐⭐⭐⭐☆</td>
                </tr>
                <tr>
                  <td>Custo de manutenção</td>
                  <td>⭐⭐☆☆☆</td>
                  <td>⭐⭐⭐⭐☆</td>
                </tr>
                <tr>
                  <td>Facilidade de upgrade</td>
                  <td>⭐☆☆☆☆</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>

          <div class="alert alert-summary">
            🎯 <strong>Resumo:</strong> Se você precisa de mobilidade, vá de notebook. Se quer potência e flexibilidade para upgrades, o desktop ainda é rei.
          </div>

          <h4>🔮 Tendências do Mercado: O Que Esperar?</h4>
          <p>Nos últimos anos, os notebooks evoluíram muito. Hoje já existem modelos gamers e estações de trabalho portáteis (workstations) com desempenho próximo ao dos desktops.</p>

          <p>No entanto, o desktop continua sendo a melhor escolha para quem trabalha com tarefas que exigem resfriamento eficiente, placas de vídeo avançadas e múltiplos monitores.</p>

          <p>Além disso, a chegada de tecnologias como o armazenamento em nuvem e o acesso remoto ajuda a equilibrar as vantagens dos dois mundos.</p>

          <p>Uma solução interessante para muitos usuários é ter:</p>

          <ul>
            <li>Um notebook básico para mobilidade, estudos, reuniões ou tarefas leves.</li>
            <li>Um desktop potente em casa ou no escritório, para jogos, trabalho criativo ou tarefas pesadas.</li>
          </ul>

          <p>Hoje, com serviços como Google Drive, OneDrive e Dropbox, manter os dois dispositivos sincronizados ficou muito mais fácil. Você pode começar um projeto no notebook e continuar no desktop sem complicações.</p>

          <h4>✅ Conclusão</h4>
          <p>Tanto o notebook quanto o desktop têm seu espaço — tudo depende de como, onde e para quê você usa o computador.</p>

          <p>Antes de decidir, pense nas suas necessidades reais:</p>

          <ul>
            <li>Vai se deslocar com frequência?</li>
            <li>Precisa de muito desempenho gráfico?</li>
            <li>Tem espaço para um computador fixo?</li>
            <li>Pretende usar por vários anos e fazer upgrades?</li>
          </ul>

          <p>Responder essas perguntas vai ajudar você a fazer uma escolha inteligente — e evitar arrependimentos.</p>
        `,
        "subtitle": "E você? Já decidiu qual é o seu setup ideal?",
        "date": "02/06/2025 18:15:42",
        "url": "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg",
        "type": "Artigo"
      }

    ]
    this.news.reverse();
  }

  getNews():BlogItem[]{
    return this.news;
  }

  getNewsById(id: number): BlogItem {
    const item = this.news.find(item => item.id == id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }
    return item;
  }
}
