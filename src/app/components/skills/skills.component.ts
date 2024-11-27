import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  colunas: any[][] = [
    [
      { icone: 'fa-brands fa-java fa-custom', cor: '#c01c28' },
      { logo: 'img/springlogo.png', customClass: 'logo-custom logo-circular' },
      { icone: 'fa-brands fa-docker fa-custom', cor: '#3584e4' },
      { icone: 'fa-brands fa-linux fa-custom', cor: '#ffffff' }
    ],
    [
      { icone: 'fa-brands fa-html5 fa-custom', cor: '#c64600' },
      { icone: 'fa-brands fa-css3-alt fa-custom', cor: '#1c71d8' },
      { icone: 'fa-brands fa-js fa-custom', cor: '#f6d32d' },
      { icone: 'fa-brands fa-angular fa-custom', cor: '#ed333b' }
    ],
    [
      { logo: 'img/restapilogo.png', customClass: 'logo-custom'},
      { icone: 'fa-brands fa-git-alt fa-custom', cor: '#e66100' },
      { icone: 'fa-brands fa-github fa-custom', cor: '#ffffff' },
      { logo: 'img/typescriptlogo.png', customClass: 'logo-custom' },
      { logo: 'img/windowslogo.png', customClass: 'logo-custom' }
    ],
    [
      { icone: 'fa-brands fa-bootstrap fa-custom', cor: '#9141ac' },
      { logo: 'img/postgreslogo.png', customClass: 'logo-custom' },
      { logo: 'img/sqllogo.png', customClass: 'logo-custom' },
      { logo: 'img/micrologo.png', customClass: 'logo-custom' },
      { logo: 'img/msql.png', customClass: 'logo-custom' }
    ]
  ];
}
