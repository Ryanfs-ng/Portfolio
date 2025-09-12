import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forms-message-label',
  imports: [],
  templateUrl: './forms-message-label.html',
  styleUrl: './forms-message-label.css'
})
export class FormsMessageLabel {

  @Input()
  labelTitle:string = '';

}
