import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chiese-result-number',
  templateUrl: './chiese-result-number.component.html',
  styleUrls: ['./chiese-result-number.component.scss'],
})
export class ChieseResultNumberComponent {

  @Input() chieseList

  constructor() { }

}
