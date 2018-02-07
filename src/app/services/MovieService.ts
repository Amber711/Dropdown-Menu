import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

  apiKey: string;
  private _movieSource = new BehaviorSubject<String[]>([]);

  constructor(private httpClient: HttpClient, @Inject('apiKey') apiKey) {
      this.apiKey = apiKey;
   }


   getMovies(): Observable<String[]> {
      this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
      .toPromise()
      .then((res: any) => {
        let result = res.results.map(movie => movie.title);
        this._movieSource.next(result);

      })
      .catch(this.handleError);
      return this._movieSource.asObservable();

   }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }
}
