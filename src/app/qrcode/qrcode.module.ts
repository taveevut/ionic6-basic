import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {QrcodePageRoutingModule} from './qrcode-routing.module';

import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {QrcodePage} from './qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodePageRoutingModule,

    NgxQRCodeModule
  ],
  declarations: [QrcodePage],
  providers: [
    BarcodeScanner
  ]
})
export class QrcodePageModule { }
