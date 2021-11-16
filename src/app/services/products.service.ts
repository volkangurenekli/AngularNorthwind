import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { LoadingService } from './loading.service';
import { Product } from './../models/product';
import { Endpoints } from '../constant/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  get(): Observable<Product[]> {
    this.loadingService.setLoading(true);
    return this.http.get<Product[]>(Endpoints.Products).pipe(
      delay(200),
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}
