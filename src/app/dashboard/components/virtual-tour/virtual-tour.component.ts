import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-virtual-tour',
  templateUrl: './virtual-tour.component.html',
  styleUrls: ['./virtual-tour.component.scss'],
})
export class VirtualTourComponent implements OnInit {

  @Input() chieseRomane;
  @Input() beaconsScanned;

  constructor() { }

  ngOnInit() { }

}
