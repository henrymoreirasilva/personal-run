import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the MensagemDoTreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagem-do-treino',
  templateUrl: 'mensagem-do-treino.html',
})
export class MensagemDoTreinoPage {
  corrida: any;
  musculacao: any;
  plano: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public userProvider: UserProvider) {
    this.corrida = this.navParams.get('corrida');
    this.musculacao = this.navParams.get('musculacao');
  }

  ionViewDidLoad() {
    
  }

  
  dismiss() {
    this.viewController.dismiss();
  }

  okMensagem() {
    if (this.corrida.descricao != '') {
      this.plano = this.corrida.planejamento;
    } else {
      if (this.musculacao.descricao != '') {
        this.plano = this.musculacao.planejamento;
      }
    }
    if (this.plano) {
      this.userProvider.setMensagemLida(this.plano).subscribe(() => {
        this.dismiss();
      });
    }

  }
}
