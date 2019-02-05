import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  user: any;
  errorMsg: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewController: ViewController, 
    public userProvider: UserProvider, 
    public filePath: FilePath,
    private camera: Camera,
    public platform: Platform) {

    this.user = this.navParams.get('user');

    this.errorMsg = '';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroPage');
  }

  dismiss(res) {
    this.viewController.dismiss(res);
  }
 
  updateCadastro() {
    this.userProvider.updateCadastro(this.user).subscribe((res: any) => {
      if (res.error) {
        this.errorMsg = res.errorMsg;
      } else {
        this.userProvider.remove('user');
        this.userProvider.create('user', res.data).then(() => {
          this.dismiss(res);
        })
      }
      
    });

    /*
      alias: "felipinho"
      birth: "00/00/0000"
      id: "129"
      image: "http://aprun.web7053.uni5.net/imagens/fotosClientes/f129.jpg"
      name: "FELIPE"
      phone1: ""
      phone2: "(34) 3332-0819"
      profession: ""
    */
  }

  takeFoto(source: number = 1, mediaType: number = 1) {
    const options: CameraOptions = {
      quality: 100,
      mediaType: mediaType,
      sourceType: source,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG
    }

    this.camera.getPicture(options)
    .then((imageData) => {
      console.log(this.platform.getPlatformConfig);
      if (source == 0 && this.platform.is('android')) {
        this.filePath.resolveNativePath(imageData)
        .then((filePath) => {
          this.user.image = filePath;
        });
      } else {
        this.user.image = imageData;
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
