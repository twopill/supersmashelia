import { Component, OnInit } from '@angular/core';
import { BattleService } from 'src/app/service/battle.service';
import { Character } from 'src/app/classes/Character';
import { SmashService } from 'src/app/service/smash.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { CharacterService } from 'src/app/service/character.service';
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
  public flag : boolean = true;
  private toggle : boolean = false;
  public lifex:number = 0;
  public boxWidth:number =  100;
  public boxWidth2:number = 100;
  public boxColor:string = 'rgb(91, 179, 91)'; 
  public character: Character [] = [];

  constructor(
    public BattleService: BattleService,
    public SmashService: SmashService,
    public CharacterService: CharacterService
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

  clickEvent = () => {



  }
  

  

}
