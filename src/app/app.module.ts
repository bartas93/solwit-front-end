import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  providers: [UserRepository, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
