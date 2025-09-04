import { Component } from '@angular/core';
import { NameBar } from "./name-bar/name-bar";
import { SectionsBar } from "./sections-bar/sections-bar";

@Component({
  selector: 'app-menu-bar',
  imports: [NameBar, SectionsBar],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css'
})
export class MenuBar {

}
