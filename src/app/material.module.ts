import { NgModule } from '@angular/core';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatDialogModule, MatIconModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatDatepickerModule, MatDividerModule } from '@angular/material';
@NgModule({
    imports: [MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatDividerModule],
    exports: [MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatDividerModule],
})
export class MaterialModule { }