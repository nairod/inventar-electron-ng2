import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {InventarService} from './services/inventarService';
import {NotificationService} from './services/notificationService';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {InventarResolver} from './resolvers/schmuckResolver';
import {appRoutingProviders, APP_ROUTING} from './appRoutes';
import {RootComponent} from './components/root/root';
import {SchmuckDetailsComponent} from './components/schmuckdetails/schmuckdetails';
import {InventarListeComponent} from './components/inventarliste/inventarliste';
import {FooterComponent} from './components/footer/footer';

@NgModule({
    imports: [BrowserModule, APP_ROUTING],
    declarations: [RootComponent, SchmuckDetailsComponent, InventarListeComponent, FooterComponent],
    bootstrap: [RootComponent],
    providers: [
        appRoutingProviders,
        InventarService,
        InventarResolver,
        NotificationService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})
export class AppModule {
}
