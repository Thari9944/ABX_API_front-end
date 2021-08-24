import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePackageComponent } from './store-package.component';

describe('StorePackageComponent', () => {
  let component: StorePackageComponent;
  let fixture: ComponentFixture<StorePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
