import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import {Usuario} from "../../model/usuario";

@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {
    usuario:Usuario;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginProvider: LoginProvider) {
    this.usuario = new Usuario();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  registrar(){
   this.loginProvider.cadastrar(this.usuario);
  }

}
