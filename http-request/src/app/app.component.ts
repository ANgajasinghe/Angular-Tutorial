import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PostModel} from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: PostModel) {
    // posts.json -> this is only a firebase requirement
    // postData will transform to JSON by angular

    this.http.post<{name : string}>('https://ng-http-18a69.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData);
    });
    console.log(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http.get< {[key:string]:PostModel}>('https://ng-http-18a69.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postArray : PostModel[] = [];

        for (const key in responseData ) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id:key});
          }

        }
        return postArray;
      }))
      .subscribe(results => {
      //console.log(results);
        this.isFetching = false;
        this.loadedPosts = results;
    });
  }
}
