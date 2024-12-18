import { Component } from '@angular/core';
import { InputComponent } from '@components/input/input.component';
import { TitleComponent } from '@components/title/title.component';
import { MainButtonComponent } from '@components/main-button/main-button.component';
@Component({
  selector: 'app-login',
  imports: [InputComponent, TitleComponent, MainButtonComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginComponent {
  assets = (imageName: string) => `@assets/images/${imageName}`;
}
