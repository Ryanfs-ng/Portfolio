import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-content-education',
  imports: [NgIf, NgForOf],
  templateUrl: './content-education.html',
  styleUrl: './content-education.css'
})
export class ContentEducation {

  linhas:string[] =
  [
    '',
    ' Formação Acadêmica:',
    ' Finalizei meu ensino médio no Colégio Estadual da ',
    'Polícia Militar de Goiás (CEPMG) Fernando Pessoa, onde tive',
    ' uma formação sólida baseada em disciplina, responsabilidade',
    ' e excelência acadêmica. Durante esse período, desenvolvi',
    'habilidades essenciais como foco, organização e trabalho',
    ' em equipe, valores que carrego comigo até hoje.' ,
    '',
    'Atualmente, estou cursando Engenharia de Software na',
    'Uniceplac (Centro Universitário Planalto do Distrito',
    'Federal), onde venho me aprofundando em áreas como',
    'desenvolvimento web, estruturas de dados, algoritmos,',
    'engenharia de requisitos e arquitetura de software.',
    'A graduação tem sido fundamental para transformar minha',
    'paixão por tecnologia em conhecimento técnico estruturado,',
    'além de me proporcionar experiências práticas por meio de',
    ' projetos acadêmicos e atividades extracurriculares.',
    ''
  ];

}
