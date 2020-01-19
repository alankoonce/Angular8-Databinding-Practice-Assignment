import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindtest',
  templateUrl: './bindtest.component.html',
  styleUrls: ['./bindtest.component.css']
})
export class BindtestComponent implements OnInit {
  userName = '';
  canReset = false;
  constructor() { }

  updateResetButton() {
    if (this.userName === '') {
      this.canReset = false;
    } else {
      this.canReset = true;
    }
  }

  resetUser() {
    this.userName = '';
    this.canReset = false;
  }
  ngOnInit() {
  }

}
