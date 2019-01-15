import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';
import { CorridaPage } from '../pages/corrida/corrida';
import { FichaPage } from '../pages/ficha/ficha';
import { MessagePage } from '../pages/message/message';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  planos: any;
  user: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private userProvider: UserProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Cadastro', component: HomePage },
      { title: 'Corrida', component: CorridaPage },
      { title: 'Musculação', component: FichaPage },
      { title: 'Mensagem', component: MessagePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if (page.title == 'Corrida') {
      this.userProvider.get('user').then(res => {
        this.user = res;

        this.userProvider.get('planos').then((res) => {
          this.planos = res;
          this.nav.setRoot(page.component, { 'planos': this.planos, 'user': this.user });
        })

      })


    } else if (page.title == 'Musculação') {
      this.userProvider.get('user').then(res => {
        this.user = res;

        this.userProvider.get('planos').then((res) => {
          this.planos = res;

          this.nav.setRoot(page.component, { 'planos': this.planos, 'user': this.user });
        })
      })

    } else if (page.title == 'Mensagem') {
      this.userProvider.get('user').then(res => {
        this.user = res;
        this.nav.setRoot(page.component, { 'user': this.user });
      })

    } else {
      this.nav.setRoot(page.component);
    }



  }
}
