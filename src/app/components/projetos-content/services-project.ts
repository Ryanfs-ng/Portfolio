import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesProject {


  selectedLanguage:string[] = [];

   addLanguage (lang:string, event:any) {
    if (event.target.checked) {
      this.selectedLanguage.push(lang);
      console.log(this.selectedLanguage);
    } else {
      this.selectedLanguage = this.selectedLanguage.filter(l => l !== lang);
    }
  }


}
