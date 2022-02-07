import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../shared/interfaces';
import { PostsServcice } from '../shared/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts$!: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsServcice
  ) { }

  ngOnInit(): void {
    this.posts$ = this .route.params
    .pipe(switchMap((params: Params) => {
      return this.postsService.getById(params['id'])
    }))
  }

}
