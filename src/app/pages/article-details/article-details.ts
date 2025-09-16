import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-details.html',
  styleUrls: ['./article-details.css']
})
export class articleDetailsComponent {
  article: any = null;
  articles: any[] = [];
  user: any = null;
  userLoggedIn: boolean = false;
  commentText: string = '';
  comments: any[] = [];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.articles = JSON.parse(localStorage.getItem('registeredArticles') || '[]');
    this.article = this.articles.find((p: any) => p.id === id);
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.userLoggedIn = true;
    }

    const allComments = JSON.parse(localStorage.getItem('articleComments') || '[]');
    this.comments = allComments.filter((c: any) => c.articleId === id);
  }

  submitComment() {
    if (!this.commentText.trim()) return;

    const newComment = {
      articleId: this.article.id,
      username: this.user.username,
      text: this.commentText,
      timestamp: new Date()
    };

    const allComments = JSON.parse(localStorage.getItem('articleComments') || '[]');
    allComments.push(newComment);
    localStorage.setItem('articleComments', JSON.stringify(allComments));

    this.comments.push(newComment);
    this.commentText = '';
  }
}