import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { SharedServices } from '../../services/shared-services'

@Component({
  selector: 'app-dropdown-personal',
  imports: [NgClass],
  templateUrl: './dropdown-personal.html',
  styleUrl: './dropdown-personal.css'
})
export class DropdownPersonal {

  constructor(public service: SharedServices) {}

  toggleFolder1() {
    this.service.openFolder1();
    this.service.openContent_about();
  }

  toggleFolder2() {
    this.service.openFolder2();
    this.service.openContent_education();
  }

}
