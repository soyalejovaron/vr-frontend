import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPolarareaHComponent } from './grafica-polararea-h.component';

describe('GraficaPolarareaHComponent', () => {
  let component: GraficaPolarareaHComponent;
  let fixture: ComponentFixture<GraficaPolarareaHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPolarareaHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPolarareaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
