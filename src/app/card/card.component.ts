import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('model') model: Card;
  card: Card;
  constructor() { }
  ngOnInit() { }
}
