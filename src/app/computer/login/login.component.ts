import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public mdp: string;
  public error: number;
  public tailleIndice: number;

  public verificationMdp(): void {
    if (this.mdp != '') {
      this.error++;
      console.log(this.error);
      this.tailleIndice += 0.5;
      this.mdp == 'password'
        ? this.router.navigate(['/computer/desktop'])
        : console.log('pas ok');
    }
  }

  public test(event: any) {
    if (event.keyCode == 13) {
      this.error++;
      console.log(this.error);
      this.tailleIndice += 0.5;
      this.mdp == 'password'
        ? this.router.navigate(['/computer/desktop'])
        : console.log('pas ok');
    }
  }

  constructor(private router: Router) {
    this.mdp = '';
    this.error = 0;
    this.tailleIndice = 0.5;
  }

  ngOnInit(): void {}
}
