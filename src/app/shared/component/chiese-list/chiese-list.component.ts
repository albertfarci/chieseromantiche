import { Component, OnInit } from '@angular/core';
import { ChieseRomaneService } from '../../services/chiese-romane.service';

@Component({
  selector: 'app-chiese-list',
  templateUrl: './chiese-list.component.html',
  styleUrls: ['./chiese-list.component.scss'],
})
export class ChieseListComponent implements OnInit {

  chieseRomane ;

  constructor(private chieseRomaneService: ChieseRomaneService) { }

  ngOnInit() {
      this.chieseRomaneService.getAllChiese().subscribe(data =>{
        console.log(data);
        this.chieseRomane = data
      })
  }

}
