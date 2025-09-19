import { Component, Input } from '@angular/core';
import { ProjectsCard } from "./projects-card/projects-card";
import { ServicesProject } from '../services-project';

@Component({
  selector: 'app-projects-space',
  imports: [ProjectsCard],
  templateUrl: './projects-space.html',
  styleUrl: './projects-space.css'
})
export class ProjectsSpace {
  constructor (public service:ServicesProject) {

  }
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

}
