import { Injectable } from '@angular/core';
import { Schmuck } from '../models/schmuck';
import * as Datastore from 'nedb';


@Injectable()
export class InventarService {

    private _inventar = Array<Schmuck>();
    private _inventarDB: any;

    constructor() {

        // Setup the database.
        this._inventarDB = new Datastore({
            filename: './inventar.json', // provide a path to the database file 
            autoload: true
        });
        let s1: Schmuck = new Schmuck(1, 'Halskette silber', 'Halsschmuck', 140, 400);
        this._inventarDB.insert(s1, function (err: any, doc: any) {
            console.log('Inserted', doc.name, 'with ID', doc._id);
        });


        this._inventar.push(s1);
        this._inventar.push(new Schmuck(2, 'Schmuckring gold', 'Schmuckring', 440, 1400));
        this._inventar.push(new Schmuck(3, 'Ohrhänger silber', 'Ohrschmuck', 340, 800));
        this._inventar.push(new Schmuck(4, 'Holzring silber', 'Holzschmuck', 140, 400));
    }

    listInventar() {
        return new Promise((resolve, reject) => {
            return this._inventarDB.find({}, ((err: Error, inventarliste: Array<Schmuck>) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(inventarliste);
                }
            }));
        })
    }

    public getSchmuckById(id: number): Schmuck {
        return this._inventar.filter(schmuck => schmuck.id === id)[0];
    }
}
