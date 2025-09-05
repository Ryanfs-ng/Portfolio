import { Component } from '@angular/core';
import { SocialIcons } from "./social-icons/social-icons";
import { FindMe } from "./find-me/find-me";
import { GithubBar } from "./github-bar/github-bar";

@Component({
  selector: 'app-footer-bar',
  imports: [SocialIcons, FindMe, GithubBar],
  templateUrl: './footer-bar.html',
  styleUrl: './footer-bar.css'
})
export class FooterBar {

}
