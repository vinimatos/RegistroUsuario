import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginProvider} from "../providers/login-provider";
import  firebase from 'firebase';

const firebaseConfig  = {
  apiKey: "AIzaSyDdVEEQPxq3E2TEsIeEYovupvQOmyktCsk",
  authDomain: "testecadastroapp.firebaseapp.com",
  databaseURL: "https://testecadastroapp.firebaseio.com",
  projectId: "testecadastroapp",
  storageBucket: "testecadastroapp.appspot.com",
  messagingSenderId: "243589665855"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsuarioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor (){
    firebase.initializeApp(firebaseConfig);
  }
}
