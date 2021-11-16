import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}

  loading = new BehaviorSubject(false);

  setLoading(param: boolean): void {
    this.loading.next(param);
  }

  getLoading(): any {
    return this.loading;
  }
}
