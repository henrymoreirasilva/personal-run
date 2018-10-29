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
    this.userProvider.get().then((res) => {
      this.userLogged = res;
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
          this.userProvider.create(this.userLogged)
        }
      }
    })
  }

  logout() {
    this.userProvider.remove();
    this.formLogin.password = '';
    this.userLogged = null;
  }
}
