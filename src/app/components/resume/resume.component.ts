import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  educacaoItems = [
    {
      titulo: 'Graduação em Análise e Desenvolvimento de Sistemas',
      periodo: 'Julho 2018 - Fevereiro 2021',
      instituicao: 'Unicesumar - Centro Universitário de Maringá'
    },
    {
      titulo: 'Técnico em Análise e Desenvolvimento de Sistemas',
      periodo: 'Julho 2008 - Julho 2010',
      instituicao: 'ESTEC- Escola Técnica da Saúde'
    }
  ];

  experienciaItems = [
    {
      cargo: 'Desenvolvedor Fullstack Júnior',
      periodo: 'Abril 2022 - Junho 2023',
      empresa: 'Adapter Soluções Digitais LTDA',
      responsabilidades: [
        'Correção de bugs.',
        'Desenvolvimento de integração com API’s externas em Java 8.',
        'Criação de CRUD com AngularJS e Java.',
        'Criação de tabelas e consulta de dados SQL.',
        'Versionamento de código com GIT.'
      ]
    },
    {
      cargo: 'Técnico em Informática',
      periodo: 'Outubro 2014 – Março 2022',
      empresa: 'Prefeitura Municipal de Carandaí',
      responsabilidades: [
        'Instalação, preparação, leitura e treinamento para uso de equipamentos e programas na área de informática.',
        'Manutenção e atualização de sistemas.',
        'Criação de backup.',
        'Atendimentos e suporte a usuários.'
      ]
    }
  ];

  cursos: any[][] = [
    [
      { titulo: 'Bootcamp Inter Java Developer', duracao: '95 horas', instituicao: 'DIO' },
      { titulo: 'Bootcamp Desenvolvedor Java Essencial', duracao: '37 horas', instituicao: 'DIO' },
      { titulo: 'Bootcamp HTML Web Developer', duracao: '27 horas', instituicao: 'DIO' },
      { titulo: 'Laboratório de Arquitetura e Redes de Computadores', duracao: '20 horas', instituicao: 'UNICESUMAR' },
      { titulo: 'Curso Segurança na Internet, Lei Geral de Proteção de Dados e Novas Tecnologias e o Impacto na Sociedade', duracao: '16 horas', instituicao: 'UNICESUMAR' }
    ],
    [
      { titulo: 'Bootcamp Aceleração Global Dev #10 GFT', duracao: '10 horas', instituicao: 'DIO' },
      { titulo: 'Curso Linux: Introdução ao sistema operacional', duracao: '10 horas', instituicao: 'DIO' },
      { titulo: 'Curso Estrutura de dados em Java', duracao: '10 horas', instituicao: 'DIO' },
      { titulo: 'Curso Desenvolvimento básico em Java', duracao: '9 horas', instituicao: 'DIO' },
      { titulo: 'Curso Conceitos e melhores praticas com bancos de dados PostgreSQL', duracao: '9 horas', instituicao: 'DIO' }
    ]
  ];

}
