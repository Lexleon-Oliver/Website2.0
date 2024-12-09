import { Component } from '@angular/core';
import { BlogItem } from '../../models/blog-item';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {

  selectedBlog!: BlogItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,

  ){

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.selectedBlog = blogService.getNewsById(id);

    });
  }
}
