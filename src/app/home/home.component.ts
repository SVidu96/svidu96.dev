import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { HeroComponent } from '../hero/hero.component';
import { SocialMenuComponent } from "../social-menu/social-menu.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutComponent, ProjectsComponent, ContactComponent, HeroComponent, SocialMenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
