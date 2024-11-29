import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { SocialMediaItem } from '../../models/social-midia-item';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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

  menuMobileOpened:boolean = false;
  user!:User;
  socialMedias!: SocialMediaItem[];

  constructor(
    public navbarService: NavbarService,
    private userService: UserService,
    private router: Router
  ){
    this.user= userService.getUser();
    this.socialMedias=this.user.socialMedias;
  }

  selectMenu(id: string) {
    this.navbarService.setSelectedMenuItemId(id);
    if(this.menuMobileOpened){
      this.toggleMenuMobile()
    }
    this.router.navigate([id])
  }

  toggleMenuMobile() {
    this.menuMobileOpened = !this.menuMobileOpened;
  }
}
