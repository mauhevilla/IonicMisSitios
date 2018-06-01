import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { MisTabsPage } from '../pages/mis-tabs/mis-tabs';
import { DbProvider } from '../providers/db/db';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public db: DbProvider,
    private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.Session.subscribe(session => {
        if (session) {
          this.rootPage = 'MisTabsPage';
        }
        else {
          this.rootPage = 'LoginPage';
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
      this.db.openDb()
        .then(() => this.db.createTableSitios())
    });
  }
            
}
