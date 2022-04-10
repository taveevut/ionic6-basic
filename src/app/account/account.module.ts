import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {IonicModule} from '@ionic/angular';

import {AccountPageRoutingModule} from './account-routing.module';

import {AccountPage} from './account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule { }
