import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }



  cantBeStrider(control: FormControl) {
    const value : string = control.value.trim().toLowerCase();
    if(value==='strider') {
      return {
        noStrider: true
      }
    }
    return null;
  }

  isValidField( form : FormGroup, field: string) {
    return form.controls[field].errors
      && form.controls[field].touched
  }

  isField1EqualsField2(field1 : string, field2: string) {

    return (formGroup: AbstractControl) => {

      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      if( field1Value !== field2Value ){
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(field2)?.setErrors(null);
      return null;


    }

  }

}
