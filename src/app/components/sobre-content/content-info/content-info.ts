import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-content-info',
  imports: [NgForOf],
  templateUrl: './content-info.html',
  styleUrl: './content-info.css'
})
export class ContentInfo {
  texto:string = `Sou estudante de Engenharia de Software, entusiasta de tecnologia e constantemente em busca de aprender e explorar novas tendências e soluções inovadoras. Possuo experiência no desenvolvimento de sites, atuando tanto no front-end quanto no back-end, além de trabalhar com bancos de dados.`

  linhas:string[] = this.texto.split('\n');
}
