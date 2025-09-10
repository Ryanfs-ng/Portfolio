import { Component } from '@angular/core';
import { SharedServices} from "../services/shared-services";
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(public service: SharedServices) {}

  toogleSidebarExp():void {
    this.service.setActive('experiencias');
    this.service.OpenSidebarExp();
  }

  toogleSidebarPersonal():void {
    this.service.setActive('sobre');
    this.service.OpenSidebarPersonal();
  }
}
