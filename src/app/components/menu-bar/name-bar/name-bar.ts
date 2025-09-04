import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router} from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-name-bar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './name-bar.html',
  styleUrl: './name-bar.css'
})
export class NameBar {

  constructor(private router: Router){}

  isActiveRoute(route:string) {
    this.router.url === '/' + route;
  }
}
