import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChieseRomaneService {

  constructor(private httpClient:HttpClient) { }

  getAllChiese(){
    return this.httpClient.get("/assets/chieseRomane.json");
  }
}
