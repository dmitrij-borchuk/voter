import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as firebase from 'firebase';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const config = {
  apiKey: "AIzaSyBQh-FTwVg6DQR3UK_bWuMYHGJ7YIBYFyM",
  authDomain: "voter-d9177.firebaseapp.com",
  databaseURL: "https://voter-d9177.firebaseio.com",
  projectId: "voter-d9177",
  storageBucket: "voter-d9177.appspot.com",
  messagingSenderId: "1055075519782"
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

const fbapp = firebase.initializeApp(config);
