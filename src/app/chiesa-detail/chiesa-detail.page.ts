import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';

@Component({
  selector: 'app-chiesa-detail',
  templateUrl: './chiesa-detail.page.html',
  styleUrls: ['./chiesa-detail.page.scss'],
})
export class ChiesaDetailPage implements OnInit {

  chiesa

  constructor(
    private activeRoute: ActivatedRoute,
    private chieseRomaneService: ChieseRomaneService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.chieseRomaneService.getAllChiese()
      .subscribe(data => {
        console.log(data.filter(x => x.id == id));
        this.chiesa = data.filter(x => x.id == id)[0]
      })
  }

}
