import { Component } from '@angular/core';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chieseRomane;
  constructor(private chieseRomaneService: ChieseRomaneService) { }

  ngOnInit() {
    this.chieseRomane = this.chieseRomaneService.getAllChiese()
  }

  getAllChiese() {
    //return this.chieseRomaneService.getAllChiese();
  }

}
