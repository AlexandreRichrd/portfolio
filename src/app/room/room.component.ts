import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  public ordinateur() {
    alert('ordinateur');
  }

  constructor() {}

  ngOnInit(): void {}
}
