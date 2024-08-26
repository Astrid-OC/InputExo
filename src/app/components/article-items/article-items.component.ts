import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-items',
  standalone: true,
  imports: [],
  templateUrl: './article-items.component.html',
  styleUrl: './article-items.component.css'
})
export class ArticleItemsComponent {
  @Input()
  Btilte!: string;

  @Input()
  content!: string;

  onClick()
  {
    alert(this.content);
  }
}
