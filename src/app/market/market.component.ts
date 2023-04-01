import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  allDatas:any = "";

  currencyMid:number = 0;
  currencyCode:string = "";

  currencySecondMid:number = 0;
  currencySecondCode:string = "";

  amount:number = 0;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.apiData()
  }

  calculate(cash:any){
    this.amount = cash * this.currencyMid / this.currencySecondMid;
    console.log(this.amount)
  }

  selectedFirstCurrency(value:any){
    if (value === "34") {
      this.currencyMid = 1;
      this.currencyCode = "PLN"
    }
    else {
      this.currencyMid = this.allDatas[value].mid;
      this.currencyCode = this.allDatas[value].code;
    }

  }
  selectedSecondCurrency(value:any){
    if (value === "34") {
      this.currencySecondMid = 1;
      this.currencySecondCode = "PLN"
    }
    else {
      this.currencySecondMid = this.allDatas[value].mid;
      this.currencySecondCode = this.allDatas[value].code;
    }

  }

  apiData(){
    this.apiService.getDataFromApi().subscribe({
      next: (data:any) => {
        this.allDatas = data[0].rates;
        console.log(this.allDatas);
      },
      error: (err:any) => console.error(err)
    })
  }

}
