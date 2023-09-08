import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-tic-tac-toe';
  constructor(public gameService: GameService) {
  }
  resetBoard() {
    this.gameService.resetBoard();
  }
}
