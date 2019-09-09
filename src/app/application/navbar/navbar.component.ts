import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../shared/providers/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }

  clearAppToken(): void {
    this.tokenService.clearToken();
  }

}
