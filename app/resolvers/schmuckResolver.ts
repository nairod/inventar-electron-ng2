import {Injectable} from '@angular/core';
import {Schmuck} from '../models/schmuck';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {InventarService} from '../services/inventarService';

@Injectable()
export class InventarResolver implements Resolve<Schmuck> {

    constructor(private _inventarService: InventarService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Schmuck {
        return this._inventarService.getSchmuckById(parseInt(route.params['id']));
    }

}
