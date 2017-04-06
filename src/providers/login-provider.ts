import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Usuario} from "../../../myAppTest/src/model/Usuario";
import firebase from 'firebase';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }


  cadastrar(usuario: Usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
     .then(result => console.log(result))
      .catch(error => console.log(error));
  }

}
