import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  imports: [],
  templateUrl: './card-content.html',
  styleUrl: './card-content.css'
})
export class CardContent {

   @Input()
  descriptionText:string = 'TesteTesteTesteTesteTesteTesteTest Teste'

  @Input()
  viewProjectgit:string = ''

  @Input()
  webProjectLink:string = ''

}
