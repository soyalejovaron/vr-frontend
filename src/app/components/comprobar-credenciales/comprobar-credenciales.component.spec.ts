import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobarCredencialesComponent } from './comprobar-credenciales.component';

describe('ComprobarCredencialesComponent', () => {
  let component: ComprobarCredencialesComponent;
  let fixture: ComponentFixture<ComprobarCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobarCredencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobarCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
