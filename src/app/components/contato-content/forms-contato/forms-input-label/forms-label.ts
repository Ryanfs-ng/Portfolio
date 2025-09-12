import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forms-label',
  imports: [],
  templateUrl: './forms-label.html',
  styleUrl: './forms-label.css'
})
export class FormsLabel {


  @Input()
  labelTitle:string = '';

  @Input()
  labelPlaceholder:string = '';
}
