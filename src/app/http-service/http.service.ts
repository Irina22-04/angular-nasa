import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AsteroidModel} from '../models/asteroid.model';
import {AsteroidListModel} from '../models/asteroid-list.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getAsteroids(startDate, endDate): Observable<AsteroidListModel[]> {
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=aXftfudqCz4arjUmr5ZcEHHxeM5H90ITgTtrXE1W`)
      .pipe(map((data: any) => {
        const dates = Object.keys(data.near_earth_objects);
        const result = [];
        dates.forEach(date => {
          const asteroids = [];
          data.near_earth_objects[date].forEach(asteroid => asteroids.push({name: asteroid.name, id: asteroid.id}));
          result.push({date, asteroids});
        });
        return result;
      }));
  }

  getAsteroid(id): Observable<object> {
    return this.http.get<AsteroidModel>(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=aXftfudqCz4arjUmr5ZcEHHxeM5H90ITgTtrXE1W`);
  }
}
