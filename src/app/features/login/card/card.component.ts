import { Component } from '@angular/core';
import { LoginComponent } from '@app/features/login/card/login/login.component'
@Component({
  selector: 'login-component-card',
  imports: [LoginComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class LoginCardComponent {
}
