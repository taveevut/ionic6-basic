import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';
import {LoginService} from './../../services/login.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  id: number | string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.form = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      job: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]],
    });

  }

  ngOnInit() {
    this.service.get(`profile/${this.id}`).subscribe((res) => {
      this.form.patchValue(res);
    });
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: 'บันทึกข้อมูล...',
    });
    await loading.present();

    if (this.form.valid) {
      this.service.save(this.form.value, `/profile/${this.id}`)
        .pipe(finalize(() => loading.dismiss()))
        .subscribe(async (res) => {
          const alert = await this.alertCtrl.create({
            header: 'สำเร็จ',
            message: 'ระบบทำการแก้ไขข้อมูลได้สำเร็จ',
            buttons: ['ตกลง'],
          });

          await alert.present();
        });
    }
  }

}
