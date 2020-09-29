import {async, TestBed} from '@angular/core/testing';
import {AppNasaAsteroidComponent} from './app-nasa-asteroid.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from '../http-service/http.service';
import {HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


describe('AppNasaAsteroidComponent', () => {
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppNasaAsteroidComponent
      ],
      providers: [HttpService,
        HttpClientModule,
        {provide: ActivatedRoute, useValue: {params: of({id: 5})}}],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  }));

  it('should be created', async(() => {
    const mockAsteroid = {
      name: '21277 (1996 TO5)',
      designation: '21277',
      absolute_magnitude_h: '16.1',
      estimated_diameter: {
        estimated_diameter_min: 5,
        estimated_diameter_max: 6,
      },
    };

    const fixture = TestBed.createComponent(AppNasaAsteroidComponent);
    const app = fixture.debugElement.componentInstance;
    const request = httpMock.expectOne(`https://api.nasa.gov/neo/rest/v1/neo/5?api_key=aXftfudqCz4arjUmr5ZcEHHxeM5H90ITgTtrXE1W`);
    request.flush(mockAsteroid);
    expect(app).toBeTruthy();
  }));
});
