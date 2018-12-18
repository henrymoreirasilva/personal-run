import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public userProvider: UserProvider) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroPage');
  }

  dismiss(res) {
    this.viewController.dismiss(res);
  }

  updateCadastro() {
    this.userProvider.updateCadastro(this.user).subscribe((res: any) => {
      console.log('update', res);
      if (!res.error) {
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

}
