import {Component, OnInit} from '@angular/core';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  text: string = "";
  text_qrcode: string = "";
  text_code: string = "";

  constructor(
    private barcode: BarcodeScanner
  ) { }

  ngOnInit() {
  }

  create() {
    this.text_qrcode = this.text;
  }

  scan() {
    this.barcode.scan().then(result => {
      this.text_code = result.text;
    });
  }
}
