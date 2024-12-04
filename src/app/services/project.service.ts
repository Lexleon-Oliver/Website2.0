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
        title: 'cineflix',
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
