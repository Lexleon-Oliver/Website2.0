import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SocialMediaItem } from '../../models/social-midia-item';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { RequestService } from '../../services/request.service';
import { RequestResponse } from '../../models/request-response';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    SuccessAlertComponent,
    ErrorAlertComponent
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

  user!:User;
  socialMedias!: SocialMediaItem[];

  constructor(private userService: UserService,
    private http: HttpClient,
    private location:Location,
    public requestService: RequestService
  ){
    this.user= userService.getUser();
    this.socialMedias = this.user.socialMedias;
  }

  submitForm() {
    this.requestService.showLoading();

    this.http.post<RequestResponse>('/forms/contact.php', this.formData)
      .subscribe({
        next:  (response) => {
          this.requestService.trataSucesso(response)
          setTimeout(() => {
            this.onCancel();
          }, 3000);
        },
        error: (error) => {
          this.requestService.trataErro(error)
        }
      });
  }

  onCancel(){
    this.location.back();
  }

  resetForm(){
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
