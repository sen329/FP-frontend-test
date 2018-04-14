import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail-user',
  templateUrl: './game-detail-user.component.html',
  styleUrls: ['./game-detail-user.component.css']
})
export class GameDetailUserComponent implements OnInit {
  @Input() game: Game;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }

}
