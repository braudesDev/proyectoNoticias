import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Método para obtener datos desde una colección
  getData(collectionName: string): Observable<any[]> {
    return this.firestore.collection(collectionName).valueChanges();  // Devuelve los datos en tiempo real
  }

  // Método para agregar un documento a una colección
  addData(collectionName: string, data: any): Promise<any> {
    return this.firestore.collection(collectionName).add(data);  // Agrega un nuevo documento
  }
}
