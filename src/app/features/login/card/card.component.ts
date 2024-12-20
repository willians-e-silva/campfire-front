import { Component } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { LoginFormComponent } from '@app/features/login/card/login-form/login-form.component'
import { LoginSignComponent } from '@app/features/login/card/login-sign/login-sign.component'

@Component({
  selector: 'component-card',
  imports: [TitleComponent, LoginFormComponent, LoginSignComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
}
