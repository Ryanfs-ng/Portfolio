import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { SharedServices} from "../../services/shared-services";

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(public service:SharedServices ) {}
}
