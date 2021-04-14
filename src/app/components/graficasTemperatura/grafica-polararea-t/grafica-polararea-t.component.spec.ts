import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPolarareaTComponent } from './grafica-polararea-t.component';

describe('GraficaPolarareaTComponent', () => {
  let component: GraficaPolarareaTComponent;
  let fixture: ComponentFixture<GraficaPolarareaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPolarareaTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPolarareaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
