import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  loading: boolean = false;

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe((v: boolean) => {
      this.loading = v;
    });
  }
}
