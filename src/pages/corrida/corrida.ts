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
  corrida: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
    this.corrida = this.navParams.get('corrida');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /*this.userProvider.get('planos').then((res) => {
      this.corrida =  res;
      console.log(this.corrida);
    })*/
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CorridaPage');
  }



}
