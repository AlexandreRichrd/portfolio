import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  public ordinateur() {}

  public freddie() {
    alert('freddie');
  }

  public ocHtml() {
    alert('HTML & CSS');
  }

  public ocPhp() {
    alert('PHP & MySQL');
  }

  public vueJs() {
    alert('vueJs');
  }

  public gaming() {
    alert('gaming');
  }

  constructor() {}

  ngOnInit(): void {}
}
