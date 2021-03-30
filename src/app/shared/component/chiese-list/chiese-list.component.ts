import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-chiese-list',
  templateUrl: './chiese-list.component.html',
  styleUrls: ['./chiese-list.component.scss'],
})
export class ChieseListComponent implements OnChanges {

  @Input() chieseRomane;

  constructor() { }

  ngOnChanges() {
    console.log(this.chieseRomane)
  }

}
