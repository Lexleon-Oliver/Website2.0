import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { SocialMediaItem } from '../../models/social-midia-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  user:any ={};
  socialMedias: SocialMediaItem[]=[
    {id:"instagram", class:"bi bi-instagram", link:"https://www.instagram.com/lexleonoliver/"},
    {id:"linkedin", class:"bi bi-linkedin", link:"https://www.linkedin.com/in/lexoliveira/"},
    {id:"github", class:"bi bi-github", link:"https://github.com/Lexleon-Oliver"}
  ]

  constructor(
    public navbarService: NavbarService
  ){
    this.user.brand = "LexDev";
    this.user.carrer = "tecnologia da informação";
  }

  selectMenu(id: string) {
    this.navbarService.setSelectedMenuItemId(id);
  }
}
