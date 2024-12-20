import { Component } from '@angular/core';
import { MainButtonComponent } from '@components/main-button/main-button.component';

@Component({
  selector: 'component-login-sign',
  imports: [MainButtonComponent],
  templateUrl: './login-sign.component.html',
  styleUrl: './login-sign.component.scss'
})
export class LoginSignComponent {
  assets = (imageName: string) => `@assets/images/${imageName}`;
}
