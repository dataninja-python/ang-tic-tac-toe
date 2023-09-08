import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: string[] = Array(9).fill(null);
  currentPlayer: string = 'X';
  winner: string | any = null;
  message: string = '';

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if(this.checkWinner()) {
        this.winner = this.currentPlayer;
        this.message = `${this.winner} wins!`;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner() :boolean {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return true;
      }
    }
    return false;
  }

  resetBoard() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.message = '';
  }

  constructor() { }
}
