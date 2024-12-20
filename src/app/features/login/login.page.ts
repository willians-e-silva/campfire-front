import { Component } from '@angular/core';
import { CardComponent } from '@app/features/login/card/card.component'
@Component({
  selector: 'page-login',
  imports: [ CardComponent ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {

}
