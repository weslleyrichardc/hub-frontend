import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) text = '';
}
