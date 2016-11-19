import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBCyR5FkA8HhQRbJVExi_i883N3WgICw0Y',
  authDomain: 'todo2-1eaf8.firebaseapp.com',
  databaseURL: 'https://todo2-1eaf8.firebaseio.com',
  storageBucket: 'todo2-1eaf8.appspot.com',
  messagingSenderId: "534320814263"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule { }
