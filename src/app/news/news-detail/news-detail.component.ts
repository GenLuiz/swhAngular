import { News } from './../../models/news.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NewsService } from '../../news-service/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  @Input() newsDetail: News;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private location:Location) { }

  ngOnInit():void {
    this.route.paramMap.switchMap((params:ParamMap)=>this.newsService.getSingleNews(+params.get('id')))
    .subscribe(news => this.newsDetail = news);
  }

}
