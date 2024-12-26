import { Component } from '@angular/core';
import { LoginFormComponent } from '@app/features/login/card/login/login-form/login-form.component'
import { LoginSignComponent } from '@app/features/login/card/login/login-sign/login-sign.component'
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'component-login',
  imports: [LoginFormComponent, LoginSignComponent, TitleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
