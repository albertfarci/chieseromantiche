import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-chiese-list',
  templateUrl: './chiese-list.component.html',
  styleUrls: ['./chiese-list.component.scss'],
})
export class ChieseListComponent {

  @Input() chieseRomane;

  constructor() { }

}
