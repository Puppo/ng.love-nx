import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsUiComponent } from '@angular.love/products/ui';

@Component({
  selector: 'ngl-products-pages',
  standalone: true,
  imports: [CommonModule, ProductsUiComponent],
  template: `
    <p>products-pages works!</p>
    <ngl-products-ui></ngl-products-ui>
  `,
  styles: [],
})
export class ProductsPagesComponent {}
