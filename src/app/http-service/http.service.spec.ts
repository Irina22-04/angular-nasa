import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from './http.service';


describe('HttpService', () => {
  let http: HttpTestingController;
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [HttpService]
    });
  }));

  beforeEach(async(() => {
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
