import { Component } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-content-info',
  imports: [NgFor, NgIf],
  templateUrl: './content-info.html',
  styleUrl: './content-info.css'
})
export class ContentInfo {

  linhas:string[] =
  [
    '',
    ' Sobre mim:',
    ' Desenvolvedor Full-Stack e estudante de Engenharia de',
    'Software, atuando na Memora Processos Inovadores desde',
    '2025, hoje como Trainee Desenvolvedor Full-Stack.',
    '',
    '  No dia a dia, construo e mantenho sistemas corporativos:',
    'back-end com Java, Spring Boot e APIs REST, e front-end',
    'com Angular, TypeScript e PrimeNG, além de aplicações',
    'mobile com React Native. Trabalho com microsserviços,',
    'integrações com ERP e bancos de dados como Oracle,',
    'PostgreSQL e MySQL.',
    '',
    '  Participo de todo o ciclo de desenvolvimento, da análise',
    'de requisitos e regras de negócio até a implementação,',
    'integração e manutenção, sempre com foco em automatizar',
    'processos e entregar soluções que gerem resultado.',
    '',
    '  Tenho facilidade para trabalhar em equipe e, vindo da',
    'gestão de processos e Lean, valorizo eficiência e melhoria',
    'contínua. Sigo aprendendo e aberto a novos desafios que',
    'contribuam para meu crescimento e para o sucesso dos',
    'times e projetos dos quais faço parte.',
    ''
  ];
}
