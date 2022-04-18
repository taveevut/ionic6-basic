import {Component, OnInit} from '@angular/core';
import {AlertController, IonItemSliding} from '@ionic/angular';

interface Item {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  public items: Item[];

  constructor(private alertController: AlertController) {
    this.items = [
      {title: 'spell shallow dog', done: true},
      {title: 'bell gather anybody', done: true},
      {title: 'silent spring small', done: true},
      {title: 'ancient built perfectly', done: true},
      {title: 'signal duck cake', done: false},
      {title: 'courage four calm', done: true},
    ];
  }

  ngOnInit() {
  }

  async create() {
    const alert = await this.alertController.create({
      header: 'สร้างรายการ',
      inputs: [{
        name: 'task',
        placeholder: 'ระบุข้อความ'
      }],
      buttons: [{
        text: 'ยกเลิก', role: 'cancel'
      },
      {
        text: 'สร้าง',
        handler: data => {
          if (data.task !== '') {
            this.items.push({
              title: data.task,
              done: false
            });
          }
          return data.task;
        }
      }
      ]
    });
    await alert.present();
  }

  async edit(item: any, slidingItem: IonItemSliding) {
    const alert = await this.alertController.create({
      header: 'แก้ไขรายการ',
      inputs: [{
        name: 'task',
        placeholder: 'ระบุข้อความ',
        value: item.title
      }],
      buttons: [{
        text: 'ยกเลิก', role: 'cancel'
      },
      {
        text: 'แก้ไข',
        handler: data => {
          if (data.task !== '') {
            item.title = data.task;
          }
          slidingItem.close();

          return data.task;
        }
      }
      ]
    });
    await alert.present();
  }
}
