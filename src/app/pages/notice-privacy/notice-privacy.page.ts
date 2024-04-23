import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-privacy',
  templateUrl: './notice-privacy.page.html'
})
export class NoticePrivacyPage implements OnInit {
  title: string = 'Aviso de privacidad';
  clase:string = 'header-main';
  title_class: string = 'title-color';

  constructor() { }

  ngOnInit() {
  }

}
