import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import {RegisterService} from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {

    this.form = this.fb.group({
      email: ['taveevut@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required],
      name: ['Taveevut Nakomah', Validators.required],
      job: ['Full stack-developer', Validators.required],
      address: ['Mauritania', [Validators.required, Validators.minLength(5)]],
    });

  }

  ngOnInit() {
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: 'บันทึกข้อมูล...',
    });
    await loading.present();

    if (this.form.valid) {
      this.service.save(this.form.value)
        .pipe(finalize(() => loading.dismiss()))
        .subscribe(async (res) => {
          const alert = await this.alertCtrl.create({
            header: 'สำเร็จ',
            message: 'ระบบทำการบันทึกข้อมูลได้สำเร็จ',
            buttons: ['ตกลง'],
          });

          await alert.present();
        }, async (error) => {
          if (error.status === 409) {
            const alert = await this.alertCtrl.create({
              header: 'ไม่สำเร็จ',
              message: 'ข้อมูลของท่านมีอยู่ในระบบแล้ว',
              buttons: ['ตกลง'],
            });

            await alert.present();
          }
        });
    }
  }
}
