import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  constructor(public gameService: GameService) {}
  ngOnInit() :void {}
  makeMove(index: number) {
    this.gameService.makeMove(index);
  }

}
