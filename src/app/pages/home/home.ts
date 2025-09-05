import { Component } from '@angular/core';
import { TitleHome } from "../../components/home-content/title-home/title-home";
import { GithubComment } from "../../components/home-content/github-comment/github-comment";
import { ProfilePic } from "../../components/home-content/profile-pic/profile-pic";

@Component({
  selector: 'app-home',
  imports: [TitleHome, GithubComment, ProfilePic],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
