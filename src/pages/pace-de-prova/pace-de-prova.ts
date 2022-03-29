import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaceDeProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pace-de-prova',
  templateUrl: 'pace-de-prova.html',
})
export class PaceDeProvaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaceDeProvaPage');
  }

  dismiss () {
    this.viewController.dismiss()
  }

}
