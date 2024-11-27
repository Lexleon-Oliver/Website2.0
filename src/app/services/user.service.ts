import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor() {
    this.user = {
      jobTitle : "Desenvolvedor fullstack",
      brand : "LexDev",
      professionalField : "tecnologia da informação"
    }
  }

  getUser():User{
    return this.user;
  }
}
