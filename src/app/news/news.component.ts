import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { News } from './../models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  @Input() element: News;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetail(element):void{
    this.router.navigate(['/news-detail', this.element.id]);
  }
}
