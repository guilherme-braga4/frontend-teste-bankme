import { Component, OnInit } from '@angular/core';
import { ApiService } from '../login/auth.service'
import { Cadastro } from '../login/user'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cadastro: Cadastro = new Cadastro();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUsers()
  }

  users: Array<any> = [];

  getUsers () {
    this.apiService.getUsers().subscribe(data => this.users = data)
  }


}
