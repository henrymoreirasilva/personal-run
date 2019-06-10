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
  uri: string = 'https://www.aprun.com.br/api';

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

  updateCadastro(user) {
    let queryString = Object.keys(user).map(key => key + '=' + user[key]).join('&');    // https://howchoo.com/g/nwywodhkndm/how-to-turn-an-object-into-query-string-parameters-in-javascript
    queryString += '&req=cad';
    return this.http.post(`${this.uri}/treino/aluno/index.php`, queryString, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  sendMessage(user, message) {
    let queryString = `req=send&name=${user.name}&email=${user.email}&image=${user.image}&message=${message}`;
    return this.http.post(`${this.uri}/treino/aluno/index.php`, queryString, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  setMensagemLida(evento) {
    let queryString = `req=setleituramsg&evento=${evento}`;
    return this.http.post(`${this.uri}/treino/index.php`, queryString, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  getCentralMensagens(user) {
    return this.http.get(`${this.uri}/treino/aluno/index.php?req=mensagem&ps=${user.id}`);
  }

  setLeituraCentralMensagens(idMensagem, idUser) {
    let queryString = `req=setleituracentralmsg&mensagem=${idMensagem}&user=${idUser}`;
    return this.http.post(`${this.uri}/treino/aluno/index.php`, queryString, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
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
