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

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.apiData()
  }

  selectedFirstCurrency(value:any){
    if (value === "34") {
      this.currencyMid = 1;
      this.currencyCode = "PLN"
      console.log(this.currencyMid);
    }
    else {
      this.currencyMid = this.allDatas[value].mid;
      this.currencyCode = this.allDatas[value].code;
      console.log(this.currencyMid);
      console.log(typeof this.currencyMid);
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
