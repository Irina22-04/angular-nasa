import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppNasaTableComponent} from './app-nasa-table/app-nasa-table.component';
import {AppNasaAsteroidsComponent} from './app-nasa-asteroids/app-nasa-asteroids.component';
import {AppNasaAsteroidComponent} from './app-nasa-asteroid/app-nasa-asteroid.component';


const routes: Routes = [
  {path: '', component: AppNasaTableComponent},
  {path: 'item/:id', component: AppNasaAsteroidComponent},
  {path: 'asteroids', component: AppNasaAsteroidsComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
