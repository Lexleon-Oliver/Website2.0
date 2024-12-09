import { Component } from '@angular/core';
import { BlogItemComponent } from '../../components/blog-item/blog-item.component';

@Component({
  selector: 'app-blog-item-page',
  standalone: true,
  imports: [
    BlogItemComponent
  ],
  templateUrl: './blog-item-page.component.html',
  styleUrl: './blog-item-page.component.scss'
})
export class BlogItemPageComponent {

}
