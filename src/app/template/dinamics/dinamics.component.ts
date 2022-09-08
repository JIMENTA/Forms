import { Component} from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[]
}
interface Favorito {
  id:number;
  nombre: string
}


@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  persona : Persona ={
    nombre:'Menta',
    favoritos:[
      {id:0, nombre:'TEG'},
      {id:1, nombre:'Ajedrez'},
      {id:2, nombre:'Scrabble'},

    ]
  }

  save(){
    console.log('work')
  }

}
