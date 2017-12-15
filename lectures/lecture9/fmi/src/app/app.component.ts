import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FMIJS';

  constructor(private authService: AuthService) { }

  setTitle({ target: { value } }) {
    this.title = value;
  }

  logout() {
    this.authService.logout();
  }
}
