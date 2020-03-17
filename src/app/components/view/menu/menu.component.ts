import { Component, OnInit,Input, Output } from '@angular/core';
import { Character } from 'src/app/classes/Character';
import { BattleService } from 'src/app/service/battle.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TornamentService } from 'src/app/service/tornament.service';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  faHeart = faHeart   ;
  faMeteor = faMeteor ;
  faHome = faHome     ;
  public lifex:number = 0;
  public flag : boolean = true;

  public character: Character [] = [];
  
  public colors: string[] = [
    '#fea87d',
    '#3eac7d',
    '#1e237d',
    '#ee237d',
    '#ee231d',
    '#fac70d',

  ]

  constructor(
    public BattleService: BattleService,
    public TornamentService: TornamentService,
    public CharacterService: CharacterService
    ) { }

  ngOnInit(): void {

    if(this.flag){
      this.lifex = this.CharacterService.characters[0].life,this.lifex;
      this.flag = false;
    }
     for(let i = 0; i < this.BattleService.characters.length; i++){
       console.log('dentro al for');
       this.CharacterService.setCharcaterLife(this.BattleService.characters[0],this.lifex);
       this.CharacterService.setCharcaterLife(this.BattleService.characters[1],this.lifex);
     }
    
  }

  

}
