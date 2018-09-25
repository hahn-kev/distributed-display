import {EventEmitter, Injectable} from '@angular/core';
import {HubConnection, HubConnectionBuilder} from "@aspnet/signalr";
import {SlideEvent} from "./slide-event";

@Injectable({
  providedIn: 'root'
})
export class PresenterService {
  connection: HubConnection;
  private slideEventEmitter = new EventEmitter<SlideEvent>();
  public get slideEvent() {
    return this.slideEventEmitter.asObservable();
  }

  constructor(private hubConnectionBuilder: HubConnectionBuilder) {
    this.connection = this.hubConnectionBuilder.withUrl('/hub/present').build();
    this.connection.on('slideEvent', (event: SlideEvent) => {
      this.slideEventEmitter.emit(event);
    });
    this.connection.start();
  }

  sendSlideEvent(event: SlideEvent) {
    this.connection.send('sendSlideEvent', event);
  }
}
