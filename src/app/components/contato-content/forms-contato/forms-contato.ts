import { Component } from '@angular/core';
import { FormsLabel } from "./forms-input-label/forms-label";
import { FormsMessageLabel } from "./forms-textarea-label/forms-message-label";

@Component({
  selector: 'app-forms-contato',
  imports: [FormsLabel, FormsMessageLabel],
  templateUrl: './forms-contato.html',
  styleUrl: './forms-contato.css'
})
export class FormsContato {

}
