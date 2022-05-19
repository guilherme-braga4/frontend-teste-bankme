import { Injectable } from '@angular/core';
import { Usuario, Cadastro } from './user'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

//Classe de Routes
export class AuthService {

  constructor(private router: Router) { }

  // ------->>>> Verificação de Login e Cadastro
  private usuarioAutenticado: boolean = false

  //Verificar os dados do usuário através da Classe Usuario
  loginVerify (usuario: Usuario) {
    if (usuario.email == "bankme@bankme.com" && usuario.senha == "123") {
      this.usuarioAutenticado = true
      this.router.navigate(['/home'])
      alert("Login Efetuado com Sucesso!")
    }
    else { 
      this.usuarioAutenticado = false
      alert("Insira seus dados e clique em Login")
    }
  }

  signUpVerify (cadastro: Cadastro) {
    if (cadastro.nome != "" && cadastro.email != "" && cadastro.senha != "") {
      this.router.navigate([''])
      alert("Cadastro Efetuado")
    }
    else { 
      alert("Ops, algo deu errado durante o cadastro")
    }
  }
}

@Injectable({
  providedIn: 'root'
})
//Classe de API
export class ApiService {

  constructor(private http: HttpClient) { }

  //declare API adress 
  api = 'https://6285661ff0e8f0bb7c03659c.mockapi.io//users_bankme'
  
  //call API (GET)
  getUsers() {
    return this.http.get<any[]>(`${this.api}`)
  }

  //call API (POST)
  createUsers(cadastro: Cadastro)  {
    return this.http.post(this.api, cadastro)
  }

}
