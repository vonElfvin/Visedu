import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseDatabaseService<Item> {

  constructor(
    private afs: AngularFirestore,
  ) { }

  insert(path: string, item: Item): Promise<any> {
    return this.afs.collection(path).add(item);
  }

  list(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.colWithIds$(path);
  }

  col$(path: string, queryFn?: QueryFn): AngularFirestoreCollection<Item> {
    return this.afs.collection(path, queryFn);
  }

  colWithIds$(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.col$(path, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        data['id'] = a.payload.doc.id;
        return data;
      });
    });
  }
}
