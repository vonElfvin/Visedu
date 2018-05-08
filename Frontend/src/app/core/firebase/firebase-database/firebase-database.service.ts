import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class FirebaseDatabaseService<Item> {

  constructor(
    private afs: AngularFirestore,
  ) { }

  insert(path: string, item: Item): Promise<any> {
    return this.afs.collection(path).add(item);
  }

}
