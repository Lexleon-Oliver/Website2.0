import { Component } from '@angular/core';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    PortfolioComponent
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
