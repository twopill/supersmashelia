import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  faCoffee = faCoffee;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect = () => {
    this.router.navigateByUrl('/selectcharacter');
  }

}
