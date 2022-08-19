import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  public windowToogled: boolean = false;
  public nom: String = '';

  public toogleWindow(nom: String) {
    this.nom = nom;
    this.windowToogled = true;
  }

  public closeWindow() {
    this.windowToogled = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
