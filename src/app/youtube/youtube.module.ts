import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ViewComponent} from './components/view/view.component';

import {IonicModule} from '@ionic/angular';

import {YoutubePageRoutingModule} from './youtube-routing.module';

import {SafePipe} from './safe.pipe';
import {YoutubePage} from './youtube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubePageRoutingModule
  ],
  declarations: [YoutubePage, ViewComponent, SafePipe]
})
export class YoutubePageModule { }
