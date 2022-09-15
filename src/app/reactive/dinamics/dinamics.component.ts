import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    name :['',[Validators.required, Validators.minLength(3)]],
    favorites : this.fb.array([
      ['TEG'],['Ajedrez'] // arreglo de formscontrols
    ], Validators.required)
  })

  newFavorite : FormControl = this.fb.control('',Validators.required)

  get favoritesArr(){
    return this.miFormulario.get('favorites') as FormArray;
  }
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  invalidField( field : string){
    return this.miFormulario.controls[field].errors 
    && this.miFormulario.controls[field].touched
  }

  addFavorite(){
    if(this.miFormulario.invalid){return}

    this.favoritesArr.push( new FormControl(this.newFavorite.value, Validators.required)); //this.fb.control es igual que new FormControl

    this.newFavorite.reset()
  }
  save(){
    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
  }
  
  delete(i : number){
    this.favoritesArr.removeAt(i)
  }

}
