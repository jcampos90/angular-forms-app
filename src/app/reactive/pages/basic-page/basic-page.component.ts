import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'],
})
export class BasicPageComponent implements OnInit {

  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ],[]],
    price: [0, [ Validators.min(0)],[]],
    inStorage: [0, [ Validators.min(0) ],[]],
  });

  constructor(private fb: FormBuilder ) {}
  
  ngOnInit(): void {
    this.myForm.reset({
      name: 'Test',
      price: 100,
      inStorage: 10
    })
  }

  isInvalidField( field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched
  }

  getFieldError (field : string) {
    if(  !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (let key of Object.keys(errors)) {
      
      switch(key) {
        case 'required':
          return "Campo requerido"
        case 'minlength' :
          return `Minimo ${errors['minlength'].requiredLength } caracteres`
      }
      
    }

    return null;
  }

  onSave() {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({
      price:0,
      inStorage:0
    })
    
  }

}
