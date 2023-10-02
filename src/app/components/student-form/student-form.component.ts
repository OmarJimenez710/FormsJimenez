import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from '../../services/alert-service.service'  

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  studentForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    public alertService : AlertServiceService
  ){
    this.studentForm = this.formBuilder.group({
      name : ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]],
      lastName : ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]],
      email : ['', [
        Validators.required,
        Validators.email
      ]],
      phone : ['', [
        Validators.required,
      ]],
      gender : ['', ],
      civilStatus : [''],
      age : ['', [
        Validators.required,
        Validators.maxLength(2),
      ]]
    })
  }

  get controlName(){
    return this.studentForm.controls['name'];
  }

  get validateName(){
    return this.controlName.invalid && this.controlName.touched;
  }

  get controlLastName(){
    return this.studentForm.controls['lastName'];
  }

  get validateLastName(){
    return this.controlLastName.invalid && this.controlLastName.touched;
  }

  get controlEmail(){
    return this.studentForm.controls['email'];
  }

  get validateEmail(){
    return this.controlEmail.invalid && this.controlEmail.touched;
  }

  get controlPhone(){
    return this.studentForm.controls['phone'];
  }

  get validatePhone(){
    return this.controlPhone.invalid && this.controlPhone.touched;
  }

  get controlAge(){
    return this.studentForm.controls['age'];
  }

  get validateAge(){
    return this.controlAge.invalid && this.controlAge.touched;
  }

  getFormValue(){
    return this.studentForm.value;
  }

  sendStudentData() : void {
    if(this.studentForm.valid){
      this.alertService.successAlert(
        this.getFormValue().name,
        this.getFormValue().lastName,
        this.getFormValue().email,
        this.getFormValue().phone,
        this.getFormValue().age
      );
    }else{
      this.alertService.errorAlert();
    }    
  }
}
