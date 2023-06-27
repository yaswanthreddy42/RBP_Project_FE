import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  movies: movie[] | any;
  // private apiGet: string = `https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage/api`;
  private apiGet: string = `http://localhost:8081/api/v1/getAllMovies`;
  //private apiPost: string = `https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage/movies`;
  private apiPost: string = 'http://localhost:8081/api/v1/addMovie';
  //private apidelete: string = `https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage`;
  private apidelete: string = `http://localhost:8081/api/v1/delete`;
  getAllMovies(): Observable<Array<movie>> {
    return this.http.get<Array<movie>>(this.apiGet);
  }

  addMovie(movie: movie): Observable<movie> {
    return this.http.post<movie>(this.apiPost, movie);
  }

  deleteMovie(id: number): Observable<number> {
    return this.http.delete<number>(this.apidelete + '/' + id);
  }
}
