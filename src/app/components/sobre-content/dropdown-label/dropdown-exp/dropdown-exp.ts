import { Component } from '@angular/core';
import { SharedServices } from '../../services/shared-services';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dropdown-exp',
  imports: [NgClass],
  templateUrl: './dropdown-exp.html',
  styleUrl: './dropdown-exp.css'
})
export class DropdownExp {
  constructor(public service:SharedServices) {}

  toggleFolder1() {
    this.service.openFolder1();
    this.service.openContent_exp();
  }

  toggleFolder2() {
    this.service.openFolder2();
    this.service.openContent_tech();
  }


}


