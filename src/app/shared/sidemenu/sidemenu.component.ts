import { Component } from '@angular/core';

interface MenuItem {
  texto: string,
  ruta : string
}



@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    
  `
  li{
    cursor: pointer;
  }
  `
  
  ]
})
export class SidemenuComponent  {

templateMenu: MenuItem[] = [
  {
    texto:'Basicos',
    ruta:'./template/basics'
  },
  {
    texto:'Dinamicos',
    ruta:'./template/dinamics'
  },
  {
    texto:'Switches',
    ruta:'./template/switches'
  },
];

reactiveMenu: MenuItem[] = [
  {
    texto:'Basicos',
    ruta:'./reactive/basics'
  },
  {
    texto:'Dinamicos',
    ruta:'./reactive/dinamics'
  },
  {
    texto:'Switches',
    ruta:'./reactive/switches'
  },
];

}
