import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Logger {
  _id: string;
  name: string;
  isPaired?: boolean;
}

export interface UnregisteredLogger {
  id: string;
  name?: string;
  firstSeen?: Date;
}


@Injectable({
  providedIn: 'root'
})
export class LoggersService {

  constructor(private http: HttpClient) {
  }

  getRegisteredLoggers() {
    return this.http.get<Logger[]>("http://localhost:3000/loggers");
  }
  // getUnregisteredLoggers() {
  //   //return list of uuid
  //   const unregisteredLoggers: UnregisteredLogger[] = [];
  //   for (let i = 0; i < 10; i++) {
  //     unregisteredLoggers.push({id: crypto.randomUUID(), firstSeen: new Date()});
  //   }
  //   return unregisteredLoggers;
  //
  // }

  registerLogger(logger: UnregisteredLogger) {
    return this.http.post<Logger>("http://localhost:3000/loggers", {
      name: logger.name,
      _id: logger.id
    });
  }

}



