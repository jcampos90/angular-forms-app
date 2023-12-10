import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValitadorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern )]],
    email: ['', [Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ new EmailValitadorService() ]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [
      this.validatorsService.isField1EqualsField2('password', 'password2')
    ]
  });

  constructor( private fb: FormBuilder,
    private validatorsService: ValidatorsService) {}

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSave(){
    this.myForm.markAllAsTouched();
  }

}
