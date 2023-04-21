import { Component } from '@angular/core';

interface Option {
  name:string, 
  icon:string,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  options:Option[] = [{name:"home", icon:"../../assets/img/house-solid.svg"}, {name: "about us", icon:"../../assets/img/users-solid.svg"}, {name: "favourites currencies", icon: "../../assets/img/heart-solid.svg"}, {name: "wallet", icon: "../../assets/img/wallet-solid.svg"}]
  
}
