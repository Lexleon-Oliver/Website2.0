import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private selectedMenuItemId: string = "home";
  private menuList:MenuItem[]=[
    {id:"home",text:"Início"},
    {id:"blog",text:"Blog"},
    {id:"about",text:"Sobre mim"},
    {id:"resume",text:"Currículo"},
    {id:"services",text:"Serviços"},
    {id:"portfolio",text:"Portfólio"},
    {id:"contact",text:"Contato"},
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
