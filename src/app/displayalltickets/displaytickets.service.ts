import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { displayticket } from './displyticket';

@Injectable({
  providedIn: 'root',
})
export class DisplayticketsService {
  constructor(private http: HttpClient) {}

  //private apiget: String = `https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage/movies`;
  private apiget: String = `http://localhost:8081/api/v1/ticket/alltickets`;
  getallmovietickets(): Observable<Array<displayticket>> {
    return this.http.get<Array<displayticket>>(`${this.apiget}`);
  }
}
