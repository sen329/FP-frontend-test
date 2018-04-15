import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesUserComponent } from './games-user/games-user.component';
import { GameDetailUserComponent } from './game-detail-user/game-detail-user.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardUserComponent },
  { path: 'detail/:id', component: GameDetailUserComponent },
  { path: 'games', component: GamesUserComponent },
  { path: 'editAdmin', component: GamesComponent },
  { path: 'detailEdit/:id', component: GameDetailComponent},
  { path: 'editAdmin', component: GamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
