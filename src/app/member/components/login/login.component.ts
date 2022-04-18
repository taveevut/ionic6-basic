import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import {MemberService} from '../../services/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: MemberService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private route: Router
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
      this.service.save(`/login`, this.form.value)
        .pipe(finalize(() => loading.dismiss()))
        .subscribe(async (res) => {
          if (!this.isEmptyObject(res)) {
            const alert = await this.alertCtrl.create({
              header: 'สำเร็จ',
              message: 'เข้าสู่ระบบได้สำเร็จ',
              buttons: [{
                text: 'ตกลง',
                handler: () => {
                  this.form.reset();
                  this.route.navigate(['member', 'profile', res.id]);
                }
              }],
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
