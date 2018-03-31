import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService<ItemClass> {

  private readonly basePath = environment.basePath;

  constructor(private http: HttpClient) { }

  list(path: string): Observable<ItemClass[]> {
    return this.http.get<ItemClass[]>(this.basePath + path);
  }

}
