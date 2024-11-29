import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SocialMediaItem } from '../../models/social-midia-item';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  loading:boolean = false;
  successMessage!:string;
  errorMessage!:string;

  user!:User;
  socialMedias!: SocialMediaItem[];

  constructor(private userService: UserService,
    private http: HttpClient
  ){
    this.user= userService.getUser();
    this.socialMedias = this.user.socialMedias;
  }

  onSubmit() {
    this.loading = true;

    this.http.post('/forms/contact.php', this.formData)
      .subscribe({
        next: () => {
          console.log("this.successMessage: ", this.successMessage);
          console.log("errorMessage: ", this.errorMessage);

          this.loading = false;
          this.successMessage = 'Sua mensagem foi enviada. Obrigado!';
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
          console.log("this.successMessage: ", this.successMessage);
          console.log("errorMessage: ", this.errorMessage);
        }
      });
  }
}
