import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {
  @Input() text: string = '';
  @Input() bgColor: string = '';
  @Input() type: string = '';
  @Input() image: string = '';
  @Input() borderOptions: string = '';
}
