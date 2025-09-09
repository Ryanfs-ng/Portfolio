import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-dropdown-personal',
  imports: [NgClass],
  templateUrl: './dropdown-personal.html',
  styleUrl: './dropdown-personal.css'
})
export class DropdownPersonal {

  folder1Open:boolean = false;
  folder2Open:boolean = false;

  openFolder1() {
    this.folder1Open = !this.folder1Open;
    if (this.folder1Open == true) {
      this.folder2Open = false;
    } else {
      this.folder2Open = this.folder2Open;
    }
  }

  openFolder2() {
    this.folder2Open = !this.folder2Open;
     if (this.folder2Open == true) {
      this.folder1Open = false;
    } else {
      this.folder1Open = this.folder1Open;
    }
  }

}
