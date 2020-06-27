import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostModel} from './post.model';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  constructor(private http: HttpClient,private postService : PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: PostModel) {

    this.postService.createAndStorePost(postData.title , postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {

  }

  private fetchPosts() {

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(results => {
      this.isFetching = false;
      console.log(results);
      this.loadedPosts = results;
    });

  }
}
