import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ComentarioExercicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentario-exercicio',
  templateUrl: 'comentario-exercicio.html',
})
export class ComentarioExercicioPage {
  exercicio: any;
  comentario: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public userProvider: UserProvider) {
    this.exercicio = this.navParams.get('exercicio');
    this.comentario = this.exercicio.comentarioAluno;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ComentarioExercicioPage');
  }

  dismiss(res) {
    this.viewController.dismiss(res);
  }

  enviarComentario() {
    this.userProvider.updateComentExercicio(this.exercicio, this.comentario).subscribe((res: any) => {
      this.dismiss(res);
    });
  }

}
