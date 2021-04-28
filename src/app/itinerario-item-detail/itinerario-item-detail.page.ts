import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';

@Component({
  selector: 'app-itinerario-item-detail',
  templateUrl: './itinerario-item-detail.page.html',
  styleUrls: ['./itinerario-item-detail.page.scss'],
})
export class ItinerarioItemDetailPage implements OnInit {

  chiesa
  showIframe: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private chieseRomaneService: ChieseRomaneService
  ) { }

  ngOnInit() {

    const id = this.activeRoute.snapshot.paramMap.get('id');

    console.log(id)
    this.chiesa = this.chieseRomaneService.geItinerarioById(id)
  }

  ionViewWillEnter() {
    this.showIframe = true
  }

  ionViewDidLeave() {
    this.showIframe = false
  }
}
