import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverStatus = 'Server: Disabled';
  serverCreationStatus: string;
  serverName: string;

  counterLocked = false;
  countButton = 'Count Down';
  countStatus = true;
  count = 15;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onEnableServer() {
    this.serverStatus = 'Server: Enabled';
    this.countStatus = true;
  }

  onDisableServer() {
    this.serverStatus = 'Server: Disabled';
    this.countStatus = false;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  printElement(event, item) {
    console.log(event, item);
  }

  countDown() {
    this.counterLocked = true;

    const timer = setInterval(() => {
      this.count -= 1;
      this.countButton = `00:00:${this.count}`;


      if (this.count < 0) {
        clearInterval(timer);
        this.count = this.countStatus ? 5 : 3;
        this.countButton = 'Count Down';
        this.counterLocked = false;
      }
    }, 1000);
  }

}
