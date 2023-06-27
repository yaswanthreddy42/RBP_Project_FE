import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root',
})
export class ForgotpasswordService {
  constructor(private http: HttpClient) {}
  forgotpassword(user: any): Observable<String> {
    return this.http.put<String>(
      `http://localhost:8084/auth/v1/forgotpassword`,
      //  `https://nbbdma5yzb.execute-api.us-west-2.amazonaws.com/SecondStage/user`,
      user
    );
  }
}
