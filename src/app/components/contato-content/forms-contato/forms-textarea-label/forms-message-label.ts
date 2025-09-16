import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FormsService } from '../forms-service';

@Component({
  selector: 'app-forms-message-label',
  imports: [FormsModule],
  templateUrl: './forms-message-label.html',
  styleUrl: './forms-message-label.css'
})
export class FormsMessageLabel {

  constructor(public service:FormsService) {}

  @Input()
  labelTitle:string = '';

}
