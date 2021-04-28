import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';

@Component({
  selector: 'app-chiesa-detail',
  templateUrl: './chiesa-detail.page.html',
  styleUrls: ['./chiesa-detail.page.scss'],
})
export class ChiesaDetailPage {

  chiesa
  showIframe: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private chieseRomaneService: ChieseRomaneService
  ) { }


  ionViewDidEnter(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.chiesa = this.chieseRomaneService.getChiesaById(id);
  }

  ionViewWillEnter() {
    this.showIframe = true
  }

  ionViewDidLeave() {
    this.showIframe = false
  }
}
