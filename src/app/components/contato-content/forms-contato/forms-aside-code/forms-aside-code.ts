import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms-aside-code',
  imports: [],
  templateUrl: './forms-aside-code.html',
  styleUrl: './forms-aside-code.css'
})
export class FormsAsideCode {

  @Input()
  formName:string = ''

  @Input()
  formEmail:string = ''

  @Input()
  formMessage:string = ''

  dateNow:string = ''

  ngOnInit() {
    const now = new Date();
    this.dateNow = now.toLocaleDateString('pt-br')
  }
}
