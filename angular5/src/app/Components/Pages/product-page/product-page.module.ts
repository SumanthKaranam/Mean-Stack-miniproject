import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../Atoms/button/button.component';
import { ImageComponent } from '../../Atoms/image/image.component';
import { ProductComponent } from '../../Organisms/product/product.component';
import { ProductDetailsComponent } from '../../Molecules/product-details/product-details.component';
import { ProductPageComponent } from './product-page.component';
import { ProductPageTemplateComponent } from '../../Templates/product-page-template/product-page-template.component';
import { QuantityUpdateComponent } from '../../Atoms/quantity-update/quantity-update.component';
import { TruncateComponent } from '../../Atoms/truncate/truncate.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductPageRoutingModule } from './product-page-routing.module';

@NgModule({
  declarations: [
    QuantityUpdateComponent,
    ButtonComponent,
    TruncateComponent,
    ImageComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductPageTemplateComponent,
    ProductPageComponent,
  ],
  imports: [CommonModule, ProductPageRoutingModule, MaterialModule],
})
export class ProductPageModule {}
