import { Component } from '@angular/core';
import { NoticiasService } from '../services/noticias.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  noticias: any[] = [];
  nuevaNoticia = { titulo: '', fecha: '', descripcion: '' };

  constructor(private noticiasService: NoticiasService) {
    this.obtenerNoticias();  // Cargar noticias al iniciar
  }

  // Obtener todas las noticias al cargar el componente
  obtenerNoticias() {
    this.noticiasService.obtenerNoticias().subscribe((noticias: any[]) => {
      console.log('Noticias obtenidas:', noticias);
      this.noticias = noticias.map(noticia => ({
        ...noticia,
        id: noticia.id  // Firebase proporciona un id único para cada documento
      }));
    });
  }

  // Agregar una nueva noticia
  agregarNoticia() {
    this.noticiasService.agregarNoticia(this.nuevaNoticia);
    this.nuevaNoticia = { titulo: '', fecha: '', descripcion: '' };
    this.obtenerNoticias();  // Volver a obtener las noticias después de agregar
  }

  // Eliminar una noticia
  eliminarNoticia(id: string) {
    this.noticiasService.eliminarNoticia(id);
    this.obtenerNoticias();  // Volver a obtener la lista después de eliminar
  }
}

