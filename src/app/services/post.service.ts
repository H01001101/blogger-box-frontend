import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { POSTS, Post } from '../data/post';

@Injectable()
export class PostService {
    private apiUrl = 'http://localhost:8080/v1/posts';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        const posts = of(POSTS);
        return posts;
    }

    create(post: Post): Observable<Post> {
        return this.http.post<Post>(this.apiUrl, post);
    }
}
