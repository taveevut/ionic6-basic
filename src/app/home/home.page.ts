import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) { }

  gotoAccountPage() {
    this.navCtrl.navigateForward('/account');
  }

  gotoCameraPage() {
    this.navCtrl.navigateForward('/camera');
  }

  gotoQrcodePage() {
    this.navCtrl.navigateForward('/qrcode');
  }

  gotoNewsPage() {
    this.navCtrl.navigateForward('/news');
  }

  gotoLoginPage() {
    this.navCtrl.navigateForward('/member/login');
  }

  gotoRegisterPage() {
    this.navCtrl.navigateForward('/member/register');
  }

  gototodosPage() {
    this.navCtrl.navigateForward('/todos');
  }

  gotoYoutubePage() {
    this.navCtrl.navigateForward('/youtube');
  }

}
