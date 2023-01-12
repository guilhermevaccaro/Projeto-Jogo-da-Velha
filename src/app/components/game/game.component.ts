import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  squares: any = [];
  xIsNext = true;
  ganhador = '';
  counter = 0;
  empate = '';
  freshpage = true;
  contraComputador: boolean = false;
  simboloComputador: string = '';

  constructor() {}

  ngOnInit(): void {}

  novoJogo(versusComputador: boolean) {
    this.contraComputador = versusComputador;
    this.simboloComputador = this.player == 'X' ? 'O' : 'X';
    this.squares = Array(9).fill(null);
    this.ganhador = '';
    this.empate = '';
    this.counter = 0;
    this.freshpage = false;
  }

  get player() {
    return this.xIsNext ?  'X' : 'O';
  }

  fazerJogada(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
      if(this.contraComputador && this.player == this.simboloComputador) {
        this.fazerJogadaComputador();
      }
    }
    this.ganhador = this.calculateWinner();
    if (!this.ganhador && this.counter == 9) {
      this.empate = 'sim';
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  fazerJogadaComputador(): void {
    var jogadasDisponiveis: any[] = [];
    var idx = this.squares.indexOf(null);
    while(idx != -1) {
      jogadasDisponiveis.push(idx);
      idx = this.squares.indexOf(null, idx + 1);
    }
    var jogada: number = Math.floor(Math.random() * jogadasDisponiveis.length);
    if(jogadasDisponiveis[jogada] != undefined) {
      this.fazerJogada(jogadasDisponiveis[jogada]);
    }
  }
}
