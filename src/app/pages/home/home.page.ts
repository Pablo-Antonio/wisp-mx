import { Component, OnInit } from '@angular/core';
import { routes, Page } from '../../../assets/data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Browser } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = 'Menú principal';
  clase:string = 'header-main';
  pages: Page[] = routes;

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }

  openWips(){
    /*const browser = this.iab.create('https://wisp.mx/');
    browser.show();*/
    window.open('https://wispmx-movil.com/inicio/');
  }

  openFB(){
    /*const browser = this.iab.create('https://www.facebook.com/wispmx/');
    browser.show();*/
    window.open('https://www.facebook.com/wispmx/');
  }

  openIG(){
    /*const browser = this.iab.create('https://www.instagram.com/wispmx/');
    browser.show();*/
    window.open('https://www.instagram.com/wispmx/');
  }

  openRecarga(){
    /*const browser = this.iab.create('https://www.instagram.com/wispmx/');
    browser.show();*/
    window.open('https://byplus.io/wispmx');
  }

  openAdd(){
    
  }
}
