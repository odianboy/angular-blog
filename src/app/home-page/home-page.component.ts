import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces';
import { PostsServcice } from '../shared/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts$!: Observable<Post[]>

  constructor(private postsService: PostsServcice) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAll()
  }

}
