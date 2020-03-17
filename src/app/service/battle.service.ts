import { Character } from '../classes/Character';
import { BattleSelect } from '../classes/BattleSelect';
import { Router } from '@angular/router';
import {
    Injectable
  } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class BattleService {
    
    public characters: Character[] = [];

    public colors: string[] = [
      '#fea87d',
      '#3eac7d',
      '#1e237d',
      '#ee237d',
      '#ee231d',
      '#fac70d',
  
    ]

    constructor(
        private router: Router
    ){}

    isCharacterInBattle= (character) : boolean => {
        return this.characters.find( cara => cara.characterID == character.characterID ) != null;
    }

    addCharacterToBattle = (character) => {
        
        if(!this.isCharacterInBattle(character) && this.characters.length < 2){
          this.characters.push(character);
         
    }
    }

    getCharacter = () =>{
        return this.characters;
    }

    controlloAccessBattle = () =>{
        
        if(this.characters.length > 1){
          this.router.navigateByUrl('/fight');
        }else{
          alert('Aggiungi due personaggi per combattere !');
        }
      }

    



}