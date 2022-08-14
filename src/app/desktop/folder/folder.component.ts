import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  @Input() nom: String = '';
  @Input() path?: String = '';

  public css: String = '';

  public folderRedirect() {
    alert(this.path);
    if (this.nom != 'GitHub') {
      this.router.navigate([this.path]);
    } else {
      window.location.href = 'https://github.com/AlexandreRichrd';
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    if (this.nom == 'CV') {
      this.css = 'top: 5%';
    } else if (this.nom == 'GitHub') {
      this.css = 'top: 20%';
    }
  }
}
