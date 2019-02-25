import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { Card } from '../shared/card';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input('deck') deck: Card[];
  @Input('rows') set rows(value) {
    this._rows = _.range(value);
  }
  @Input('columns') set columns(value) {
    this._columns = _.range(value);
  }

  @Output() onCardClicked = new EventEmitter<number>();

  _rows; _columns; _deck;
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  getCard(rowIndex: number, columnIndex: number) {
    let cardIndex = this.getCardIndex(rowIndex, columnIndex)
    return this.deck[cardIndex];
  }

  onClick(rowIndex: number, columnIndex: number) {
    this.onCardClicked.emit(this.getCardIndex(rowIndex, columnIndex))
  }

  private getCardIndex = (rowIndex: number, columnIndex: number) =>
    rowIndex * this._rows.length + columnIndex;
}
