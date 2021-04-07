import { Component } from '@angular/core';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chieseRomane: Observable<any>;
  constructor(private chieseRomaneService: ChieseRomaneService) { }

  ngOnInit() {
    this.chieseRomane = this.chieseRomaneService.getAllChiese()
  }

  filterList(evt) {
    console.log(evt.srcElement.value)
    this.chieseRomane = this.chieseRomaneService.getAllChiese().pipe(
      map(result =>
        result.filter(one => one.title.rendered.includes(evt.srcElement.value))
      )

    )
  }

}
