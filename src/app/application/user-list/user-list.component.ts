import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/providers/user.service';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList$ = this.userService.getUserList();
  }

}
