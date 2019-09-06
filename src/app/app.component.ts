import { Component } from '@angular/core';
import {TokenService} from './shared/providers/token.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  FAKE_TOKEN = environment.fakeTokenValue;

  constructor(private tokenService: TokenService) {
    this.tokenService.setToken(this.FAKE_TOKEN);
  }

}
