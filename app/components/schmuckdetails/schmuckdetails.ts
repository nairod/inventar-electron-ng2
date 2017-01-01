import {Component, OnInit} from '@angular/core';
import {Schmuck} from '../../models/schmuck';
import {NotificationService} from '../../services/notificationService';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'schmuckdetails.html'
})
export class SchmuckDetailsComponent implements OnInit {

    public schmuck: Schmuck = null;

    constructor(private _route: ActivatedRoute, private _notificationService: NotificationService) {

    }

    public ngOnInit(): void {
        this._route.data.forEach((data: { schmuck: Schmuck }) => {
            this.schmuck = data.schmuck;
        });
    }

    public notify() {
        let notification = this._notificationService.notify('Miou!',
            `This is ${this.schmuck.name}, miou!`, `http://placekitten.com/100/100`);
        notification.onclick = () => {
            // do something here
        };
    }
}
