import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  user!:User;
  leftInfos = [
    { label: 'Nascimento', icon: 'bi-chevron-right', strong: '15 Setembro 1990' },
    { label: 'Website', icon: 'bi-chevron-right', strong: 'lexdev.ddns.net' },
    { label: 'Telefone', icon: 'bi-chevron-right', strong: '+55 (32) 99131-5140' },
    { label: 'Cidade', icon: 'bi-chevron-right', strong: 'Carandaí, MG' },
  ];
  rightInfos = [
    { label: 'Idade', icon: 'bi-chevron-right', strong: this.calcularIdade() },
    { label: 'Grau', icon: 'bi-chevron-right', strong: 'Graduação' },
    { label: 'E-mail', icon: 'bi-chevron-right', strong: 'lexleonmg@gmail.com' },
    { label: 'Freelance', icon: 'bi-chevron-right', strong: 'Disponível' },
  ];

  constructor(
    private userService: UserService
  ){
    this.user= userService.getUser();
  }

  calcularIdade():number{
    const dataNascimento = new Date('1990-09-15');
    const agora = new Date();
    const anoNascimento = dataNascimento.getFullYear();
    const anoAtual = agora.getFullYear();
    let idade = anoAtual - anoNascimento;

    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    const mesAtual = agora.getMonth();
    const diaAtual = agora.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    return idade;
}


}
