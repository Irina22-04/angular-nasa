import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../http-service/http.service';

import {AsteroidModel} from '../models/asteroid.model';

@Component({
  selector: 'app-nasa-asteroid',
  templateUrl: './app-nasa-asteroid.component.html',
  styleUrls: ['./app-nasa-asteroid.component.css']
})
export class AppNasaAsteroidComponent {

  id: number;
  asteroid: AsteroidModel;

  constructor(private activateRoute: ActivatedRoute, private httpService: HttpService) {
    activateRoute.params.subscribe(params => this.id = params.id);
    this.httpService.getAsteroid(this.id).subscribe((data: AsteroidModel) => this.asteroid = data);
  }
}
