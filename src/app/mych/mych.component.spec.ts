import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychComponent } from './mych.component';

describe('MychComponent', () => {
  let component: MychComponent;
  let fixture: ComponentFixture<MychComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
