import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';

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
import { MensagemDoTreinoPage } from '../pages/mensagem-do-treino/mensagem-do-treino';
import { CorridaNomenclaturasPage } from '../pages/corrida-nomenclaturas/corrida-nomenclaturas';
import { ZonasDeTreinamentoPage } from '../pages/zonas-de-treinamento/zonas-de-treinamento';
import { PaceDeProvaPage } from '../pages/pace-de-prova/pace-de-prova';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CorridaPage,
    ComentarioEventoPage,
    FichaPage,
    ComentarioExercicioPage,
    CadastroPage,
    MessagePage,
    MensagemDoTreinoPage,
    CorridaNomenclaturasPage,
    ZonasDeTreinamentoPage,
    PaceDeProvaPage
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
    MessagePage,
    MensagemDoTreinoPage,
    CorridaNomenclaturasPage,
    ZonasDeTreinamentoPage,
    PaceDeProvaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    FilePath,
    Camera
  ]
})
export class AppModule {}