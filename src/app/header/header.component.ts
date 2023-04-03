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
  options:Option[] = [{name:"home", icon:"['fas', 'house']"}, {name: "about us", icon:"user"}, {name: "favourites currencies", icon: "heart"}, {name: "wallet", icon: "wallet"}]
  
}
