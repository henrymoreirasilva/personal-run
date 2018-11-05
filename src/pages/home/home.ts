import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userLogged: any;
  formLogin: any = {id:'', name:'', alias:'', image:'', password:'09781628626', user: 'felipe@zoomwi.com.br'};

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public modalController: ModalController) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userLogged = null;
    this.userProvider.get('user').then((res) => {
      this.userLogged = res;

      if (this.userLogged) {
        this.getPlanos(this.userLogged.id);
      }
    });
  }

  login() {
    this.userProvider.login(this.formLogin).subscribe((res: any) => {
      if (res.error) {
        console.log(res.errormsg);
      } else {
        if (res.error) {
          console.log(res.msgerror);
        } else {
          this.userLogged = res.data;
          this.userProvider.create('user', this.userLogged);
          this.getPlanos(this.userLogged.id);
        }
      }
    })
  }

  logout() {
    this.userProvider.remove('user');
    this.userProvider.remove('planos');
    this.formLogin.password = '';
    this.userLogged = null;
  }

  getPlanos(id) {
    this.userProvider.getPlanos(id).subscribe((res: any) => {
      this.userProvider.create('planos', res.data);
    })
  }

  showFormCadastro() {
    const modal = this.modalController.create(CadastroPage, {'user': this.userLogged});
    modal.onDidDismiss(res => {
      
      if (res.error) {

      } else if (res.data) {
        console.log('atribuir', res.data);
        this.userLogged = res.data;
      }

    });
    modal.present();
  }
}
