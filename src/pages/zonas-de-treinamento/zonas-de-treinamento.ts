import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ZonasDeTreinamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zonas-de-treinamento',
  templateUrl: 'zonas-de-treinamento.html',
})
export class ZonasDeTreinamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ZonasDeTreinamentoPage');
  }
  
  dismiss() {
    this.viewController.dismiss();
  }

}
