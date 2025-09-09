import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { DropdownLabel } from "../dropdown-label/dropdown-label";
import { Navbar } from "./navbar/navbar";
import { ContentInfo } from "../content-info/content-info";

@Component({
  selector: 'app-aside-content',
  imports: [Sidebar, DropdownLabel, Navbar, ContentInfo],
  templateUrl: './aside-content.html',
  styleUrl: './aside-content.css'
})
export class AsideContent {

}
