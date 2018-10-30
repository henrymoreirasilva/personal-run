import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userLogged: any;
  formLogin: any = {id:'', name:'', alias:'', image:'', password:''};

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {

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
    this.formLogin.password = '';
    this.userLogged = null;
  }

  getPlanos(id) {
    this.userProvider.getPlanos(id).subscribe((res: any) => {
      this.userProvider.create('planos', res.data);
    })
  }
}
