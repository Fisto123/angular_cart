import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PriceDetailsComponent } from './price-details/price-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CartItemComponent,
    SidePanelComponent,
    PriceDetailsComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [HeaderComponent, SidePanelComponent, CartComponent],
})
export class SharedModule {}
