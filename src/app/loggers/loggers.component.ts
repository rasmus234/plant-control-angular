import {Component, OnInit} from '@angular/core';
import {Logger, LoggersService, UnregisteredLogger} from "../services/loggers.service";
import {SignalrService} from "../services/signalr.service";

@Component({
  selector: 'app-loggers',
  templateUrl: './loggers.component.html',
  styleUrls: ['./loggers.component.css']
})
export class LoggersComponent implements OnInit {

  registeredLoggers?: Logger[];
  unregisteredLoggers?: UnregisteredLogger[];
  selectedUnregisteredLogger: UnregisteredLogger[] = [];
  loggerName?: string;

  constructor(private loggersService: LoggersService, private signalrService: SignalrService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.loggersService.getRegisteredLoggers().subscribe(loggers => this.registeredLoggers = loggers);
    await this.signalrService.startConnection()
    await this.signalrService.getUnregisteredLoggers().then(unregisteredLoggers => this.unregisteredLoggers = unregisteredLoggers);
    await this.signalrService.subscribeToUnregisteredLoggers();
  }

  onRegisterLogger(): void {
    if (this.selectedUnregisteredLogger && this.loggerName) {
      const selectedLogger = this.selectedUnregisteredLogger[0];

      this.signalrService
        .registerLogger({name: this.loggerName, id: selectedLogger.id})
        .then(logger => {
          if (logger) this.registeredLoggers?.push(logger)
        });

      this.loggerName = "";
    }
  }

  buttonDisabled(): boolean {
    return this.selectedUnregisteredLogger?.length == 0 || !this.loggerName;
  }


}

