import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionInformacionComponent } from './validacion-informacion.component';

describe('ValidacionInformacionComponent', () => {
  let component: ValidacionInformacionComponent;
  let fixture: ComponentFixture<ValidacionInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
