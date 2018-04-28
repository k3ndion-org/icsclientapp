import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';
import { IEvent } from './event.model';

@Injectable()
export class EventService {
  events: AngularFireList<IEvent>;

  constructor(afDatabase: AngularFireDatabase, private alertCtrl: AlertController) {
    this.events = afDatabase.list<IEvent>('events');
  }

  getEvents() {
    return this.events;
  }


  addEvent(model: IEvent) {
    const newSongRef = this.events.push(model);
  }

  updateEvent(model: IEvent) {
    return this.events.update(model.key, model);
  }

  removeEvent(model: IEvent) {
    return this.events.remove(model.key);
  }

}
