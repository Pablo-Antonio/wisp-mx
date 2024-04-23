import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent implements OnInit {
  @Input () title: string;
  @Input () title_class: string;

  constructor() { }

  ngOnInit() {}

}
