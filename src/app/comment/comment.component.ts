import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';
import { GameService } from '../game.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Comment;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  postComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.comment);
    this.gameService.postComment(id,this.comment)
    .subscribe(res => {
      window.location.reload();
    },
    err=> console.log(err.error)
  );
  }


}
