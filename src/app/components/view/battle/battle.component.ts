import { Component, OnInit } from '@angular/core';
import { BattleService } from 'src/app/service/battle.service';
import { Character } from 'src/app/classes/Character';
import { SmashService } from 'src/app/service/smash.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  faHeart = faHeart   ;
  faMeteor = faMeteor ;

  public character: Character [] = [];

  constructor(
    public BattleService: BattleService,
    public SmashService: SmashService
  ) { }

  ngOnInit(): void {
  }

  
}
