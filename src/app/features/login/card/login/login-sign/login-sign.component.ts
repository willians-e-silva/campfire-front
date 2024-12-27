import { Component } from '@angular/core';

@Component({
  selector: 'component-login-sign',
  imports: [],
  templateUrl: './login-sign.component.html',
  styleUrl: './login-sign.component.scss'
})
export class LoginSignComponent {
  assets = (imageName: string) => `@assets/images/${imageName}`;
}
