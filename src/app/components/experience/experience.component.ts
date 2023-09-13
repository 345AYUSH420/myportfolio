import { Component } from '@angular/core';
import { withInMemoryScrolling } from '@angular/router';
import {
  faLinkedin,
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  mylinkedin = faWhatsapp;
  toProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
