import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  filteredCategory: string = 'all';
  filteredProjects: Project[] = [];
  projects: Project[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private projectService: ProjectService
  ){}

  ngOnInit(): void {
    this.projects= this.projectService.getProjects();
    this.filterProjects('all');
  }

  filterProjects(category: string) {
    this.filteredCategory = category;

    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  sanitizeImageURL(imageURL: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageURL);
  }

  togglePortfolioDetails(project: any) {
    this.router.navigate(['/portfolio', project.id])
  }

}
