import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schmuck } from '../../models/schmuck';
import { InventarService } from '../../services/inventarService';

@Component({
  moduleId: module.id,
  styles: ['.clickable {cursor:pointer}'],
  templateUrl: 'inventarliste.html'
})
export class InventarListeComponent implements OnInit {

  private inventarliste: Array<Schmuck>;
  constructor(private _inventarService: InventarService, private _router: Router) {

  }

  public ngOnInit(): void {
    this.listInventar();
  }

  listInventar() {
    this._inventarService.listInventar()
      .then((inventarliste: Array<Schmuck>) => {
        this.inventarliste = inventarliste;
      },
      (err) => {
        console.log(err);
      }
      );
  }

  public openSchmuck(id: number) {
    this._router.navigate([`/schmuck/${id}`]);
  }
}
