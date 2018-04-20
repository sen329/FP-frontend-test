import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { UserService } from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  get Username(){
    return localStorage.getItem('username')

  }
  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getComment(id);
  }

  logout(){
    this.authService.logout();
  }
}
