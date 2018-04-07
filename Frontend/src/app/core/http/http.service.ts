import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { GlobalErrorHandler } from '../error-handler/global-error-handler';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService<ItemClass> {

  private readonly basePath = environment.basePath;

  constructor(private http: HttpClient, private errorHandler: GlobalErrorHandler) { }

  list(collection: string): Observable<ItemClass[]> {
    return this.http.get<ItemClass[]>(`${this.basePath}${collection}`)
      .pipe(
        retry(2),
      );
  }

  post(collection: string, body: ItemClass) {
    return this.http.post<ItemClass>(`${this.basePath}${collection}`, body);
  }

  get(collection: string, path: string) {
    return this.http.get<ItemClass>(`${this.basePath}${collection}/${path}`)
      .pipe(
        retry(2),
      );
  }
}
