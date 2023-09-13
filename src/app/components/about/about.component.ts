import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  skills = [
    { name: 'Java' },
    { name: 'Mysql' },
    { name: 'Angular' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'BOOTSTRAP' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'REST API' },
    { name: 'C' },
    { name: 'C++' },
    { name: 'GIT' },
    { name: 'GITHUB' },
    { name: 'HTML' },
  ];
}
