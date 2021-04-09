import { Component, Input } from '@angular/core';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from '../../models/list-map-settings.model';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent {

  @Input() chieseList;
  @Input() listMapConfiguration: LisMapModel;

  constructor() { }

}
