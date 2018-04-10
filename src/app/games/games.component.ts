import { Component, OnInit } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames()
  }
  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }
  add(title: string): void {
  title = title.trim();
  if (!title) { return; }
  this.gameService.addGame({ title } as Game)
    .subscribe(game => {
      this.games.push(game);
    });
}

delete(game: Game): void {
  this.games = this.games.filter(h => h !== game);
  this.gameService.deleteGame(game).subscribe();
}
}
