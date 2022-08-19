import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appIcone]',
})
export class IconeDirective implements OnChanges {
  @HostBinding('style.top') public top: String;
  @HostBinding('style.left') public left?: String;
  @Input() public appIcone: String = '';
  @Input() public nom: String = '';
  @Input() public TheLeft?: String;

  constructor() {
    this.top = this.appIcone;
  }

  ngOnChanges(): void {
    console.log(this.nom + ':' + this.appIcone);

    this.top = this.appIcone;
    this.left = this.TheLeft;
  }
}
