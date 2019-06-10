import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { ComentarioEventoPage } from '../comentario-evento/comentario-evento';
import { ComentarioExercicioPage } from '../comentario-exercicio/comentario-exercicio';
import { MensagemDoTreinoPage } from '../mensagem-do-treino/mensagem-do-treino';
//import { ComentarioExercicioPageModule } from '../comentario-exercicio/comentario-exercicio.module';

/**
 * Generated class for the FichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ficha',
  templateUrl: 'ficha.html',
})
export class FichaPage {
  planos: any;
  musculacao: any;
  user: any;
  treinos: Array<any> = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public modalController: ModalController) {
    this.planos = this.navParams.get('planos');
    this.musculacao = this.planos.musculacao;
    this.user = this.navParams.get('user');

  }

  ionViewDidLoad() {
    if (this.musculacao.descricao != '' && this.musculacao.mensagemLida != 1) {
      this.showMessage();
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMusculacao();
  }

  getMusculacao() {
    this.userProvider.getMusculacao(this.musculacao.planejamento).subscribe((res: any) => {
      let diaAtual: any;
      let indice: number;
      res.data.forEach(element => {
        if (diaAtual != element.dia) {
          indice = this.treinos.push({ 'nomeDia': element.nomeDia, 'exercicios': [] });
          indice--;

          diaAtual = element.dia;
        }

        this.treinos[indice].exercicios.push({
          'nomeExercicio': element.nomeExercicio,
          'nomeCarga': element.nomeCarga,
          'nomeRepeticao': element.nomeRepeticao,
          'nomeIntervalo': element.nomeIntervalo,
          'observacao': element.observacao,
          'comentarioAluno': element.comentarioAluno,
          'planejamento': element.planejamento,
          'dia': element.dia,
          'item': element.item

        });


      });
    })
  }

  showForm(exercicio) {
    const modal = this.modalController.create(ComentarioExercicioPage, { 'exercicio': exercicio });
    modal.onDidDismiss(res => {
      if (res.error) {

      } else if (res.data.comentarioAluno) {
        exercicio.comentarioAluno = res.data.comentarioAluno;
      }

    });
    modal.present();
  }

  showMessage() {
    const modalMessage = this.modalController.create(MensagemDoTreinoPage, { 'musculacao': this.musculacao, 'corrida': { descricao: '' } });
    modalMessage.onDidDismiss(() => {
      this.musculacao.mensagemLida = 1;
      this.userProvider.create('planos', this.planos);
    });
    modalMessage.present();
  }

}
