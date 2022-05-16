import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from './player.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  players:Player[]  = [];
  diceRolled: boolean = false;
  dice1: number = 0;
  dice2: number = 0;
  boardNumbers: number[] = [];
  currentPlayer:Player;
  messageForDoubles: string;
  doublesMessage: boolean = false;
  casePosition: number;
  messageForCases: string;
  messageForOverShoot: string;
  shootMessage: boolean = false;
  caseMessage: boolean = false;
  isWinner:boolean = false;
  winPlayer: string =''
  @ViewChild('pName') pName: NgForm;
  isEditName: boolean = false;

  constructor() {}

  

  ngOnInit(): void {
    this.newGame();
    
  }

  editName() {
    if(this.isEditName == false) {
      this.isEditName = true;
    }
    else {
      this.isEditName = false;
    }
  } 

  onCancel() {
    let player1: Player = new Player('Player-1', 0, 1);
    let player2: Player = new Player('Player-2', 0, 2);
    let player3: Player = new Player('Player-3', 0, 3);
    let player4: Player = new Player('Player-4', 0, 4);

    this.players = [];
    this.players.push(player1, player2, player3, player4); 
    this.currentPlayer = this.players[0];
    this.isEditName = false;
  }

  activePlayer(i: any) {
    
    if(this.dice1 == this.dice2) {
      this.currentPlayer = this.players[i];
      this.messageForDoubles = 'Nice job, throw again !';
      this.doublesMessage = true;
    }
    else {
      this.currentPlayer = this.players[i+1];
      this.doublesMessage = false;
    };
    if (this.currentPlayer == this.players[4]) {
      this.currentPlayer = this.players[0];
      this.doublesMessage = false;
    };
  }; 

  throwDice(name: any, i: any) {
    for (let player of this.players) {
      if(name === player.name) {
        this.dice1 = Math.floor(Math.random()*(6-1+1)+1);
        this.dice2 = Math.floor(Math.random()*(6-1+1)+1);
        let totalRolledDice = this.dice1 + this.dice2;
        player.playerPosition += totalRolledDice;
        this.casePosition = player.playerPosition;
        console.log(player.playerPosition);
        console.log(player.name);
        this.diceRolled = true;
        this.caseMessage = false;
        this.shootMessage = false;
        this.activePlayer(i);
        this.overShoot(i);
        this.casesForGame(i);
      };
    };
  };

  overShoot(i:any) {
    if(this.players[i].playerPosition > 100) {
      let stepsBack = this.casePosition - 100;
      this.players[i].playerPosition = this.players[i].playerPosition - (this.dice1 + this.dice2) - stepsBack;
      this.messageForOverShoot = `Ups, you overshoot by ${stepsBack} square(s), need to go back to number ${this.players[i].playerPosition}`;
      this.shootMessage = true;
      if(this.players[i].playerPosition == 92) {
        this.players[i].playerPosition = 88
        this.messageForCases = 'Unfortunately 92 gets you down to number 88';
        this.caseMessage = true;
      };
      if(this.players[i].playerPosition == 89) {
        this.players[i].playerPosition = 68;
        this.messageForCases = 'Unfortunately 89 gets you down to number 68';
        this.caseMessage = true;
      };
      if(this.players[i].playerPosition == 95) {
        this.players[i].playerPosition = 75;
        this.messageForCases = 'Unfortunately 95 gets you down to number 75';
        this.caseMessage = true;
      };
      if(this.players[i].playerPosition == 99) {
        this.players[i].playerPosition = 80;
        this.messageForCases = 'Unfortunately 99 gets you down to number 80';
        this.caseMessage = true;
      };
      if(this.players[i].playerPosition == 87) {
        this.players[i].playerPosition = 94;
        this.messageForCases = 'Great, you landed on 87, you can go up the ladder to number 94 !';
        this.caseMessage = true;
      };
    };
  };

  casesForGame(i: any) {
    switch(this.casePosition) {
      case 2: this.players[i].playerPosition = 38;
              this.messageForCases = `Great, you landed on 2, you can go up the ladder to number 38 !`;
              this.caseMessage = true;
      break;
      case 7: this.players[i].playerPosition = 14;
              this.messageForCases = 'Great, you landed on 7, you can go up the ladder to number 14 !';
              this.caseMessage = true;
      break;
      case 8: this.players[i].playerPosition = 31;
              this.messageForCases = 'Great, you landed on 8, you can go up the ladder to number 31 !';
              this.caseMessage = true;
      break;
      case 15: this.players[i].playerPosition = 26;
               this.messageForCases = 'Great, you landed on 15, you can go up the ladder to number 26 !';
               this.caseMessage = true;
      break;
      case 16: this.players[i].playerPosition = 6;
               this.messageForCases = 'Too bad you landed on 16, you need to go down to number 6';
               this.caseMessage = true;
      break;
      case 21: this.players[i].playerPosition = 42;
               this.messageForCases = 'Great, you landed on 21, you can go up the ladder to number 42 !';
               this.caseMessage = true;
      break;
      case 28: this.players[i].playerPosition = 84;
               this.messageForCases = 'Great, you landed on 28, you can go up the ladder to number 84 !';
               this.caseMessage = true;
      break;
      case 36: this.players[i].playerPosition = 44;
               this.messageForCases = 'Great, you landed on 36, you can go up the ladder to number 44 !';
               this.caseMessage = true;
      break;
      case 46: this.players[i].playerPosition = 25;
               this.messageForCases = 'Too bad you landed on 46, you need to go down to number 25';
               this.caseMessage = true;
      break;
      case 49: this.players[i].playerPosition = 11;
               this.messageForCases = 'Too bad you landed on 49, you need to go down to number 11';
               this.caseMessage = true;
      break;
      case 51: this.players[i].playerPosition = 67;
               this.messageForCases = 'Great, you landed on 51, you can go up the ladder to number 67 !';
               this.caseMessage = true;
      break;
      case 62: this.players[i].playerPosition = 19;
               this.messageForCases = 'Too bad you landed on 62, you need to go down to number 19';
               this.caseMessage = true;
      break;
      case 64: this.players[i].playerPosition = 60;
               this.messageForCases = 'Too bad you landed on 64, you need to go down to number 60';
               this.caseMessage = true;
      break;
      case 71: this.players[i].playerPosition = 91;
               this.messageForCases = 'Great, you landed on 71, you can go up the ladder to number 91 !';
               this.caseMessage = true;
      break;
      case 74: this.players[i].playerPosition = 53;
               this.messageForCases = 'Too bad you landed on 74, you need to go down to number 53';
               this.caseMessage = true;
      break;
      case 78: this.players[i].playerPosition = 98;
               this.messageForCases = 'Great, you landed on 78, you can go up the ladder to number 98 !';
               this.caseMessage = true;
      break;
      case 87: this.players[i].playerPosition = 94;
               this.messageForCases = 'Great, you landed on 87, you can go up the ladder to number 94 !';
               this.caseMessage = true;
      break;
      case 89: this.players[i].playerPosition = 68;
               this.messageForCases = 'Too bad you landed on 89, you need to go down to number 68';
               this.caseMessage = true;
      break;
      case 92: this.players[i].playerPosition = 88;
               this.messageForCases = 'Too bad you landed on 92, you need to go down to number 88';
               this.caseMessage = true;
      break;
      case 95: this.players[i].playerPosition = 75;
               this.messageForCases = 'Too bad you landed on 95, you need to go down to number 75';
               this.caseMessage = true;
      break;
      case 99: this.players[i].playerPosition = 80;
               this.messageForCases = 'Too bad you landed on 99, you need to go down to number 80';
               this.caseMessage = true;
      break;
      case 100: 
                this.players[i].playerPosition = 100;
                this.winPlayer = this.players[i].name;
                this.isWinner = true;
      break 
    };
  };
  
  resetGame() {
    this.isWinner = false;
    window.location.reload();
  };

  newGame() {
    this.boardNumbers = []
    for( let i = 0; i <= 100; i++) {
      this.boardNumbers.push(i);
    };
    let player1: Player = new Player('Player-1', 0, 1);
    let player2: Player = new Player('Player-2', 0, 2);
    let player3: Player = new Player('Player-3', 0, 3);
    let player4: Player = new Player('Player-4', 0, 4);

    this.players.push(player1, player2, player3, player4); 
    this.currentPlayer = this.players[0];
  };

};

  

