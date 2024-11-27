import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarService } from './services/navbar.service';
import { AboutMeComponent } from './components/about-me/about-me.component';
import * as Aos from 'aos';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServiceComponent } from './components/service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ResumeComponent,
    ServiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{

  constructor(
    public navbarService: NavbarService
  ){}

  ngAfterViewInit() {
    Aos.init();
  }
}
