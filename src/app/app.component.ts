import { map, startWith, switchMap, catchError } from 'rxjs/internal/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { UserTo } from './models/UserTo';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private users: UserTo[];

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    }, err => {
      this.snackBar.open("Ups! There is connection problem with Backend api!", "", {
        duration: 20000,
      });
    })
  }
}

