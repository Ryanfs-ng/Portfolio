import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { DropdownLabel } from "../dropdown-label/dropdown-label";
import { Navbar } from "./navbar/navbar";
import { ContentInfo } from "../content-info/content-info";
import { NgIf } from "@angular/common";
import { ContentEducation } from "../content-education/content-education";
import { SharedServices } from '../services/shared-services';

@Component({
  selector: 'app-aside-content',
  imports: [Sidebar, DropdownLabel, Navbar, ContentInfo, NgIf, ContentEducation],
  templateUrl: './aside-content.html',
  styleUrl: './aside-content.css'
})
export class AsideContent {

  constructor(public service:SharedServices ) {}

}
