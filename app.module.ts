import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
//para la db local 
import { DbProvider } from '../providers/db/db';
import { SQLite } from '@ionic-native/sqlite';

import { LaunchNavigator } from '@ionic-native/launch-navigator';
// fiberbase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const firebaseConfig = {
  apiKey: "AIzaSyDRE6iMHNHOlkCXzCJdYXOcp4pcDCZzAf8",
    authDomain: "imagenes-53dfa.firebaseapp.com",
    databaseURL: "https://imagenes-53dfa.firebaseio.com",
    projectId: "imagenes-53dfa",
    storageBucket: "imagenes-53dfa.appspot.com",
    messagingSenderId: "520524407157"
};

@NgModule({
  declarations: [
    MyApp  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,Camera,
    DbProvider, SQLite,
    LaunchNavigator,
    AuthProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}
