import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ArticlesComponent } from '../articles/articles';
import { Master } from '../../master';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ArticlesComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  user: any = null;
  registeredArticles: any[] = [ ];

  constructor(public master: Master, private router: Router) {
    const localData = localStorage.getItem('registeredArticles');
    if(localData != null) {
      this.registeredArticles = JSON.parse(localData)
    }
  }

  toggleDetails(article: any) {
    article.showDetails = !article.showDetails;
  }

  makeEnquiry(article: any) {
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push({
      articleId: article.id,
      title: article.title,
      timestamp: new Date()
    });
    localStorage.setItem('enquiries', JSON.stringify(enquiries));
    alert(`Enquiry submitted for: ${article.title}`);
  }
}