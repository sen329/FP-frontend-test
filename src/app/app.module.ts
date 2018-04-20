import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameService } from './game.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailUserComponent } from './game-detail-user/game-detail-user.component';
import { GamesUserComponent } from './games-user/games-user.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { NavComponent } from './nav/nav.component'



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GameSearchComponent,
    GameDetailUserComponent,
    GamesUserComponent,
    DashboardUserComponent,
    LoginComponent,
    RegisterComponent,
    CommentComponent,
    UserComponent,
    NavComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,

  ],
  providers: [
    GameService,
    MessageService,
    AuthService,
    UserService

  /* . . . */],
  bootstrap: [AppComponent]
})
export class AppModule { }
