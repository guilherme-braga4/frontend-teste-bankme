import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
import { Usuario } from './user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario(); 

  handleSubmit() {
    console.log("eii!!", this.usuario)
    this.mensagemBoolean = true
  }

  mensagemBoolean: boolean = false
  mensagem: string = "  Login efetuado com Sucesso. Seja bem vindo, Bankmer!  "

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
