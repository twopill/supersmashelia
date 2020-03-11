import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  faNewspaper = faNewspaper;
  faShoppingBasket = faShoppingBasket;
  faToolbox = faToolbox;
  faPowerOff = faPowerOff;
  faBatteryThreeQuarters = faBatteryThreeQuarters;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  counterBattery = () =>{
    
  }

}
