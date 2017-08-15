import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverID = 1;
  serverStatus = 1;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 1 : 0;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus ? 'green' : 'red';
  }
}
