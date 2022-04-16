import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from './../../services/video.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {

  item: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public video: VideoService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.item = this.video.playlist[id];
  }

}
