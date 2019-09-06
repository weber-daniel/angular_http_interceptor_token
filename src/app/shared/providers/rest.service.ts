import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Album} from '../models/album';
import {ToDo} from '../models/to-do';
import {Photo} from '../models/photo';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a list of Post objects
   */
  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.endpoints.fakeRest.getPostList);
  }

  /**
   * Returns a list of Comment objects
   */
  getCommentList(): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.endpoints.fakeRest.getCommentList);
  }

  /**
   * Returns a list of Album objects
   */
  getAlbumList(): Observable<Album[]> {
    return this.http.get<Album[]>(environment.endpoints.fakeRest.getAlbumList);
  }

  /**
   * Returns a list of ToDo objects
   */
  getTodoList(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(environment.endpoints.fakeRest.getTodoList);
  }

  /**
   * Returns a list of Photo objects
   */
  getPhotoList(): Observable<Photo[]> {
    return this.http.get<Photo[]>(environment.endpoints.fakeRest.getPhotoList);
  }
}
