import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseDatabaseService<Item> {

  constructor(
    private afs: AngularFirestore,
  ) { }

  insert(path: string, item: Item): Promise<any> {
    return this.col(path).add(item);
  }

  update(path: string, id: string, item: Item) {
    return this.doc(path, id).update(item);
  }

  get(path: string, id: string) {
    return this.doc(path, id).valueChanges();
  }

  list(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.colWithIds(path, queryFn);
  }

  delete(path: string, id: string) {
    return this.doc(path, id).delete();
  }

  doc(path: string, id: string) {
    return this.afs.doc(`${path}/${id}`);
  }

  col(path: string, queryFn?: QueryFn): AngularFirestoreCollection<Item> {
    return this.afs.collection(path, queryFn);
  }

  colWithIds(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.col(path, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        data['_id'] = a.payload.doc.id;
        return data;
      });
    });
  }
}
