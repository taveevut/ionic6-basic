import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditComponent} from './components/edit/edit.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import {IonicModule} from '@ionic/angular';

import {MemberPageRoutingModule} from './member-routing.module';

import {ProfileComponent} from './components/profile/profile.component';
import {MemberPage} from './member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberPageRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [
    MemberPage,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EditComponent
  ]
})
export class MemberPageModule { }
