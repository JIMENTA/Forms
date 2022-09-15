import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // miFormulario : FormGroup = new FormGroup ({
  //   nombre : new FormControl('cualquier nombre'),
  //   precio : new FormControl(1000),
  //   existencias : new FormControl(5),
  // })

  miFormulario : FormGroup = this.fb.group({
    name :[,   [Validators.required, Validators.minLength(3)]],
    price :[,  [Validators.required, Validators.min(0)]],
    stock :[, [Validators.required, Validators.min(0)]]
  })
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

//     this.miFormulario.reset({
// //puedo asignarle valores para empezar
//     })
  }

  invalidField( field : string){
    return this.miFormulario.controls[field].errors 
    && this.miFormulario.controls[field].touched
  }

  save(){
    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    this.miFormulario.reset()
  }

}
