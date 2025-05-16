import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../data/post';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService) { }

    ngOnInit(): void {
            this.postService.getPosts().subscribe(posts => {
                // Trier les posts du plus récent au plus ancien
                this.posts = posts.sort((a, b) => {
                    const dateA = new Date(a.createdDate).getTime();
                    const dateB = new Date(b.createdDate).getTime();
                    return dateB - dateA; // ordre décroissant
                });
            });
          }
}
