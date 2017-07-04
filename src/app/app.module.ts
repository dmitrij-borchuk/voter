import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth/auth.service';
import { VotingsProviderService } from './services/votings-provider/votings-provider.service';

import { AppHeader } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { VotingsPageComponent } from './components/votings-page/votings-page.component';
import { VotingsListComponent } from './components/votings-list/votings-list.component';
import { VotingEditComponent } from './components/voting-edit/voting-edit.component';
import { VotingEditPageComponent } from './components/voting-edit-page/voting-edit-page.component';

const firebaseConfig = {
  apiKey: "AIzaSyBQh-FTwVg6DQR3UK_bWuMYHGJ7YIBYFyM",
  authDomain: "voter-d9177.firebaseapp.com",
  databaseURL: "https://voter-d9177.firebaseio.com",
  projectId: "voter-d9177",
  storageBucket: "voter-d9177.appspot.com",
  messagingSenderId: "1055075519782"
};

// const fbapp = firebase.initializeApp(config);
const appRoutes: Routes = [
  { path: 'votings', component: VotingsPageComponent },
  { path: 'voting-edit/:id', component: VotingEditPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/votings' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    LoginComponent,
    LoginPageComponent,
    VotingsPageComponent,
    VotingsListComponent,
    VotingEditComponent,
    VotingEditPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    VotingsProviderService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
