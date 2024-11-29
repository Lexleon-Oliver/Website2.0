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
      professionalField : "tecnologia da informação",
      email: "lexleonmg@gmail.com",
      number:"+55 32 99131-5140",
      socialMedias: [
        {id:"instagram", class:"bi bi-instagram", link:"https://www.instagram.com/lexleonoliver/"},
        {id:"linkedin", class:"bi bi-linkedin", link:"https://www.linkedin.com/in/lexoliveira/"},
        {id:"github", class:"bi bi-github", link:"https://github.com/Lexleon-Oliver"}
      ]
    }
  }

  getUser():User{
    return this.user;
  }
}
