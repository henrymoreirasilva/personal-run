import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CorridaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-corrida',
  templateUrl: 'corrida.html',
})
export class CorridaPage {
  planos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CorridaPage');
    this.userProvider.get('planos').then((res) => {
      this.planos =  res;
      console.log(this.planos);
    })
  }

}
