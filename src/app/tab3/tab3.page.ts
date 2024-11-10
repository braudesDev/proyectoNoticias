import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Definimos las tarjetas con datos dinámicos
  cards: any[];

  constructor() {
    this.cards = [
      {
        imagenUrl: '/assets/noticia1.png', // Imagen 1
        titulo: 'Marilyn Cote: éste es el verdadero grado de estudios de la presunta psiquiatra de Puebla',
        fecha: new Date(),
        descripcion: 'Aunque la mujer no tiene los estudios que asegura en prestigiosas universidades extranjeras, sí cuenta con estudios en instituciones mexicanas'
      },
      {
        imagenUrl: '/assets/noticia2.png', // Imagen 2
        titulo: 'Susto en Tamaulipas; se incendia camioneta de Noroña',
        fecha: new Date(),
        descripcion: 'El Presidente del Senado explicó, a través de su cuenta de X, que no había nadie a bordo durante el siniestro'
      },
      {
        imagenUrl: '/assets/noticia3.png', // Imagen 3
        titulo: 'Tormenta tropical Once-E tocará tierra esta noche en Oaxaca; Guerrero sufrirá lluvias intensas ',
        fecha: new Date(),
        descripcion: 'La Comisión Nacional del Agua (Conagua) informó que su circulación, en interacción con la vaguada monzónica y con una zona de baja presión al suroeste del golfo de México, mantendrán el pronóstico de lluvias puntuales torrenciales de 150 a 250 milímetros en Guerrero, Oaxaca y Veracruz; intensas, de 75 a 150 mm, en Campeche, Chiapas y Tabasco, y muy fuertes, de 50 a 75 mm, en Puebla, además de reforzar el potencial de lluvias en regiones del centro del país.'
      },
      {
        imagenUrl: '/assets/noticia4.png', // Imagen 4
        titulo: 'Tornados se suman al Frente Frío 8, mientras Huracán Rafael se acerca más hoy 8 de Noviembre',
        fecha: new Date(),
        descripcion: 'Luego de unos primeros días del mes con bajas temperaturas, el segundo fin de semana trae consigo además la posibilidad de tornados, además de la aproximación del Huracán Rafael por el Golfo de México, es por eso que te contamos cómo será el clima en el país este viernes 8 de noviembre.'
      },
      {
        imagenUrl: '/assets/noticia5.png', // Imagen 5
        titulo: 'Noticias de hoy en México, en vivo | De la fuente sobre la presencia de México en el G20: “Vamos como iguales, nunca subordinados”',
        fecha: new Date(),
        descripcion: 'Claudia Sheinbaum ha establecido su primera comunicación con Donald Trump tras su triunfo en las elecciones de Estados Unidos'
      }
    ];
  }

  eliminarNoticia(index: number):void {
    this.cards.splice(index, 1);
  }

}
