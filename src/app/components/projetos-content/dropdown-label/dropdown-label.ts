import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { ServicesProject } from '../services-project';

@Component({
  selector: 'app-dropdown-label',
  imports: [FormsModule],
  templateUrl: './dropdown-label.html',
  styleUrl: './dropdown-label.css'
})
export class DropdownLabel {

  constructor(public service:ServicesProject){}

  @Input()
  languageIcon:string = ''

  @Input()
  languageName:string = ''



}
