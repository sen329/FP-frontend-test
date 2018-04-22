import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';
import { AuthService } from '../auth.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;
  comment: Comment;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
   this.gameService.updateGame(this.game, id)
     .subscribe(() => this.goBack());
 }

 delete(): void{
   const id = this.comment.id;
   this.gameService.deleteComment(id, this.comment)
   .subscribe(res =>{
     console.log('should be deleted')
       window.location.reload();
   },
   err=> console.log(err.error)
 );
 }

  goBack(): void {
  this.location.back();
}

  logout(){
    this.authService.logout();
  }
}
