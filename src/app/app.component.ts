import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserTo } from './models/UserTo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users: UserTo[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    }, err => {

    })
  }

}

