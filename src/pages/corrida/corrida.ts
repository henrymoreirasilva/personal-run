import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ModalController } from 'ionic-angular';
import { ComentarioEventoPage } from '../comentario-evento/comentario-evento';
import { MensagemDoTreinoPage } from '../mensagem-do-treino/mensagem-do-treino';
import { CorridaNomenclaturasPage } from '../corrida-nomenclaturas/corrida-nomenclaturas'
import { ZonasDeTreinamentoPage } from '../zonas-de-treinamento/zonas-de-treinamento';
import { PaceDeProvaPage } from '../pace-de-prova/pace-de-prova';

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
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  currentMonth: any;
  currentMonthNum: any;
  currentYear: any;
  currentDate: any;
  selectedDate: any;
  diasComEvento: Array<any> = new Array();

  planos: any;
  corrida: any;
  eventos: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public modalController: ModalController) {
    this.planos = this.navParams.get('planos');
    this.corrida = this.planos.corrida;
    this.user = this.navParams.get('user');
    this.date = new Date();

  }

  ngOnInit(): void {
    this.getDaysOfMonth();
  }

  ionViewDidLoad() {
    if (this.corrida.descricao != '' && this.corrida.mensagemLida != 1) {
      this.showMessage();
    }
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentMonthNum = this.date.getMonth() + 1;
    this.currentYear = this.date.getFullYear();
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }


    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i + 1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    //var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
    for (var i = 0; i < (6 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i + 1);

    }
    var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push(i);
      }
    }

    this.selectedDate = { 'day': this.currentDate, 'month': this.currentMonthNum, 'year': this.currentYear };

    this.clickDay(this.currentDate);

    this.getDiasComEvento();
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  goToToday() {
    this.date = new Date();
    this.getDaysOfMonth();
  }

  clickDay(day) {
    this.eventos = [];
    this.selectedDate = { 'day': day, 'month': this.currentMonthNum, 'year': this.currentYear };
    let date: string = this.currentYear + '-' + this.currentMonthNum + '-' + day;
    this.userProvider.getCorridaDia(this.corrida.planejamento, date).subscribe((res: any) => {
      this.eventos = res.data;
    })
  }

  showForm(evento) {
    const modal = this.modalController.create(ComentarioEventoPage, { 'evento': evento });
    modal.onDidDismiss(res => {
      if (res.error) {

      } else if (res.data.observacao) {
        evento.observacao = res.data.observacao;
      }

    });
    modal.present();
  }

  getDiasComEvento() {
    this.userProvider.getDiasComEvento(this.corrida.planejamento, this.currentMonthNum, this.currentYear).subscribe((res: any) => {
      this.diasComEvento = res.data;
    })
  }

  diaPossuiEvento(dia) {
    return this.diasComEvento.indexOf(`${dia}`) > -1;
  }

  showMessage() {
    const modalMessage = this.modalController.create(MensagemDoTreinoPage, { 'corrida': this.corrida, 'musculacao': { descricao: '' } });
    modalMessage.onDidDismiss(() => {
      
      this.corrida.mensagemLida = 1;
      this.userProvider.create('planos', this.planos);
    });
    modalMessage.present();
  }

  showNomenclaturas() {

    const modalInfo1 = this.modalController.create(CorridaNomenclaturasPage);

    modalInfo1.present();
  }

  showZonasTreinamento() {

    const modalInfo2 = this.modalController.create(ZonasDeTreinamentoPage);

    modalInfo2.present();
  }

  showPaceProva() {

    const modalInfo3 = this.modalController.create(PaceDeProvaPage);

    modalInfo3.present();
  }

}
