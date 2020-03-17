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
    '#C7CEEA',
    '#FFF49C',
    '#85DE77',
    '#C8D6B9',
    '#8FC1A9',
    '#FBD7BB',
    '#D1D693',
    '#E7E5FF',
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
       this.CharacterService.setCharcaterLife(this.BattleService.characters[0],this.lifex);
       this.CharacterService.setCharcaterLife(this.BattleService.characters[1],this.lifex);
     }

  }

  reset = () =>{
    window.location.replace('/selectcharacter');
  }

}
