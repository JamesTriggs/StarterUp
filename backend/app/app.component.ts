import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'starter-up',
  template: '<h1>Get Wrekt</h1>'
})
export class AppComponent {
  constructor(private auth: Auth) {}
}
