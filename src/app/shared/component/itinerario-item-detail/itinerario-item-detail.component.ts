import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-itinerario-item-detail-component',
  templateUrl: './itinerario-item-detail.component.html',
  styleUrls: ['./itinerario-item-detail.component.scss'],
})
export class ItinerarioItemDetailComponent implements OnChanges {

  @Input() chiesa;
  @Input() stop;

  constructor() { }

  ngOnChanges(){


    console.log(this.stop)
    if(this.stop == true){
      
      let  player = document.getElementById('multimedia');
      player = this.chiesa[0]?.audio;
    }
  }

}
