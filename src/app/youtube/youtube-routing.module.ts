import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './components/view/view.component';

import {YoutubePage} from './youtube.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubePage
  },
  {
    path: ':id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubePageRoutingModule { }
