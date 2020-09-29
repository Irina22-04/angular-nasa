import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http-service/http.service';
import {ActivatedRoute} from '@angular/router';
import {AsteroidListModel} from '../models/asteroid-list.model';

@Component({
  selector: 'app-nasa-asteroids',
  templateUrl: './app-nasa-asteroids.component.html',
  styleUrls: ['./app-nasa-asteroids.component.css']
})
export class AppNasaAsteroidsComponent implements OnInit {

  asteroids: AsteroidListModel[];
  selectedDate: string;
  startDate: string;
  endDate: string;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      this.startDate = params.s;
      this.endDate = params.e;
    });
    this.httpService.getAsteroids(this.startDate, this.endDate).subscribe(data => {
      this.asteroids = data.sort((a, b) => {
        const first = new Date(a.date);
        const second = new Date(b.date);
        return first.getTime() - second.getTime();
      });
    });
  }

  selectDate(ev): void {
    this.selectedDate = ev;
  }

  checkDate(date): boolean {
    return date?.trim() === this.selectedDate?.trim();
  }
}
