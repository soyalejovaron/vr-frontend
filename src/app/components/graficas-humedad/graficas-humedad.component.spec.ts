import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasHumedadComponent } from './graficas-humedad.component';

describe('GraficasHumedadComponent', () => {
  let component: GraficasHumedadComponent;
  let fixture: ComponentFixture<GraficasHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficasHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
