import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../data/post';

export interface PostCreateDTO {
  title: string;
  content: string;
  createdDate: string;
  categoryTitle: string;
}

@Injectable()
export class PostService {
    private apiUrl = 'http://localhost:8080/v1/posts';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    create(post: PostCreateDTO): Observable<Post> {
        return this.http.post<Post>(this.apiUrl, post);
    }
}
