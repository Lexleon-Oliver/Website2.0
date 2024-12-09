import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PortfolioItemPageComponent } from './pages/portfolio-item-page/portfolio-item-page.component';
import { ServicesItemPageComponent } from './pages/services-item-page/services-item-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'resume',
    component: ResumePageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'portfolio/:id',
    component: PortfolioItemPageComponent
  },
  {
    path: 'services/:id',
    component: ServicesItemPageComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent
  },


];
