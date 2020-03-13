import { Component, OnInit } from '@angular/core';
import { TornamentService } from 'src/app/service/tornament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  constructor(
    public TornamentService: TornamentService
  ) { }

  ngOnInit(): void {
  }

}
