import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity';

export abstract class BaseHttpService<T extends Entity> {

  protected error: string;
  constructor(private http: HttpClient) {
    this.error = 'Some Error occured, Please contact support for that.';
  }

  protected getOne(url: string): Observable<T> {
    const response = this.http.get<T>(`./assets/${url}-ds.json`);
    return response;
  }

  protected getMultiple(url: string): Observable<T[]> {
    const response = this.http.get<T[]>(`./assets/${url}-ds.json`);
    return response;
  }

  protected post(url: string, model: T): Observable<T> {
    const response = this.http.post<T>(`./assets/${url}-ds.json`, model);
    return response;
  }

  protected put(url: string, model: T): Observable<T> {
    const response = this.http.put<T>(`./assets/${url}-ds.json`, model);
    return response;
  }

  protected delete(url: string): Observable<T> {
    const response = this.http.delete<T>(url);
    return response;
  }
}
