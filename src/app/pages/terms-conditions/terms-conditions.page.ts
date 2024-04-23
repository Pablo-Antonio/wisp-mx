import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html'
})
export class TermsConditionsPage implements OnInit {
  title: string = 'Términos y condiciones';
  clase:string = 'header-main';
  title_class: string = 'title-color';
  
  constructor() { }

  ngOnInit() {
  }

}
