import { Component } from '@angular/core';
import { ResumeComponent } from '../../components/resume/resume.component';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [
    ResumeComponent
  ],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss'
})
export class ResumePageComponent {

}
