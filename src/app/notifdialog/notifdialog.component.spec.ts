import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifdialogComponent } from './notifdialog.component';

describe('NotifdialogComponent', () => {
  let component: NotifdialogComponent;
  let fixture: ComponentFixture<NotifdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
