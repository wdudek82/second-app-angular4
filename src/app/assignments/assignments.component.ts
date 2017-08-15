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

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    const order = this.clicks.length + 1;
    const timestamp = Date.now();

    this.displayDetails = !this.displayDetails;
    this.clicks.push(`${order}: ${timestamp}`);
  }

  blueBackground(click) {
    return this.clicks.indexOf(click) > 3 ? 'blue' : null;
  }

  whiteColor(click) {
    return this.clicks.indexOf(click) > 3;
  }
}
