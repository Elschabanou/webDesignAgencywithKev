import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {

  public textVariable:string = "Dies ist ein String";


  public listeAnStrings = [
    "sfgdf",
    "jkghhj",
    "1234",
    "fggdfhfg",
    "sdfdsfgsgd",
    "ssdasd",
    "sdfsd",
  ];

}
