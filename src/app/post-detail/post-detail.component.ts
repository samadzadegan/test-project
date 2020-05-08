import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public postId;

  public post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.postId = params.id;
      this.postService.getPostById(this.postId).subscribe(
        result => {
          this.post = result;
        }
      );
    });

  }


}
