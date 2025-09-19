import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  imports: [],
  templateUrl: './card-image.html',
  styleUrl: './card-image.css'
})
export class CardImage {

  @Input()
  cardCover:string = ''

  @Input()
  projectIcon:string = ''
}
