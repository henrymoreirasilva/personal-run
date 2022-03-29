import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  mensagem: string = '';
  retorno: string = '';
  user: any;
  centralMensagens: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MessagePage');
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCentralMensagens();
  }

  enviarMensagem() {
    //this.userProvider.get('user').then((res) => {
      this.userProvider.sendMessage(this.user, this.mensagem).subscribe((res: any) => {
        if (!res.error) {
          this.mensagem = '';
          this.retorno = 'Mensagem enviada.'
        }
      })
    //})
  }

  getCentralMensagens() {
    this.userProvider.getCentralMensagens(this.user).subscribe((res: any) => {
      if (res.data) {
        this.centralMensagens = res.data;
      }
    })
  }

  setLeituraCentralMensagens(idMensagem) {

      this.userProvider.setLeituraCentralMensagens(idMensagem, this.user.id).subscribe((res: any) => {
        if (!res.error) {
          document.getElementById('card-' + idMensagem).remove();
        }
      });

  }

}
