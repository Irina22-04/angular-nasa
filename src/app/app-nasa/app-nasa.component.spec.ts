import {async, TestBed} from '@angular/core/testing';
import {AppNasaComponent} from './app-nasa.component';

describe('AppNasaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppNasaComponent
      ],
    }).compileComponents();
  }));

  it('should be created', async(() => {
    const fixture = TestBed.createComponent(AppNasaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
