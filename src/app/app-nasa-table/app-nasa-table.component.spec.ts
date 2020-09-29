import {
  CUSTOM_ELEMENTS_SCHEMA,
  Directive,
  HostListener,
  Input,
} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {AppNasaTableComponent} from './app-nasa-table.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Directive({
  selector: '[routerLink]'
})
class FakeRouterLink {
  @Input()
  routerLink = '';

  constructor(
    private router: Router,
  ) { }

  @HostListener('click')
  onClick(): void {
    this.router.navigateByUrl(this.routerLink);
  }
}

describe('AppNasaTableComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppNasaTableComponent,
        FakeRouterLink,
      ],
      providers: [FormBuilder, { provide: Router, useValue: routerSpy }]
    }).compileComponents();
  }));

  it('should be created', async(() => { // внимание - здесь async это имя функции, а не ключевое слово JS
    const fixture = TestBed.createComponent(AppNasaTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
