import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoglogOutComponent } from './dialoglog-out.component';

describe('DialoglogOutComponent', () => {
  let component: DialoglogOutComponent;
  let fixture: ComponentFixture<DialoglogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoglogOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoglogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
