import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-pic',
  imports: [NgIf],
  templateUrl: './profile-pic.html',
  styleUrl: './profile-pic.css'
})
export class ProfilePic {
  // coloque sua foto em src/assets/imgs/profile.jpg; sem ela, aparece um avatar padrão
  failed = false;

}
