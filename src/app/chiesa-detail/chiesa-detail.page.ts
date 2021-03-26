import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';

@Component({
  selector: 'app-chiesa-detail',
  templateUrl: './chiesa-detail.page.html',
  styleUrls: ['./chiesa-detail.page.scss'],
})
export class ChiesaDetailPage implements OnInit {

  chiesa

  constructor(
    private activeRoute: ActivatedRoute,
    private chieseRomaneService: ChieseRomaneService,
    private fullScreenImage: FullScreenImage
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.chieseRomaneService.getAllChiese()
      .subscribe(data => {
        console.log(data.filter(x => x.id == id));
        this.chiesa = data.filter(x => x.id == id)[0]
      })
  }

  showImageFullScren(path) {
    this.fullScreenImage.showImageURL('path')
      .then((data: any) => console.log(data))
      .catch((error: any) => console.error(error));
  }

}
