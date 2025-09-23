import { Component, Input } from '@angular/core';
import { ProjectsCard } from "./projects-card/projects-card";
import { ServicesProject } from '../services-project';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-projects-space',
  imports: [ProjectsCard, NgForOf],
  templateUrl: './projects-space.html',
  styleUrl: './projects-space.css'
})
export class ProjectsSpace {
  constructor (public service:ServicesProject) {}

    projects = [
      {title: 'Teste 1', image: 'assets/imgs/devexemplos.jpg', description: 'TESTE TESTE TESTE TESTE TESTE TESTE TESTE  ', git: 'https://github.com/Ryanfs-ng', web: 'https://github.com/Ryanfs-ng', icon: 'assets/icons/reactjs-line-black.svg', languages:['HTML', 'React Native']},
      {title: 'Teste 2', image: 'assets/imgs/devexemplos.jpg', description: 'TESTE TESTE TESTE', git: '', web: '', icon: 'assets/icons/angularjs-fill-black.svg', languages:['Angular', 'HTML'] },
      {title: 'Teste 3', image: 'assets/imgs/devexemplos.jpg', description: 'TESTE TESTE TESTE', git: '', web: '', icon: 'assets/icons/java-line-black.svg', languages:['Java']},
      {title: 'Teste 4', image: 'assets/imgs/devexemplos.jpg', description: 'TESTE TESTE TESTE', git: '', web: '', icon: 'assets/icons/reactjs-line-black.svg' },
    ]

  @Input()
  cardTitle:string = ''

  @Input()
  cardCover:string = ''

  @Input()
  descriptionText:string = ''

  @Input()
  viewProjectgit:string = ''

  @Input()
  webProjectLink:string = ''

  @Input()
  projectIcon:string = ''

  @Input()
  Projeto:string = 'Projeto'

  get filteredProjects() {
    if (this.service.selectedLanguage.length === 0){
      return this.projects;
    }
    return this.projects.filter((project) =>
    project.languages?.some(lang => this.service.selectedLanguage.includes(lang))
    )

  }

}
