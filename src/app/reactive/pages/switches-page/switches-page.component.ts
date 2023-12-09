import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent {

  public myForm : FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    terms : [false, Validators.requiredTrue]
  });

  public person: any = {};

  constructor( private fb: FormBuilder) {}

  isInvalidField( field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched
  }

  onSave() {
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }

    this.person = this.myForm.value;
    delete this.person.terms;
  }

}
