import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyaddComponent } from './companyadd.component';

describe('CompanyaddComponent', () => {
  let component: CompanyaddComponent;
  let fixture: ComponentFixture<CompanyaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
