import { Component } from '@angular/core';
import {NgIf } from '@angular/common';

@Component({
  selector: 'app-content-tech',
  imports: [NgIf],
  templateUrl: './content-tech.html',
  styleUrl: './content-tech.css'
})
export class ContentTech {

  frontContent:boolean = true;
  backContent:boolean = true;
  othersContent:boolean = true;
  dot:string = "..]"

  showFront () {
    this.frontContent = !this.frontContent;
  }

  showBack () {
    this.backContent = !this.backContent;
  }

  showOthers () {
    this.othersContent = !this.othersContent;
  }

}
