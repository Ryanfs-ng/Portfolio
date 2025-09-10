import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServices {

  // DropDown-label
  folder1Open:boolean = true;
  folder2Open:boolean = false;
  // Abas navbar
  navbarContent_about:boolean = true;
  navbarContent_education:boolean = false;
  // Sidebar
  showExpInfo:boolean = false;
  activeIcon:string = 'sobre';
  showPersonalInfo:boolean = true;


  openFolder1():any {
    this.folder1Open = !this.folder1Open;
    if (this.folder1Open == true) {
      this.folder2Open = false;
    } else {
      this.folder2Open = this.folder2Open;
    }
  }


  openFolder2():any {
    this.folder2Open = !this.folder2Open;
     if (this.folder2Open == true) {
      this.folder1Open = false;
    } else {
      this.folder1Open = this.folder1Open;
    }
  }

  openContent_education(): void {
    this.navbarContent_education = true;
    this.navbarContent_about = false;
  }

  openContent_about(): void {
    this.navbarContent_about = true;
    this.navbarContent_education = false;
  }

  setActive(section:string):any {
    this.activeIcon = section;
  }

  OpenSidebarExp():void {
    if (this.activeIcon === 'experiencias') {
      this.showExpInfo = true;
      this.showPersonalInfo = false;
    }
  }

    OpenSidebarPersonal():void {
      if (this.activeIcon === 'sobre') {
        this.showPersonalInfo = true;
        this.showExpInfo = false;
    };
  }






}
