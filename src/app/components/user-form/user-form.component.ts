import { OnInit, Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserTo } from "../../models/UserTo";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'user-form.component',
    styleUrls: ['./user-form.component.css'],
    templateUrl: './user-form.component.html',
})
export class UserFormComponent {

    private userTo: UserTo;
    private myForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<UserFormComponent>,
        @Inject(MAT_DIALOG_DATA) data: any, private formBuilder: FormBuilder) {
        if (data) {
            this.userTo = data.userTo;
        } else {
            this.userTo = new UserTo();
            this.userTo.name = "";
            this.userTo.surname = "";
            this.userTo.birthYear = 1900;
            this.userTo.active = false;
        }
        this.initializeForm();
    }

    initializeForm() {
        this.myForm = null;
        this.myForm = this.formBuilder.group({
            name: [this.userTo.name, Validators.required],
            surname: [this.userTo.surname, Validators.required],
            birthYear: [this.userTo.birthYear, Validators.required],
            active: [this.userTo.active, Validators.required],
        });
    }

    getUserToFromForm() {
        this.userTo.name = this.myForm.controls.name.value;
        this.userTo.surname = this.myForm.controls.surname.value;
        this.userTo.birthYear = this.myForm.controls.birthYear.value;
        this.userTo.active = this.myForm.controls.active.value;
    }
    saveUser(): void {
        this.getUserToFromForm();
        this.dialogRef.close(this.userTo);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }


}