import { Component, OnInit } from '@angular/core';
import {RestService} from '../../shared/providers/rest.service';
import {Observable} from 'rxjs';
import {Post} from '../../shared/models/post';
import {Photo} from '../../shared/models/photo';
import {ToDo} from '../../shared/models/to-do';
import {Album} from '../../shared/models/album';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  postList$: Observable<Post[]>;
  commentList$: Observable<Comment[]>;
  albumList$: Observable<Album[]>;
  toDoList$: Observable<ToDo[]>;
  photoList$: Observable<Photo[]>;

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  getImageUrlSource(): string {
    return './assets/images/source.jpg';
  }

  getPostList() {
    this.postList$ = this.restService.getPostList();
  }

  getCommentList() {
    this.commentList$ = this.restService.getCommentList();
  }

  getAlbumList() {
    this.albumList$ = this.restService.getAlbumList();
  }

  getTodoList() {
    this.toDoList$ = this.restService.getTodoList();
  }

  getPhotoList() {
    this.photoList$ = this.restService.getPhotoList();
  }

}
