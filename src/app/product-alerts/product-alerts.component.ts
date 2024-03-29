import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit() {}

  notify() {
    window.alert('The product "' + this.product.name + '" has been notified!');
  }
}
