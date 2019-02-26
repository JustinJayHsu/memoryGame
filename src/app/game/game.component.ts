import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Card } from '../shared/card';
import * as _ from 'lodash';
import { Player } from '../shared/turn-based-game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  form: FormGroup;
  rows: number; columns: number; deck: Card[];
  currentPlayer: Player;
  constructor(private fb: FormBuilder, private gameService: GameService) {
    this.gameService.currentPlayer.subscribe(currentPlayer => {
      this.currentPlayer = currentPlayer;
    })
    this.gameService.endGame.subscribe(endGame => {
      console.log('Game is over');
    })
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.fb.group({
      rows: [3, [Validators.min(1), Validators.required]],
      columns: [3, [Validators.min(1), Validators.required]],
    })
  }

  onSubmit() {
    let formValue = this.form.value;
    this.rows = formValue.rows;
    this.columns = formValue.columns;
    this.generateCards();
    this.gameService.totalCards = this.deck.length;
    this.gameService.updatePlayer(this.gameService.players[0]);
  }

  generateCards = () => {
    let tempDeck = _.range(this.rows * this.columns);
    tempDeck = _.shuffle(
      tempDeck.map(card => Math.floor(card / 2))
    );
    this.deck = tempDeck.map(card => new Card(card, false));
  }

  onCardClicked(event) {
    let cardClicked = this.deck[event];
    if (!cardClicked.faceUp) {
      this.gameService.cardClick(cardClicked)
    }
  }
}
