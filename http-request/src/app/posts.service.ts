import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from './post.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn : 'root'}) // recommended
export class PostsService {

  constructor(private http: HttpClient) { }
  createAndStorePost(_title:string , _content: string){
    const postData : PostModel = {title:_title , content: _content};
    this.http.post<{name : string}>('https://ng-http-18a69.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData);
    });
    console.log(postData);
  }

  fetchPosts(){
    return  this.http.get< {[key:string]:PostModel}>('https://ng-http-18a69.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postArray : PostModel[] = [];

        for (const key in responseData ) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id:key});
          }

        }
        return postArray;
      }));

  }
}
