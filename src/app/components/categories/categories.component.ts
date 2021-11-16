import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

import { CategoryService } from './../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryID: any;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryID = params['id'];
      this.categoryService.get().subscribe((data) => {
        this.categories = data;
      });
    });
  }
}
