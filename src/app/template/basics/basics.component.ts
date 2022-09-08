import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm;

  initForm ={
    producto:'',
    precio: 0,
    exitencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }
  precioValido(){
    return this.miFormulario?.controls['precio']?.touched &&
    this.miFormulario?.controls['precio']?.value <= 0
  }
  save(){
    console.log('posteado');
    this.miFormulario.resetForm({
      precio: 0,
      existencias:0
    });
  }
}
