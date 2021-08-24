import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejisterPackageComponent } from './rejister-package.component';

describe('RejisterPackageComponent', () => {
  let component: RejisterPackageComponent;
  let fixture: ComponentFixture<RejisterPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejisterPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejisterPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
