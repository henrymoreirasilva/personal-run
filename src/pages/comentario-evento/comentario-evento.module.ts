import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioEventoPage } from './comentario-evento';

@NgModule({
  declarations: [
    ComentarioEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentarioEventoPage),
  ],
})
export class ComentarioEventoPageModule {}
