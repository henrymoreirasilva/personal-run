import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioExercicioPage } from './comentario-exercicio';

@NgModule({
  declarations: [
    ComentarioExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentarioExercicioPage),
  ],
})
export class ComentarioExercicioPageModule {}
