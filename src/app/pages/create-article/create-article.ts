import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../master';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-article.html',
  styleUrls: ['./create-article.css']
})
export class CreateArticleComponent {
  constructor(private router: Router, public master: Master) {}
  article = {
    id: 0,
    title: '',
    summary: '',
    image: ''
  };

  submitArticle() {
    const articles = JSON.parse(localStorage.getItem('registeredArticles') || '[]');

    // Auto-generate ID based on existing articles
    const nextId = articles.length > 0
      ? Math.max(...articles.map((a: any) => a.id)) + 1
      : 1;

    const newArticle = {
      ...this.article,
      id: nextId
    };

    articles.push(newArticle);
    localStorage.setItem('registeredArticles', JSON.stringify(articles));
    alert(`Article created successfully!`);
    this.resetForm();
    this.router.navigate(['/articles']);
  }

  resetForm() {
    this.article = {
      id: 0, // will be auto-generated
      title: '',
      summary: '',
      image: ''
    };
  }
}
