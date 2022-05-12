import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaddComponent } from './projectadd.component';

describe('ProjectaddComponent', () => {
  let component: ProjectaddComponent;
  let fixture: ComponentFixture<ProjectaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
