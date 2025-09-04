import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from "@angular/router";
import { NgClass } from "@angular/common"

@Component({
  selector: 'app-sections-bar',
  imports: [RouterLinkActive, RouterLink, NgClass],
  templateUrl: './sections-bar.html',
  styleUrl: './sections-bar.css'
})
export class SectionsBar {

  constructor(private router: Router) {}

  isActiveRoute(route:string) {
    return this.router.url === '/' + route;
  }
}
