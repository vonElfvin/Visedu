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

  list(collectionPath: string): Observable<ItemClass[]> {
    const path: string = this.basePath + collectionPath;
    return this.http.get<ItemClass[]>(path)
      .pipe(
        retry(2),
      );
  }

  post(collection: string, body: ItemClass) {
    console.log(this.basePath + collection);
    console.log(body);
    return this.http.post<ItemClass>(this.basePath + collection, body);
  }
}
