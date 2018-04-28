import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { FilterPopOverPage } from '../filter-pop-over/filter-pop-over';
import { IEvent } from '../../services/event/event.model';
import { Observable } from 'rxjs/observable';
import { EventService } from '../../services/event/event.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  events: Observable<IEvent[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private popoverCtrl: PopoverController,
    private eventService: EventService) {
    this.events = this.eventService.getEvents()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  ionViewDidLoad() { }

  presentPopover() {
    let popover = this.popoverCtrl.create(FilterPopOverPage);
    popover.present();
  }
}
