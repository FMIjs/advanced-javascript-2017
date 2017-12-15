import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  logout() {
    console.log('Logut!');
  }

}
