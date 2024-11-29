import { Injectable } from '@angular/core';
import { RequestResponse } from '../models/request-response';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private isLoading: boolean = false;
  sucessoAlert:{
    mensagem:string,
    exibir:boolean
  }={
    mensagem: '',
    exibir:false
  }

  errorAlert:{
    exibir:boolean
    erro:string,
    mensagem:string,
    status:number
  }={
    exibir:false,
    erro:'',
    mensagem:'',
    status:0
  }

  constructor() { }

  showLoading() {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }

  getIsLoading():boolean{
    return this.isLoading;
  }

  trataSucesso(response: RequestResponse){
    this.hideLoading()
    this.sucessoAlert.exibir = true;
    this.sucessoAlert.mensagem= response.success;
  }

  trataErro(erro:any){
    let messageText=  erro.message || erro.error?.message || 'o backend não está respondendo. Contate o suporte!';
    let errorText= erro.statusText || erro.headers?.name || 'Erro na solicitação';
    this.hideLoading()
    this.errorAlert.exibir = true;
    this.errorAlert.erro = errorText;
    this.errorAlert.mensagem = messageText;
    this.errorAlert.status = erro.status ? erro.status : 'Status desconhecido';
  }
}
