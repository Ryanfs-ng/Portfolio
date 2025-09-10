import { Component } from '@angular/core';
import { DropdownContact } from "./dropdown-contact/dropdown-contact";
import { DropdownPersonal } from "./dropdown-personal/dropdown-personal";
import { NgIf } from "@angular/common";
import { SharedServices} from "../services/shared-services";
import { DropdownExp } from "./dropdown-exp/dropdown-exp";

@Component({
  selector: 'app-dropdown-label',
  imports: [DropdownContact, DropdownPersonal, NgIf, DropdownExp],
  templateUrl: './dropdown-label.html',
  styleUrl: './dropdown-label.css'
})
export class DropdownLabel {

  constructor(public service:SharedServices ) {}


}
