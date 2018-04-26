import { Component, OnInit } from '@angular/core';
import { MarketcapService } from '../services/marketcap.service';
import { Currency } from '../interfaces/currency';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: Currency[];

  constructor(private _marketcapS: MarketcapService) { }

  ngOnInit() {
    this._marketcapS.getCurrencies(10,1).subscribe((data) => {
      console.log(data);
      this.currencies = data;
    })
  }

  showMore(){
    let lastElement: number = this.currencies[this.currencies.length-1].rank;
    this._marketcapS.getCurrencies(10,lastElement).subscribe((data) => {
      console.log(data);
      data.forEach(element => {
        this.currencies.push(element);
      });
      
    })
  }

}
