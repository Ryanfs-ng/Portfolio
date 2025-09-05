import { Component, inject } from '@angular/core';
import { Typewriter } from '../../../services/typewriter';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-title-home',
  imports: [AsyncPipe],
  templateUrl: './title-home.html',
  styleUrl: './title-home.css'
})
export class TitleHome {

  titles = ['Desenvolvedor Full-Stack', 'Desenvolvedor Back-End', 'Desenvolvedor Front-End']

  private typewriterService = inject(Typewriter);

   typedText$ = this.typewriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));
}

