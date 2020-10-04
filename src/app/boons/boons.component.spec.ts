import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoonsComponent } from './boons.component';

describe('BoonsComponent', () => {
  let component: BoonsComponent;
  let fixture: ComponentFixture<BoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
