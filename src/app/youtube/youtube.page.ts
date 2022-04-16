import {Component, OnInit} from '@angular/core';
import {VideoService} from './services/video.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {
  constructor(
    public video: VideoService
  ) { }

  ngOnInit() {
  }

}
