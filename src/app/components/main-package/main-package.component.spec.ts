import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPackageComponent } from './main-package.component';

describe('MainPackageComponent', () => {
  let component: MainPackageComponent;
  let fixture: ComponentFixture<MainPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
