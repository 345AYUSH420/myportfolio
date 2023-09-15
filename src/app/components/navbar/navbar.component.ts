import { Component, OnInit } from '@angular/core';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  angellist = faListAlt;

  ngOnInit(): void {
    // This is the initial scroll behavior when the component is loaded.
    // Ensure you have an element with the ID 'home' in your HTML.
    this.scrollToElement('home');
  }

  // Function to scroll to the specified element smoothly.
  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Functions to handle menu item clicks.
  toHome() {
    this.scrollToElement('home');
  }

  toAbout() {
    this.scrollToElement('about');
  }

  toProjects() {
    this.scrollToElement('projects');
  }

  toExp() {
    this.scrollToElement('experience');
  }
}
