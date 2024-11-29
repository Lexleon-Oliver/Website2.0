import { Component } from '@angular/core';
import { ServiceItem } from '../../models/service-item';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  serviceList:ServiceItem[]=[
    {
      id:1,
      title:'Correção de erros críticos.',
      description:'Experimentando a temida Tela Azul da Morte (BSOD) no seu sistema Windows? Não se preocupe, estou aqui para ajudar! Soluções rápidas e eficazes para resolver problemas críticos no seu sistema operacional. Experiência em diagnosticar e corrigir as causas subjacentes, restaurando a estabilidade do seu computador.',
      slogan:'Recupere o controle e evite interrupções indesejadas!',
      url:'https://media.istockphoto.com/id/1328389388/pt/vetorial/blue-screen.jpg?s=612x612&w=0&k=20&c=JcU532zAu5zS9Cm6Mjysqyw6JWs7v_PKWguOO9PpJCg='
    },
    {
      id:2,
      title:'Formatação especializada do sistema.',
      description:'Dê ao seu computador uma nova vida com um serviço de formatação profissional! Seja para melhorar o desempenho, remover vírus persistentes ou simplesmente começar do zero. Garantia da preservação dos seus dados importantes enquanto é realizada uma instalação limpa e otimizada do sistema operacional.',
      slogan:'Desfrute de um computador mais rápido, eficiente e livre de problemas!',
      url:'https://olhardigital.com.br/wp-content/uploads/2020/11/20201125124729.jpg'
    },
    {
      id:3,
      title:'Instalação de programas sem complicação.',
      description:'Simplifique sua vida digital na instalação de programas! De softwares essenciais a aplicativos personalizados, instalação rápida e sem complicações. Elimine a preocupação de configurações complexas e compatibilidade, com a certeza que cada programa seja configurado corretamente e entregue pronto para uso. A eficiência de ter as ferramentas certas ao seu alcance sem o incômodo da instalação.',
      slogan:'Transforme seu dispositivo com os programas de que você precisa, sem stress!',
      url:'https://solution-sp.com.br/images//servicos/capa-instalacao-de-programas.jpg'
    },
    {
      id:4,
      title:'Limpeza interna para uma melhor refrigeração.',
      description:'Revitalize o saúde do seu computador com uma limpeza interna especializada! Livre-se do acúmulo de poeira e resíduos, garantindo um desempenho mais fresco e eficiente. Seu computador merece uma limpeza minuciosa, protegendo componentes essenciais e prolongando a vida útil do seu dispositivo. Tenha um computador mais eficiente e com desempenho máximo.',
      slogan:'Tenha um computador mais silencioso, mais frio e pronto para enfrentar qualquer desafio!',
      url:'https://folhago.com.br/blogs/news-cotidiano/wp-content/webp-express/webp-images/uploads/2022/03/Design-sem-nome-2022-03-26T121419.742.jpg.webp'
    },
    {
      id:5,
      title:'Desenvolvimento web.',
      description:'Ao mergulhar nas últimas tendências e tecnologias, estou preparado para construir plataformas que não apenas impressionam visualmente, mas também oferecem uma experiência de usuário excepcional. Seja um site corporativo, uma loja virtual ou uma plataforma interativa, estou aqui para traduzir sua visão em linhas de código que realmente ganham vida. Meu compromisso não se limita apenas à construção do site, mas também a assegurar que ele seja escalável, seguro e otimizado para um desempenho excepcional. Estou pronto para colaborar, criar e elevar a presença digital do seu negócio. Vamos começar a transformar suas ideias em uma presença online marcante!',
      slogan:'Torne sua visão em uma presença digital impressionante e eficiente!',
      url:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudCUyQyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNjk5NjE0MDgwfDA&ixlib=rb-4.0.3'
    },
    {
      id:6,
      title:'Programação de software.',
      description:'Criação de soluções robustas e eficientes, desde aplicativos simples até sistemas complexos. Utilizo as mais recentes tecnologias e melhores práticas de desenvolvimento para garantir que cada linha de código contribua para a funcionalidade, segurança e desempenho excepcional do seu software. Além de construir software, estou focado em entender as metas e visões específicas dos clientes. Minha missão é traduzir essas aspirações em soluções tangíveis, incorporando feedback contínuo para garantir que o resultado final atenda ou supere as expectativas.',
      slogan:'Soluções robustas que tornam suas ideias realidade, com desempenho e segurança excepcionais!',
      url:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxjb21wdXRlcnMlMkMlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTY5OTY0OTYzNnww&ixlib=rb-4.0.3'
    },

  ]
}
