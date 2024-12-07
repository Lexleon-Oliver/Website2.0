import { ActivatedRoute } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PortfolioItemComponent{

  selectedProject!:Project|undefined;
  constructor(
    private projectService:ProjectService,
    private activeRoute: ActivatedRoute
  ){
    this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      this.selectedProject = projectService.getProjectById(id);

    });
  }

}

