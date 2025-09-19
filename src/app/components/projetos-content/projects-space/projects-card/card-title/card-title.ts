import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  imports: [],
  templateUrl: './card-title.html',
  styleUrl: './card-title.css'
})
export class CardTitle {

  @Input()
  cardTitle:string = ''

}
