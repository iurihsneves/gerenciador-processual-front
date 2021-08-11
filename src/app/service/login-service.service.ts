import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {
   }

   login(usuario: { email: string; senha?: string; }) {

      console.info('Email ' + usuario.email)

   }
}
