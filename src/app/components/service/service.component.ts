import { AvailiableServicesService } from './../../services/availiable-services.service';
import { Component } from '@angular/core';
import { ServiceItem } from '../../models/service-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {


  serviceList!:ServiceItem[];
  constructor(
    private availiableServicesService: AvailiableServicesService,
    private router: Router
  ){
      this.serviceList = availiableServicesService.getServices();
  }

  detailService(service:ServiceItem) {
    this.router.navigate(['/services', service.id])
  }

}
