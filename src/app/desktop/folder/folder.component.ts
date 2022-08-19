import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit, OnChanges {
  @Input() nom: String = '';
  @Input() path?: String = '';
  @Input() top: String = '';
  @Input() type: String = '';
  @Input() left?: String;

  public css: String = '';
  public theTop: String = '';
  public theLeft?: String;

  public folderRedirect() {
    if (this.nom != 'GitHub') {
      // this.router.navigate([this.path]);
    } else {
      window.location.href = 'https://github.com/AlexandreRichrd';
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.theTop = this.top;
    this.theLeft = this.left;
  }
}
