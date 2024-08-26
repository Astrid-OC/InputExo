import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleListeComponent } from "./components/article-liste/article-liste.component";
import { ArticleItemsComponent } from "./components/article-items/article-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleListeComponent, ArticleItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExoAng2';
}
