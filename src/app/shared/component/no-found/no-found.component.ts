import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss'],
})
export class NoFoundComponent {

  @Input() phase
  constructor() { }

}
