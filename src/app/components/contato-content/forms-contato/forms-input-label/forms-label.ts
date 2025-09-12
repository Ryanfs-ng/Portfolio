import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormsService } from '../forms-service';

@Component({
  selector: 'app-forms-label',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms-label.html',
  styleUrl: './forms-label.css'
})
export class FormsLabel {

  constructor(public service: FormsService) {}


  @Input()
  labelTitle:string = '';

  @Input()
  labelPlaceholder:string = '';
}
