import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditComponent} from './components/edit/edit.component';
import {ProfileComponent} from './components/profile/profile.component';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [
    LoginPage,
    ProfileComponent,
    EditComponent]
})
export class LoginPageModule { }
