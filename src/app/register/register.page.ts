import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {

    this.form = this.fb.group({
      email: ['taveevut@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required],
      name: ['Taveevut Nakomah', Validators.required],
      job: ['Full stack-developer', Validators.required],
      address: ['Mauritania', [Validators.required, Validators.minLength(15)]],
    });

  }

  ngOnInit() {
  }

}
