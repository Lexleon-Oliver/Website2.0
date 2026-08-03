import { Component } from '@angular/core';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';

@Component({
  selector: 'app-services-item-page',
  standalone: true,
  imports: [
    ServiceItemComponent
  ],
  templateUrl: './services-item-page.component.html',
  styleUrl: './services-item-page.component.scss'
})
export class ServicesItemPageComponent {

}
