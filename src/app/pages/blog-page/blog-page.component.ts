import { BlogComponent } from './../../components/blog/blog.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [
    BlogComponent
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

}
