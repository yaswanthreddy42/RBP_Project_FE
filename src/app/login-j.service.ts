import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginJService {
  constructor(private http: HttpClient) {}
  //apiget: string = 'http://localhost:8084/auth/v1/login';
  apiget: string = `http://localhost:8081/call/consumer/login`;

  public generateToken(request: any): Observable<any> {
    return this.http.post(
      this.apiget,
      //'https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage/api',
      request
    );
  }
}
