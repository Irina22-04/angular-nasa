import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppNasaAsteroidsComponent} from './app-nasa-asteroids.component';
import {HttpService} from '../http-service/http.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';

describe('AppNasaAsteroidsComponent', () => {
  let httpMock: HttpTestingController;
  let component: AppNasaAsteroidsComponent;
  let fixture: ComponentFixture<AppNasaAsteroidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDatepickerModule],
      declarations: [
        AppNasaAsteroidsComponent
      ],
      providers: [HttpService,
        HttpClientModule,
        {provide: ActivatedRoute, useValue: {queryParams: of({s: '2018-07-20', e: '2018-07-21'})}}
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppNasaAsteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', async(() => {
    const asteroidsList = {
      near_earth_objects:
        {
          '2018-07-20':
            [{
              id: 3726710,
              name: '(2015 RC)',
              nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710',
              absolute_magnitude_h: 24.3,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.0366906138,
                  estimated_diameter_max: 0.0820427065
                },
              }
            },
              {
                id: 3730577,
                name: '(2015 TX237)',
                absolute_magnitude_h: 23.3,
                estimated_diameter: {
                  kilometers: {estimated_diameter_min: 0.058150704, estimated_diameter_max: 0.130028927},
                }
              }],
          '2018-07-21':
            [
              {
                id: 3359445,
                name: '(2006 WO1)',
                absolute_magnitude_h: 19.2,
                estimated_diameter: {
                  kilometers: {
                    estimated_diameter_min: 0.3841978911,
                    estimated_diameter_max: 0.8590926012
                  },
                }
              }]
        }
    };
    const request = httpMock.expectOne(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-07-20&end_date=2018-07-21&api_key=aXftfudqCz4arjUmr5ZcEHHxeM5H90ITgTtrXE1W`);
    request.flush(asteroidsList);
    expect(component).toBeTruthy();
  }));

  it('should title be "asteroids"', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent)
      .toBe('asteroids');
  }));
});
