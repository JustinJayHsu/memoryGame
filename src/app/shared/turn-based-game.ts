import { Observable, BehaviorSubject, Subject } from 'rxjs';
import * as _ from 'lodash';

export class TurnBasedGame {
    constructor(public players: Player[] = defaultPlayers()) { }
    currentPlayer: BehaviorSubject<Player> = new BehaviorSubject(this.players[0]);
    _turnDuration: number;
    _history;

    endGame: Subject<any> = new Subject();
    init() {
    }

    updatePlayer(player: Player) {
        let playerIndex = this.players.findIndex(_player => {
            return _player.name === player.name
        });
        this.players[playerIndex] = player;
    }

    getNextPlayer() {
        let playerIndex = this.players.findIndex(_player => {
            return _player.name === this.currentPlayer.value.name
        });
        return this.players[(playerIndex + 1) % this.players.length]
    }
}

const defaultPlayers = (): Player[] => {
    return [
        { name: 'player1' },
        { name: 'player2' }
    ]
}

export interface Player {
    name: string;
    state?;
}

