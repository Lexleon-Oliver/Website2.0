import { Component } from '@angular/core';
import { ServiceItem } from '../../models/service-item';
import { ActivatedRoute } from '@angular/router';
import { AvailiableServicesService } from '../../services/availiable-services.service';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {

  selectedService!: ServiceItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesService: AvailiableServicesService,

  ){

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.selectedService = servicesService.getServiceById(id);

    });
  }
}
