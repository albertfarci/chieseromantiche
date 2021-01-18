import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiesa-item',
  templateUrl: './chiesa-item.component.html',
  styleUrls: ['./chiesa-item.component.scss'],
})
export class ChiesaItemComponent implements OnInit {

  @Input() chiesa

  constructor() { }

  ngOnInit() {
    
  }

}
