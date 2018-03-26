import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  nombre = "Martin";

  nombre2 = "mARtin igNAcio vACAS";


  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    edad: 500,
    clave: "Wolverine",
    direccion: {
      calle:"Primera",
      numero:1234
    }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llego la data'), 3500);
  });

  fecha = new Date();

  video = 'lrRUF_uVMXM';

}
