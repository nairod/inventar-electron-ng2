import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarListeComponent } from './components/inventarliste/inventarliste';
import { SchmuckDetailsComponent } from './components/schmuckdetails/schmuckdetails';
import { InventarResolver } from './resolvers/schmuckResolver';

const appRoutes: Routes = [
    {
        path: 'schmuck/:id', resolve: {
            inventarliste: InventarResolver
        }, component: SchmuckDetailsComponent
    },
    { path: '', component: InventarListeComponent }

];

export const appRoutingProviders: any[] = [
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);
