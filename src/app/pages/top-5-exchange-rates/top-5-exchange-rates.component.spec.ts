import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Top5ExchangeRatesComponent } from './top-5-exchange-rates.component';

describe('Top5ExchangeRatesComponent', () => {
  let component: Top5ExchangeRatesComponent;
  let fixture: ComponentFixture<Top5ExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5ExchangeRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5ExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
