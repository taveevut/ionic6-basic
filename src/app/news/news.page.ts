import {Component, OnInit} from '@angular/core';
import {Articles} from './models/news';
import {NewsService} from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: Articles[];

  constructor(
    private service: NewsService
  ) { }

  ngOnInit() {
    this.service.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=ab0d4aca4cea481e8157d31c68eb2b23').subscribe((res) => {
      console.log(res);
      this.news = <Articles[]>res.articles;
    });
  }

}
