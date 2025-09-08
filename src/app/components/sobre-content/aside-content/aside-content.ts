import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { DropdownLabel } from "../dropdown-label/dropdown-label";

@Component({
  selector: 'app-aside-content',
  imports: [Sidebar, DropdownLabel],
  templateUrl: './aside-content.html',
  styleUrl: './aside-content.css'
})
export class AsideContent {

}
