import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychartComponent } from './mychart.component';

describe('MychartComponent', () => {
  let component: MychartComponent;
  let fixture: ComponentFixture<MychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
