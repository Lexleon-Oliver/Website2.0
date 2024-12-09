import { Component } from '@angular/core';
import { BlogItem } from '../../models/blog-item';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  newsList!:BlogItem[];

  constructor(
    private blogService: BlogService,
    private router: Router
  ){
    this.newsList = blogService.getNews();
  }

  readMore(item: BlogItem) {
    this.router.navigate(['/blog', item.id])

  }
}
