import { Component } from '@angular/core';
import { PortfolioItemComponent } from '../../components/portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio-item-page',
  standalone: true,
  imports: [
    PortfolioItemComponent
  ],
  templateUrl: './portfolio-item-page.component.html',
  styleUrl: './portfolio-item-page.component.scss'
})
export class PortfolioItemPageComponent {

}
