import { Component, OnInit } from '@angular/core';
import { AuthService, ApiService } from './auth.service'
import { Usuario, Cadastro } from './user'
import IMask from 'imask';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario(); 
  public cadastro: Cadastro = new Cadastro(); 

  //Login
  handleSubmit() {
    console.log("dentro do handleSubmit", this.usuario)
    // this.mensagemBoolean = true
    this.authService.loginVerify(this.usuario)
    //localStorage
    localStorage.setItem('sessão Login', JSON.stringify(this.usuario.email))
  }

  //Cadastro
  handleSignUp() {
    console.log("dentro do handleSignUp")
    if (this.cadastro.name !== undefined && this.cadastro.email !== undefined && this.cadastro.telefone !== undefined && this.cadastro.senha !== undefined) {
    this.authService.signUpVerify(this.cadastro)
    this.apiService.createUsers(this.cadastro)
    .subscribe
  (
      sucess => {console.log("Usuário criado " + sucess)},
      error => {console.log("Algo deu errado " + error)},
      () => {console.log("aaaa")}
    )
    //cadastrar = false ----> Mudar para a o Form de Login após efetuar o Cadastro
    this.cadastrar = false
    //localStorage
    localStorage.setItem('sessão Cadastro', JSON.stringify(this.cadastro.name))
    }
    else {
      alert("Preencha Corretamente os Campos de Cadastro")
    }
  }

  showLoginForm() {
    this.cadastrar = false
  }

  showSignUpForm() {
    this.cadastrar = true
  }

  cadastrar: boolean = false

  mensagemBoolean: boolean = false
  mensagem: string = "  Login efetuado com Sucesso. Seja bem vindo, Bankmer!  "


  constructor(private authService: AuthService, private apiService: ApiService ) {

   }

  //Executa a chamada pra API quando estiver tudo pronto, automaticamente
  ngOnInit() {
    this.getUsers()
  }

  users: Array<any> = [];

  getUsers () {
    this.apiService.getUsers().subscribe(data => this.users = data)
  }

  //--------->>> masks
  phoneMask = { mask: "(00)000000000" };
  emailMask = {
    mask: /^\S*@?\S*$/
  };
  //--------->>> masks

}
