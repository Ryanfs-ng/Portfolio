import { Component } from '@angular/core';
import { DropdownContact } from "../../sobre-content/dropdown-label/dropdown-contact/dropdown-contact";
import { FormsContato } from "../forms-contato/forms-contato";
import { FormsAsideCode } from "../forms-contato/forms-aside-code/forms-aside-code";
import { FormsService } from '../forms-contato/forms-service';

@Component({
  selector: 'app-contato-content',
  imports: [DropdownContact, FormsContato, FormsAsideCode],
  templateUrl: './contato-content.html',
  styleUrl: './contato-content.css'
})
export class ContatoContent {

  constructor (public service:FormsService) {}

}
