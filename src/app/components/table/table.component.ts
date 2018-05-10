import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { UserTo } from "../../models/UserTo";
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog } from "@angular/material";
import { UserService } from "../../services/user.service";
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'table-component',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @Input() users: UserTo[];

  displayedColumns = ['action', 'name', 'surname', 'birthYear', 'active'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateDataSource();
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  updateDataSourceFromApi() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialogToAddUser(): void {
    let dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.userService.updateUser(result).subscribe(data => {
          this.updateDataSourceFromApi();
          this.snackBar.open(data.name + " " + data.surname + " saved successfuly!", "", {
            duration: 2000,
          });
        }, err => {
          this.snackBar.open("Problem with saving user", "", {
            duration: 2000,
          });
        });
      }
    });
  }

  openDialogToEditUser(userTo: UserTo): void {
    let dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      data: { userTo: userTo }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.userService.updateUser(result).subscribe(data => {
          this.snackBar.open(data.name + " " + data.surname + " saved successfuly!", "", {
            duration: 2000,
          });
        }, err => {
          this.snackBar.open("Problem with saving user", "", {
            duration: 2000,
          });
        });
      }
    });
  }

  delete(userTo: UserTo): void {
    this.userService.removeUser(userTo.id).subscribe(data => {
      this.users = this.users.filter(user => user.id != userTo.id);
      this.updateDataSource();
      this.snackBar.open(userTo.name + " " + userTo.surname + " removed successfuly!", "", {
        duration: 2000,
      });
    }, err => {
      this.snackBar.open("Problem with deleting position occured", "", {
        duration: 2000,
      });
    })

  }
}