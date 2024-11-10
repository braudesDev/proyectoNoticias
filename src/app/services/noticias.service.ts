import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private firestore: AngularFirestore) { }

  // Método para obtener todas las noticias
  obtenerNoticias(): Observable<any[]> {
    return this.firestore.collection('noticias').valueChanges();
  }

  // Método para agregar una nueva noticia
  agregarNoticia(noticia: any): void{
     this.firestore.collection('noticias').add(noticia);
  }

  // Método para eliminar una noticia por ID
  // Método para eliminar una noticia por ID
eliminarNoticia(id: string): void {
  this.firestore.collection('noticias').doc(id).delete();
}

}
