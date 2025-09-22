import { animation, animate, style, sequence, useAnimation } from '@angular/animations';

export const fadeAnimation = animation([
  style({ opacity: 0 }),
  animate('300ms ease-in', style({ opacity: 1 }))
]);
