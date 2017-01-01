import {Injectable} from '@angular/core';
import {Schmuck} from '../models/schmuck';

@Injectable()
export class InventarService {

    private _inventar = Array<Schmuck>();

    constructor() {
        this._inventar.push(new Schmuck(1, 'Halskette silber', 'Halsschmuck', 140, 400));
        this._inventar.push(new Schmuck(2, 'Schmuckring gold', 'Schmuckring', 440, 1400));
        this._inventar.push(new Schmuck(3, 'Orhänger silber', 'Ohrschmuck', 340, 800));
        this._inventar.push(new Schmuck(4, 'Holzring silber', 'Holzschmuck', 140, 400));
    }

    public getInventarListe(): Array<Schmuck> {
        return this._inventar;
    }

    public getSchmuckById(id: number): Schmuck {
        return this._inventar.filter(schmuck => schmuck.id === id)[0];
    }
}
