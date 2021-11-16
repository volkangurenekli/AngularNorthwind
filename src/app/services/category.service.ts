import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { Category } from './../models/category';
import { Endpoints } from '../constant/endpoints';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  get(): Observable<Category[]> {
    this.loadingService.setLoading(true);
    return this.http.get<Category[]>(Endpoints.Categories).pipe(
      delay(200),
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}
