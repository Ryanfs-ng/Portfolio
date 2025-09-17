import { Component } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { ServicesProject } from '../services-project';

@Component({
  selector: 'app-navbar-projects',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './navbar-projects.html',
  styleUrl: './navbar-projects.css'
})
export class NavbarProjects {

  constructor(public service:ServicesProject) {}


}
