import { Injectable, OnInit } from '@angular/core';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService{
  private projects!: Project[];

  constructor() {
    this.projects= [
      {
        id:1,
        title: 'Cineflix',
        category: 'web',
        images: [
          'img/cineflixfilmes.png',
          'img/cineflixfilmescategorias.png',
          'img/cineflixfilmeselecionado.png',
          'img/cineflixlogin.png',
          'img/cineflixmodalfilme.png',
          'img/cineflixseries.png',
          'img/cineflixserieselecionada.png',
          'img/cineflixusers.png',
        ],
        description:"Este projeto é uma aplicação web desenvolvida em Angular, executada dentro de um contêiner Docker, "+
        "que funciona como um catálogo digital de filmes e séries. A plataforma é alimentada por uma API que armazena previamente os "+
        "filmes e séries cadastrados. A inspiração para o projeto surgiu quando comecei a estudar o desenvolvimento "+
        "frontend e criei um clone da interface do Netflix utilizando HTML e CSS. Como considero o frontend a parte mais desafiadora "+
        "do projeto e ele já estava criado, desenvolvi a API para gerenciar os dados dos filmes e séries. Em seguida, o código foi "+
        "adaptado para utilizar o framework Angular, tornando a interface mais dinâmica e interativa. O objetivo principal da "+
        "aplicação é proporcionar aos usuários uma experiência agradável e intuitiva ao navegar pelo catálogo de filmes e séries "+
        "para assistir. O uso de contêiner Docker facilita a implantação e o gerenciamento da aplicação em diferentes ambientes "+
        "de execução, garantindo sua portabilidade e escalabilidade.",
        url:"https://github.com/Lexleon-Oliver/CineflixApp"

      },
      {
        id:2,
        title: 'Cineflix API',
        category: 'api',
        images: [
          'img/Cineapi01.png',
          'img/Cineapi02.png',
          'img/Cineapi03.png',
          'img/Cineapi04.png',

        ],
        description:"A API do Catálogo Digital de Filmes e Séries é um programa desenvolvido em Java utilizando o "+
        "framework Spring Boot e gerenciado com o Maven. Essa API tem como objetivo servir como backend para o catálogo digital de "+
        "filmes e séries, o qual é alimentado por um frontend desenvolvido em Angular e executado em um container Docker. "+
        "A ideia para o desenvolvimento desse projeto surgiu quando iniciei meus estudos em frontend e criei um clone do "+
        "Netflix utilizando HTML e CSS. Com o modelo frontend pronto, que considero a parte mais desafiadora, a atenção se "+
        "voltou para a criação dessa API em Java utilizando Spring Boot. Posteriormente, a API foi adaptada e integrada ao frontend "+
        "Angular, proporcionando uma experiência completa e interativa para os usuários do catálogo digital..",
        url:"https://github.com/Lexleon-Oliver/CineflixApi"

      },
      {
        id:3,
        title: 'Clone Instagram',
        category: 'web',
        images: [
          'img/cloneinsta.png',
        ],
        description:"Este projeto foi desenvolvido como parte do Bootcamp HTML Web Developer oferecido pela Digital Innovation One. "+
        "O desafio era recriar a página de login do Instagram usando HTML e CSS. O objetivo principal foi praticar habilidades em HTML e CSS, bem "+
        "como demonstrar a capacidade de recriar uma página da web conhecida e amplamente utilizada.",
        url:"https://github.com/Lexleon-Oliver/ProjetoPaginaLoginInstagram"

      },
      {
        id:4,
        title: 'Gaiia app',
        category: 'web',
        images: [
          'img/gaiiaapp.png',
          'img/gaiiaapp02.png',
          'img/gaiiaapp03.png',
          'img/gaiiaapp04.png',
          'img/gaiiaapp05.png',
          'img/gaiiaapp06.png',
        ],
        description:"Este projeto é uma iniciativa que marca o meu primeiro passo no desenvolvimento utilizando as tecnologias Angular e Docker. "+
        "Com foco no gerenciamento de projetos e alunos de uma ONG, o Gaiia App tem como objetivo proporcionar uma plataforma intuitiva, simples e eficiente "+
        "para facilitar a administração das atividades da organização. O desafio inicial deste projeto envolve a exploração e integração dos componentes fornecidos "+
        "pelo Angular Material. Essa biblioteca de componentes prontos para uso fornecida pelo Angular oferece uma ampla gama de elementos de interface de usuário, "+
        "como botões, tabelas, caixas de diálogo, entre outros. No cerne do projeto, encontra-se a vontade de aprender, crescer e fazer a diferença na vida das pessoas."+
        "A cada desafio superado, aumenta a confiança necessária para o domínio total das tecnologias usadas.",
        url:"https://github.com/Lexleon-Oliver/GaiiaApp"

      },
      {
        id:5,
        title: 'Gaiia api',
        category: 'api',
        images: [
          'img/GaiiaApi.png',
          'img/GaiiaApi02.png',
          'img/GaiiaApi03.png',
          'img/GaiiaApi04.png',
          'img/GaiiaApi05.png',
          'img/GaiiaApi06.png',
        ],
        description:"Este projeto é a api responsavel por alimentar o Gaiia app. "+
        "Com foco no gerenciamento de projetos e alunos de uma ONG, o Gaiia Api permite cadastrar alunos, projetos, contatos, parentes, cadastrar alunos em projetos "+
        "para facilitar a administração das atividades da organização. O desafio inicial deste projeto envolve a exploração e integração dos componentes fornecidos. ",
        url:"https://github.com/Lexleon-Oliver/GaiiaApi"

      },
      {
        id:6,
        title: 'Purodoce',
        category: 'desktop',
        images: [
          'img/purodoce.png',
          'img/purodoce02.png',
          'img/purodoce03.png',
          'img/purodoce04.png',
        ],
        description:"Programa desktop de gerenciamento de venda de bolos desenvolvido durante a pandemia para um casal de amigos empreendedores. "+
        "O programa foi criado para auxiliar o casal a complementar sua renda financeira por meio da venda de bolos caseiros, proporcionando uma ferramenta prática "+
        "e eficiente para administrar o pequeno negócio de forma organizada e sustentável.",
        url:"https://github.com/Lexleon-Oliver/ProjetoPuroDoce"

      },
      {
        id:7,
        title: 'Desafio Viceri - api de TODO',
        category: 'api',
        images: [
          'img/apiviceri.png',
          'img/apiviceri02.png',
          'img/apiviceri03.png',
          'img/apiviceri04.png',
        ],
        description:"API REST de um aplicativo para gerenciamento de tarefas desenvolvido para resolução do desafio técnico de programação proposto pelo processo seletivo Dev Java Júnior Viceri",
        url:"https://github.com/Lexleon-Oliver/DesafioViceri"

      },
      {
        id:8,
        title: 'Famoso jogo da Cobrinha',
        category: 'web',
        images: [
          'img/snakegame.png',
          'img/snakegame0.png',
          'img/snakegame01.png',
          'img/snakegame02.png',
        ],
        description:'Este projeto foi desenvolvido como parte do Bootcamp HTML Web Developer oferecido pela Digital Innovation One. Durante o desafio, tivemos a oportunidade de recriar o clássico '+
        '"Jogo da Cobrinha", utilizando as tecnologias fundamentais da web: HTML, CSS e JavaScript. O objetivo do jogo é guiar a cobrinha através do cenário, controlando-a com as setas do teclado, para que ela '+
        "possa se alimentar e crescer. Cada vez que a cobra se alimenta, ela fica mais longa. No entanto, é preciso ter cuidado para evitar colisões com o próprio corpo da cobra, o que resulta em game over. Principais "+
        "características do projeto:            Utilização de HTML para a estruturação do conteúdo do jogo. Estilização do jogo com CSS, proporcionando uma interface agradável e responsiva.             Implementação da "+
        "lógica do jogo com JavaScript, controlando o movimento da cobra, a detecção de colisões e o gerenciamento da pontuação.",
        url:"https://github.com/Lexleon-Oliver/JogoDaCobrinha"

      },
      {
        id:9,
        title: 'Programa de Gestao de TI',
        category: 'desktop',
        images: [
          'img/gestaoti.png',
          'img/gestaoti01.png',
          'img/gestaoti02.png',
          'img/gestaoti03.png',
          'img/gestaoti04.png',
          'img/gestaoti05.png',
          'img/gestaoti06.png',
          'img/gestaoti07.png',
          'img/gestaoti08.png',
        ],
        description:"Meu primeiro projeto de desenvolvimento foi criado durante meus estudos iniciais em Java, enquanto cursava a graduação. O objetivo do projeto era auxiliar no gerenciamento de ativos de "+
          "informática durante o período em que trabalhei no setor de TI da prefeitura de Carandaí. Inicialmente, desenvolvi um programa desktop utilizando Java e PostgreSql, utilizando a biblioteca Swing para a construção "+
          "das interfaces gráficas e implementando manualmente os logs. Com o avanço dos estudos, explorei o desenvolvimento de API's e criei uma API conectada ao banco de dados, que posteriormente foi implantada no Heroku. "+
          "Isso permitiu que as interfaces gráficas apenas alimentassem e interpretassem os dados da API, tornando o sistema mais flexível e escalável. O projeto representou uma importante etapa no meu aprendizado e crescimento "+
          "como desenvolvedor, proporcionando uma experiência valiosa no desenvolvimento de aplicações e no uso de tecnologias relevantes para o mercado atual.",
        url:"https://github.com/Lexleon-Oliver/GestaoTI-Prefeitura"

      },
    ]
  }

  getProjects():Project[]{
    return this.projects;
  }

  getProjectById(id: number): Project {
    const project = this.projects.find(project => project.id == id);
    if (!project) {
      throw new Error(`Project with id ${id} not found`);
    }
    return project;
  }
}
