import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Registrar un nuevo usuario con correo y contraseña
  register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Iniciar sesión con correo y contraseña
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Obtener el usuario actual
  getUser(): Observable<any> {
    return this.afAuth.authState;
  }

  // Verificar si el usuario está autenticado y devolver un valor booleano
  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user)  // Convierte el usuario a un valor booleano
    );
  }
}
