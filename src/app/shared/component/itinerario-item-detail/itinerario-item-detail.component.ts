import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itinerario-item-detail-component',
  templateUrl: './itinerario-item-detail.component.html',
  styleUrls: ['./itinerario-item-detail.component.scss'],
})
export class ItinerarioItemDetailComponent implements OnInit {

  @Input() chiesa;
  constructor() { }

  ngOnInit() { }

}
