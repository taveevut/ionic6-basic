import {Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@awesome-cordova-plugins/camera/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  photos: Array<string> = [];

  constructor(
    private camera: Camera,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.photos.push(base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  async removePicture(index) {
    const confirm = await this.alertCtrl.create({
      message: 'โปรดยืนยันการลบอีกครั้ง !',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            // alert(this.photos.toString());
            alert(index + ' => ' + this.photos[index].toString());

            console.log('Agree');
            this.photos.slice(index, 1);
          }
        }
      ]
    });

    await confirm.present();
  }

}
