import { Component } from '@angular/core';
import { ServiceComponent } from '../../components/service/service.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    ServiceComponent
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {

}
