import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Organisms/header/header.component';
import { NavbarComponent } from './Components/Molecules/navbar/navbar.component';
import { CategoriesListComponent } from './Components/Atoms/categories-list/categories-list.component';
import { SearchComponent } from './Components/Atoms/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ProductListPageModule } from './Components/Pages/product-list-page/product-list-page.module';
import { ProductPageModule } from './Components/Pages/product-page/product-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CategoriesListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ProductListPageModule,
    ProductPageModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
