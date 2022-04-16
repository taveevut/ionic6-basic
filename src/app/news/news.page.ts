import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
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
    private service: NewsService,
    public loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'เตรียมข้อมูล...',
    });
    await loading.present();

    this.service.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=ab0d4aca4cea481e8157d31c68eb2b23')
      .pipe(finalize(() => loading.dismiss()))
      .subscribe((res) => {
        this.news = <Articles[]>res.articles;
      });
  }

}
