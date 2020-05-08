import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[];

  public isLoaded: boolean;

  constructor(
    private postService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.postService.getPosts()
      .subscribe(
        result => {
          this.isLoaded = true;
          this.posts = result;
        }
      );
  }

  navigateToDetails(id) {
    this.router.navigate(['/postdetail/', id]);
  }

}
