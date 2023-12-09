import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  get favoriteGames() : FormArray<any> {
    return this.myForm.controls['favoriteGames'] as FormArray;
  }

  isInvalidField( field: string) {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched
  }

  isValidFieldInArray(formArray: FormArray, i: number) {
    return formArray.controls[i].errors 
    && formArray.controls[i].touched
  }


  constructor( private fb: FormBuilder) {}

  onSubmit () {

    if( this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
    (this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([])

  }

  onDeleteFavorite(i: number) {

    // usamos el getter
    this.favoriteGames.removeAt(i);

  }

  addToFavorites() {
    if(this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;
    this.favoriteGames.push(
      this.fb.control( newGame, Validators.required )
    );

    this.newFavorite.reset();
    
  }



}
