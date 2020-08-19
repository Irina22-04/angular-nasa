import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NasaTableComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NasaTableComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NasaTableComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-nasa'`, () => {
    const fixture = TestBed.createComponent(NasaTableComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-nasa');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NasaTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-nasa app is running!');
  });
});
