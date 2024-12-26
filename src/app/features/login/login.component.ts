import { Component } from '@angular/core';
import { LoginCardComponent } from '@app/features/login/card/card.component'
@Component({
  selector: 'page-login',
  imports: [ LoginCardComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
