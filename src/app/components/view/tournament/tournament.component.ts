import { Component, OnInit } from '@angular/core';
import { TornamentService } from 'src/app/service/tornament.service';
import { Character } from 'src/app/classes/Character';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit {

  public character: Character [] = [];

  constructor(
    public TornamentService: TornamentService
  ) { }

  ngOnInit(): void {
  }

  

}
