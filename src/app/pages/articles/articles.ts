import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Master } from '../../master';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css']
})

export class ArticlesComponent implements OnInit {
  constructor( public master: Master ) {}
  registeredArticles: any[] = [];

  ngOnInit(): void {
  const storedArticles = localStorage.getItem('registeredArticles');
  if (storedArticles) {
    this.registeredArticles = JSON.parse(storedArticles);
  } else {
    this.registeredArticles = [
    {
      id: 1,
      title: 'Local Elections Stir Debate Across Bihar',
      summary: 'Citizens voice concerns over infrastructure and education as local elections approach.',
      image: 'https://www.nytimes.com/2018/03/07/technology/two-months-news-newspapers.html'
    },
    {
      id: 2,
      title: 'Tech Startups Thrive in Tier-2 Cities',
      summary: 'Entrepreneurs are finding new opportunities in cities like Patna and Ranchi.',
      image: 'https://projectmumbai.org/news-article/'
    },
    {
      id: 3,
      title: '5-Minute Morning Stretch Routine',
      summary: 'Start your day with these energizing stretches to boost flexibility and mood.',
      image: 'https://exerciseinthecity.com/2015/03/12/featured-in-health-fitness-magazine-this-month/'
    },
    {
      id: 4,
      title: 'Nutrition Tips for Busy Professionals',
      summary: 'Quick and healthy meal ideas to keep your energy up throughout the workday.',
      image: 'https://fitwithsylvia.com/feature-in-rude-health-magazine-exercising-at-home/'
    }
  ];
  localStorage.setItem('registeredArticles', JSON.stringify(this.registeredArticles));
  }
}
}