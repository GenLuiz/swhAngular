import { Component, OnInit } from '@angular/core';
import { News } from './../../models/news.model';
import { NewsService } from '../../news-service/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News[] = [];
  selectedNews: News;
  
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  onSelect(news:News):void{
    this.selectedNews = news;
  }

  getNews():void{
    this.newsService.getNews().then(news => this.newsList = news);
  }
}
