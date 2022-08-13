import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appIndice]',
})
export class IndiceDirective implements OnChanges {
  @HostBinding('style.fontSize') private fontSize: String;
  @HostBinding('style.color') private color: String;
  @HostBinding('style.fontWeight') private fontWeight: Number;
  @HostBinding('style.textDecoration') private textDecoration: String;
  @HostBinding('style.fontFamily') private fontFamily: String;

  @Input() appIndice: String;

  constructor() {
    this.fontSize = '0';
    this.color = 'var(--secondary)';
    this.fontWeight = 100;
    this.textDecoration = 'none';
    this.fontFamily = 'Minecraft';
    this.appIndice = '';
  }

  ngOnChanges(): void {
    if (this.appIndice == 'mdp') {
    }
  }
}
