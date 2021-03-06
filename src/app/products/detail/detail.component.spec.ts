import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailComponent } from './detail.component';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
