import { Observable, BehaviorSubject, Subject } from 'rxjs';
import * as _ from 'lodash';
export abstract class TurnBasedGame {
    constructor(public players: Player[] = defaultPlayers()) { }
    currentPlayer: BehaviorSubject<Player> = new BehaviorSubject(this.players[0]);
    _turnDuration: number;
    _history;

    turn = 0;
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

    abstract endTurn();
    abstract resetGame();
    abstract isGameOver();

}

const defaultPlayers = (): Player[] => {
    return [
        { name: 'player1' }
    ]
}

export interface Player {
    name: string;
    state?;
}

