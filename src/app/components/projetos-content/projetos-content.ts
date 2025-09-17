import { Component } from '@angular/core';
import { DropdownLabel } from "./dropdown-label/dropdown-label";
import { NavbarProjects } from "./navbar-projects/navbar-projects";

@Component({
  selector: 'app-projetos-content',
  imports: [DropdownLabel, NavbarProjects],
  templateUrl: './projetos-content.html',
  styleUrl: './projetos-content.css'
})
export class ProjetosContent {

}
