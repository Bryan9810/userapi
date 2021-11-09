import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

  user: any = '';

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) {

    //obtiene parametro de la url
    this.activatedRoute.params.subscribe(
      params => {
        this.getUser(params['id']);
      })
  }

  ngOnInit(): void {

  }
  
  getUser(id: any) {
    this.userService.getUser(id).subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
