import { Component, NgModule, OnInit } from '@angular/core';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  angellist = faListAlt;

  ngOnInit(): void {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  toProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
  toExp() {
    document
      .getElementById('experience')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
