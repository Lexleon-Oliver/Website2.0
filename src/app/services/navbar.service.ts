import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private selectedMenuItemId: string = "home";
  private menuList:MenuItem[]=[
    {id:"home",text:"Início"},
    {id:"about",text:"Sobre mim"},
  ]

  constructor() { }

  getMenuList():MenuItem[]{
    return this.menuList;
  }

  setSelectedMenuItemId(id:string){
    this.selectedMenuItemId = id;
  }

  getSelectedMenuItemId():string{
    return this.selectedMenuItemId;
  }
}
