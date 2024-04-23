import { Component, OnInit } from '@angular/core';
import { appInfo } from '../../../../assets/data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  version: string = appInfo.version;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  openWips(){
    /*const browser = this.iab.create('https://wispmx-movil.com/inicio/');
    browser.show();*/
    window.open('https://wispmx-movil.com/inicio/');
  }

}
