import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/classes/Character';
import {Router} from '@angular/router';
import { BattleService } from 'src/app/service/battle.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() inputCharacter : Character;

  

  constructor(
    public BattleService: BattleService
  ) { }

  ngOnInit(): void {
  }

  

}
