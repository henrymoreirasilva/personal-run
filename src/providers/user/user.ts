import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  uri: string = 'http://aprun.web7053.uni5.net/api';

  constructor(public http: HttpClient, public storage: Storage) {
    //console.log('Hello UserProvider Provider');
  }

  create(name: string, data: object) {
    return this.storage.set(name, data);
  }

  get(name: string): Promise<any> {
    return this.storage.get(name);
  }

  // Quando deslogar deve remova do storage
  remove(name: string) {
    this.storage.remove(name);
  }

  login(data) {
    let queryString = `user=${data.user}&password=${data.password}`
    return this.http.post(`${this.uri}/auth.php`, queryString, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  getPlanos(id) {
    return this.http.get(`${this.uri}/treino/?p=${id}`);
  }

  getCorridaDia(planejamento, date) {
    return this.http.get(`${this.uri}/treino/corrida/?req=dia&pl=${planejamento}&date=${date}`);


  }

  getDiasComEvento(planejamento, mes, ano) {
    return this.http.get(`${this.uri}/treino/corrida/?req=diasevento&pl=${planejamento}&m=${mes}&y=${ano}`);

  }

  updateComent(evento, comentario) {
    let queryString = `req=obs&evento=${evento}&coment=${comentario}`;
    return this.http.post(`${this.uri}/treino/corrida/index.php`, queryString, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  getMusculacao(planejamento) {
    return this.http.get(`${this.uri}/treino/musculacao/?req=treino&pl=${planejamento}`);


  }

  updateComentExercicio(exercicio, comentario) {
    let queryString = `req=coment&pl=${exercicio.planejamento}&d=${exercicio.dia}&i=${exercicio.item}&coment=${comentario}`;
    return this.http.post(`${this.uri}/treino/musculacao/index.php`, queryString, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  
  /*exist() {
    this.get().then(res => {
      console.log('resultado >>> ', res);
      if (res) {
        console.log('resultado IF');
        return true;
      } else {
        console.log('resultado else');
        return false;
      }
    });
  }*/
}
