import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-content-tech',
  imports: [NgFor, NgIf],
  templateUrl: './content-tech.html',
  styleUrl: './content-tech.css'
})
export class ContentTech {

    linhas:string[] =
  [
    '',
    ' Tech:',
    '',
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
