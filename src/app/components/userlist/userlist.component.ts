import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  
  users: any[] = [];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // Llamar Usuarios
  getUsers() {
    this.userService.getUsers()
      .subscribe((resp: any) => {
        this.users = resp;
        console.log(this.users);
      })
  }

  getUser(id:number) {
    this.router.navigate(['/view', id]);
  }



}
