import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './projects/project-1/project-1.component';
import { Project2Component } from './projects/project-2/project-2.component';
import { Project3Component } from './projects/project-3/project-3.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project-1', component: Project1Component },
  { path: 'project-2', component: Project2Component },
  { path: 'project-3', component: Project3Component },
];
