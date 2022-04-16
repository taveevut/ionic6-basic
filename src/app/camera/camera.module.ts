import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CameraPageRoutingModule} from './camera-routing.module';

import {Camera} from '@awesome-cordova-plugins/camera/ngx';
import {CameraPage} from './camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule
  ],
  declarations: [CameraPage],
  providers: [
    Camera
  ]
})
export class CameraPageModule { }
