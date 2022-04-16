import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = 'https://www.youtube.com/embed/WNKGj-kHXKg';
  }

}
