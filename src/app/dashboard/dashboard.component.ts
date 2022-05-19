import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import IMask from 'imask';

import { ApiService } from '../login/auth.service'
import { Cadastro } from '../login/user'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  users: Array<any> = [];

  //Table Configs
  @ViewChild(MatTable) 
  //variável que permite Re-Renderizar após alguma alteração
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'telefone', 'actions'];
  
  public bankMer: Cadastro = new Cadastro();

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getBankMers()
  }


  getBankMers () {
    this.apiService.getUsers().subscribe(data => this.users = data)
    console.log("users", this.users)
  }

  deleteBankMer (id: string) {
    console.log("dentro do deleteBankMer")
    this.apiService.deleteUsers(id).subscribe(result => {
    setTimeout(() => {window.location.reload()}, 100)
    })
  }

  signUpDashboard () {
    if (this.bankMer.name !== undefined && this.bankMer.email !== undefined && this.bankMer.telefone !== undefined) {
    console.log("dentro do createBankMer")
    this.apiService.createUsers(this.bankMer)
    .subscribe
  (
      sucess => {console.log("Usuário criado " + sucess)},
      error => {console.log("Algo deu errado " + error)},
    )
    setTimeout(() => {window.location.reload()}, 500)
  }
  else {
    alert("Preencha Corretamente os Campos de Cadastro")
  }
  }

  handleExit() {
    this.router.navigate([''])
  }
  
  //--------->>> masks
  phoneMask = { mask: "(00)000000000" };
  emailMask = {
    mask: /^\S*@?\S*$/
  };
  //--------->>> masks

}
