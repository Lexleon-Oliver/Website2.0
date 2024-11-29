import { Component } from '@angular/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    AboutMeComponent,
    SkillsComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
