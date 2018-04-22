import { Component, OnInit } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  add: any = {};


  constructor(private gameService: GameService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getGames()
  }
  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }
  addGame(): void {
  this.gameService.addGame(this.add)
  .subscribe(res => {
    window.location.reload();
  },
  err=> console.log(err.error)
);

}

  delete(game: Game): void {
    this.games = this.games.filter(h => h !== game);
    this.gameService.deleteGame(game)
      .subscribe(res => {
        window.location.reload();
      },
      err=> console.log(err.error)
    );
  }

  get isLoggedin(){
    return !!localStorage.getItem('token');
  }
get Username(){
  return localStorage.getItem('username')

}


}
