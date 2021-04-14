import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBarHumedadComponent } from './tipo-bar-humedad.component';

describe('TipoBarHumedadComponent', () => {
  let component: TipoBarHumedadComponent;
  let fixture: ComponentFixture<TipoBarHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoBarHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBarHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
