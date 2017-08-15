import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  username = '';
  displayDetails = false;
  clicks = [];
  loggedClicks = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    ++this.loggedClicks;
    const timestamp = new Date;

    this.displayDetails = !this.displayDetails;
    this.clicks.push(`${this.loggedClicks}: ${timestamp}`);
  }

  blueBackground(click) {
    return this.clicks.indexOf(click) > 3 ? 'blue' : null;
  }

  whiteColor(click) {
    return this.clicks.indexOf(click) > 3;
  }
}
