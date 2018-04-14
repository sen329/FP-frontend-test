import { Component, OnInit } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames()
  }
  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games.slice(1, 5));
  }
}
