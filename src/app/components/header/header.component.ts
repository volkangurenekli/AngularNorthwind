import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isAuthenticated: boolean = false;
  ngOnInit(): void {
    this.authService.user.subscribe((user) => (this.isAuthenticated = !!user));
  }
}
