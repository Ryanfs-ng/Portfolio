import { Component } from '@angular/core';
import { DropdownContact } from "./dropdown-contact/dropdown-contact";
import { DropdownPersonal } from "./dropdown-personal/dropdown-personal";

@Component({
  selector: 'app-dropdown-label',
  imports: [DropdownContact, DropdownPersonal],
  templateUrl: './dropdown-label.html',
  styleUrl: './dropdown-label.css'
})
export class DropdownLabel {

}
