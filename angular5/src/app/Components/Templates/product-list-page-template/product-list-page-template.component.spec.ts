import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPageTemplateComponent } from './product-list-page-template.component';

describe('ProductListPageTemplateComponent', () => {
  let component: ProductListPageTemplateComponent;
  let fixture: ComponentFixture<ProductListPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListPageTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
