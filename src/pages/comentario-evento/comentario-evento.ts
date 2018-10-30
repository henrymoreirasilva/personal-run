import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ComentarioEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentario-evento',
  templateUrl: 'comentario-evento.html',
})
export class ComentarioEventoPage {
  comentario: string;
  evento: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public viewController: ViewController) {
    this.evento = this.navParams.get('evento')
    this.comentario = this.evento.observacao;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ComentarioEventoPage');
  }

  dismiss(res) {
    this.viewController.dismiss(res);
  }

  enviarComentario() {
    this.userProvider.updateComent(this.evento.evento, this.comentario).subscribe((res: any) => {
      this.dismiss(res);
    });
  }

}
