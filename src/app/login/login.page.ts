import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {

    this.form = this.fb.group({
      email: ['taveevut@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required],
    });

  }

  ngOnInit() {
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: 'ตรวจสอบข้อมูล...',
    });
    await loading.present();

    if (this.form.valid) {
      this.service.save(this.form.value)
        .pipe(finalize(() => loading.dismiss()))
        .subscribe(async (res) => {
          if (!this.isEmptyObject(res)) {
            const alert = await this.alertCtrl.create({
              header: 'สำเร็จ',
              message: 'เข้าสู่ระบบได้สำเร็จ',
              buttons: ['ตกลง'],
            });

            await alert.present();
          }
          else {
            const alert = await this.alertCtrl.create({
              header: 'ไม่พบข้อมูล',
              message: 'โปรดตรวจสอบใหม่อีกครั้ง',
              buttons: ['ตกลง'],
            });

            await alert.present();
          }
        });
    }
  }

  private isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
