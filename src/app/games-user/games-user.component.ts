import { Component, OnInit } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';
@Component({
  selector: 'app-games-user',
  templateUrl: './games-user.component.html',
  styleUrls: ['./games-user.component.css']
})
export class GamesUserComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames()
  }
  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }
}
