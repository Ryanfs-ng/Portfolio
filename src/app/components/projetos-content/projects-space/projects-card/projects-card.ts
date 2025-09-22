import { Component, Input } from '@angular/core';
import { CardTitle } from "./card-title/card-title";
import { CardImage } from "./card-image/card-image";
import { CardContent } from "./card-content/card-content";

@Component({
  selector: 'app-projects-card',
  imports: [CardTitle, CardImage, CardContent],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.css'
})
export class ProjectsCard {

  @Input()
  cardTitle:string = ''

  @Input()
  cardCover:string = 'assets/imgs/devexemplos.jpg'

  @Input()
  descriptionText:string = ''

  @Input()
  viewProjectgit:string = ''

  @Input()
  webProjectLink:string = ''

  @Input()
  projectIcon:string = ''

  @Input()
  prefix:string = ''

}
