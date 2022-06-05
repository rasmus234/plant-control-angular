import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import {UnregisteredLogger} from "./loggers.service";

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  public unregisteredLoggers: UnregisteredLogger[] = [];
  private hubConnection?: signalR.HubConnection
  public isConnected: boolean = false;

  public async startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5140/hubs/unregisteredLogger')
      .build();
    await this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started')
        this.isConnected = true;
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public async getUnregisteredLoggers() {
    await this.hubConnection?.invoke<UnregisteredLogger[]>("GetUnregisteredLoggers").then(unregisteredLoggers => {
      console.log(unregisteredLoggers);
      this.unregisteredLoggers = unregisteredLoggers;
    })
    return this.unregisteredLoggers;
  }
}
