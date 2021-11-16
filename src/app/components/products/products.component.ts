import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from './../../services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categoryID: any;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryID = params['id'];
      this.productsService.get().subscribe((data) => {
        if (this.categoryID == undefined) {
          this.products = data;
        } else {
          this.products = data.filter((event) => {
            return event.categoryId == this.categoryID;
          });
        }
      });
    });
  }
}
