import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductsComponent } from '../../Organisms/products/products.component';
import { CardComponent } from '../../Atoms/card/card.component';
import { CategoriesComponent } from '../../Molecules/categories/categories.component';
import { DropDownComponent } from '../../Atoms/drop-down/drop-down.component';
import { FilterByPriceComponent } from '../../Molecules/filter-by-price/filter-by-price.component';
import { FilterComponent } from '../../Organisms/filter/filter.component';
import { ProductListComponent } from '../../Molecules/product-list/product-list.component';
import { ProductListPageComponent } from './product-list-page.component';
import { ProductListPageTemplateComponent } from '../../Templates/product-list-page-template/product-list-page-template.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RadioButtonListComponent } from '../../Atoms/radio-button-list/radio-button-list.component';
import { AccordionComponent } from '../../Atoms/accordion/accordion.component';

@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductListPageTemplateComponent,
    ProductsComponent,
    ProductListComponent,
    CardComponent,
    DropDownComponent,
    FilterComponent,
    FilterByPriceComponent,
    RadioButtonListComponent,
    CategoriesComponent,
    AccordionComponent,

  ],
  imports: [CommonModule, ProductListPageRoutingModule, MaterialModule],
})
export class ProductListPageModule {}
