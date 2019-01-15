import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CorridaNomenclaturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-corrida-nomenclaturas',
  templateUrl: 'corrida-nomenclaturas.html',
})
export class CorridaNomenclaturasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CorridaNomenclaturasPage');
  }

  dismiss() {
    this.viewController.dismiss();
  }


}
