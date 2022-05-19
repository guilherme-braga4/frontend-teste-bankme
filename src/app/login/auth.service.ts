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
    if (cadastro.nome == undefined || cadastro.email == undefined || cadastro.telefone == undefined || cadastro.senha == undefined) {
      alert("Ops, algo deu errado durante o cadastro")
    }
    else { 
      alert("Cadastro Efetuado com Sucesso")
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
  
  getUsers() {
    return this.http.get<any[]>(`${this.api}`)
  }

  createUsers(cadastro: Cadastro)  {
    return this.http.post(this.api, cadastro)
  }

  deleteUsers(id: string) {
    return this.http.delete(`${this.api}/${id}`)
  }

  // updateUsers(cadastro: Cadastro)  {
  //   return this.http.put(this.api, cadastro)
  // }

}
