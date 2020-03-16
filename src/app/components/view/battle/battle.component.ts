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
  public showGif:boolean=false;
  public showGif2:boolean=false;
  public character: Character [] = [];

  constructor(
    public BattleService: BattleService,
    public SmashService: SmashService
  ) { }

  ngOnInit(): void {
  }

  smashEffectOn = () =>{
        
    this.showGif = true;
    setTimeout( () => this.showGif = false, 200);
    
  }

  smashEffectOn2 = () =>{
        
    this.showGif2 = true;
    setTimeout( () => this.showGif2 = false, 200);
    
  }
  
}
