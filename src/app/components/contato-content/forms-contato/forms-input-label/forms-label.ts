import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsService } from '../forms-service';
import emailJs from '@emailjs/browser'
import { JsonPipe } from '@angular/common';

interface ContactForm {
  name:string;
  from_email:string;
  message:string
}

@Component({
  selector: 'app-forms-label',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms-label.html',
  styleUrl: './forms-label.css'
})
export class FormsLabel {

  form: ContactForm = {
    name: '',
    from_email: '',
    message: ''
  }

  constructor(public service: FormsService) {}


   send() {
    emailJs.send("service_i2977xg","template_d8zrtvp", {...this.form}, {
      publicKey: 'SrPW3uRhtlizXFw77',
    }).then (() => {
      alert ('Mensagem enviada!')
    })

  }
}


