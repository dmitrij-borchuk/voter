import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';
import uuid from 'uuid/v4';
import { Observable } from "rxjs/Observable";

const VOTINGS_KEY = '/votings';

@Injectable()
export class VotingsProviderService {
  item: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  public update(data) {
    let id = data.$key || uuid();
    this.item = this.db.object(`${VOTINGS_KEY}/${id}`);
    return this.item.update(data);
  }

  public getAll():Observable<any> {
    return this.db.list(`${VOTINGS_KEY}`);
  }

  public get(id: String):Observable<any> {
    return this.db.object(`${VOTINGS_KEY}/${id}`);
  }
}
