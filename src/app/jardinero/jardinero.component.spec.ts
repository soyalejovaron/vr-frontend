import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardineroComponent } from './jardinero.component';

describe('JardineroComponent', () => {
  let component: JardineroComponent;
  let fixture: ComponentFixture<JardineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JardineroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JardineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
