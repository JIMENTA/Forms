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

  newGame: string = '';

  persona : Persona ={
    nombre:'Menta',
    favoritos:[
      {id:0, nombre:'TEG'},
      {id:1, nombre:'Ajedrez'},
      {id:2, nombre:'Scrabble'},

    ]
  }

  addGame(){
    const newFavorite : Favorito = {
      id: this.persona.favoritos.length +1,
      nombre : this.newGame
    }
this.persona.favoritos.push(newFavorite)
  }

  delete(index : number){
    this.persona.favoritos.splice(index,1)
  }

  save(){
    console.log('work')
  }

}
