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
