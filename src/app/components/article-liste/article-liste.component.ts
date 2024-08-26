import { Component } from '@angular/core';
import { ArticleItemsComponent } from "../article-items/article-items.component";
@Component({
  selector: 'app-article-liste',
  standalone: true,
  imports: [ArticleItemsComponent],
  templateUrl: './article-liste.component.html',
  styleUrl: './article-liste.component.css'
})
export class ArticleListeComponent {

  articles: any[] = [
    { title: 'Angular Basics', content: 'Introduction to Angular...' },
    { title: 'Components and Templates', content: 'Understanding components...' },
    { title: 'Directives in Angular', content: 'How to use directives...' }
    ];
}
