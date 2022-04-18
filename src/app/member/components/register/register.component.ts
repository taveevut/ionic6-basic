import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import {MemberService} from '../../services/member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: MemberService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      job: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]],
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
      this.service.save(`/register`, this.form.value)
        .pipe(finalize(() => loading.dismiss()))
        .subscribe(async (res) => {
          const alert = await this.alertCtrl.create({
            header: 'สำเร็จ',
            message: 'ระบบทำการบันทึกข้อมูลได้สำเร็จ',
            buttons: [{
              text: 'ตกลง',
              handler: () => {
                this.form.reset();
              }
            }],
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
