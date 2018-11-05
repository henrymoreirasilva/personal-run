import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CorridaPage } from '../pages/corrida/corrida';
import { UserProvider } from '../providers/user/user';
import { ComentarioEventoPage } from '../pages/comentario-evento/comentario-evento';
import { FichaPage } from '../pages/ficha/ficha';
import { ComentarioExercicioPage } from '../pages/comentario-exercicio/comentario-exercicio';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { MessagePage } from '../pages/message/message';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CorridaPage,
    ComentarioEventoPage,
    FichaPage,
    ComentarioExercicioPage,
    CadastroPage,
    MessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CorridaPage,
    ComentarioEventoPage,
    FichaPage,
    ComentarioExercicioPage,
    CadastroPage,
    MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}