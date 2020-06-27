import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {PostModel} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn : 'root'}) // recommended
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }
  createAndStorePost(_title:string , _content: string){
    const postData : PostModel = {title:_title , content: _content};
    this.http.post<{name : string}>('https://ng-http-18a69.firebaseio.com/posts.json', postData,{
      observe: 'body' // or can be response => get full data , events
    }
    )
      .subscribe(responseData => {
        console.log(responseData);
    },error => {
        this.error.next(error.message);
      });
    console.log(postData);
  }

  fetchPosts(){

    return  this.http.get< {[key:string]:PostModel}>('https://ng-http-18a69.firebaseio.com/posts.json',{
      headers : new HttpHeaders({'Custom-Header':'Hello'}),
      //params
      params : new HttpParams().set('print','akalanka').append('akaka','ddddd')

    })
      .pipe(map(responseData => {
        const postArray : PostModel[] = [];

        for (const key in responseData ) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id:key});
          }
        }
        return postArray;
      }),catchError(err => {
        return  throwError(err);
      }));

  }

  deletePosts() {
    return this.http.delete(
      'https://ng-http-18a69.firebaseio.com/posts.json',{
          observe : 'events',
          responseType : 'text'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent){
        //....
      }
      if (event.type === HttpEventType.Response){
        console.log(event.body)
      }
    }));
  }
}
