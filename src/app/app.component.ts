import { Component } from '@angular/core';
import {TokenService} from './shared/providers/token.service';
import {environment} from '../environments/environment';
import {RestService} from './shared/providers/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private tokenService: TokenService, private restService: RestService) {

    this.restService.getTokenFakeBackend()
      .subscribe(token => this.tokenService.authToken = token);

    // Get Token from Server later
    // const authToken: string = environment.fakeTokenValue;

    // this.tokenService.authToken = authToken;

  }

}
