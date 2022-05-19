import { Component, OnInit } from '@angular/core';
import { ApiService } from '../login/auth.service'
import { Cadastro } from '../login/user'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //Table Columns
  displayedColumns: string[] = ['id', 'name', 'email', 'telefone', 'actions'];
  //------>>

  public bankMer: Cadastro = new Cadastro();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBankMers()
  }

  users: Array<any> = [];

  getBankMers () {
    this.apiService.getUsers().subscribe(data => this.users = data)
    console.log("users", this.users)
  }

  createBankMer () {
    console.log("dentro do createBankMer")
    this.apiService.createUsers(this.bankMer)
    .subscribe
  (
      sucess => {console.log("Usuário criado " + sucess)},
      error => {console.log("Algo deu errado " + error)},
      () => {console.log("aaaa")}
    )
  }

  // updateBankMer() {
  //   console.log("dentro do updateBankMer")
  // }

  deleteBankMer () {
    console.log("dentro do deleteBankMer")
    this.apiService.deleteUsers('1').subscribe
    (
        sucess => {console.log("Usuário Deletado " + sucess)},
        error => {console.log("Algo deu errado " + error)},
      )
  }

}
