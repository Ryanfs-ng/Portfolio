import { Component } from '@angular/core';
import { DropdownContact } from "../../components/sobre-content/dropdown-label/dropdown-contact/dropdown-contact";
import { FormsContato } from "../../components/contato-content/forms-contato/forms-contato";

@Component({
  selector: 'app-contato',
  imports: [DropdownContact, FormsContato],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

}
