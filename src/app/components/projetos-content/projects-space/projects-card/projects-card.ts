import { Component } from '@angular/core';
import { CardTitle } from "./card-title/card-title";
import { CardImage } from "./card-image/card-image";

@Component({
  selector: 'app-projects-card',
  imports: [CardTitle, CardImage],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.css'
})
export class ProjectsCard {

}
