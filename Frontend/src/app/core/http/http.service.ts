import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { retry, take } from 'rxjs/operators';

@Injectable()
export class HttpService<ItemClass> {

  private readonly basePath = environment.basePath;

  constructor(private http: HttpClient) { }

  list(collection: string): Observable<ItemClass[]> {
    return this.http.get<ItemClass[]>(`${this.basePath}${collection}`)
      .pipe(
        retry(2),
      );
  }

  post(collection: string, body: ItemClass) {
    return this.http.post<ItemClass>(`${this.basePath}${collection}`, body);
  }

  update(collection: string, body: ItemClass, path: string) {
    return this.http.patch<ItemClass>(`${this.basePath}${collection}/${path}`, body).pipe(
      take(1)
    ).toPromise();
  }

  get(collection: string, path: string) {
    return this.http.get<ItemClass>(`${this.basePath}${collection}/${path}`)
      .pipe(
        retry(2),
      );
  }

  delete(collection: string, id: string) {
    return this.http.delete<ItemClass>(`${this.basePath}${collection}/${id}`);
  }
}
