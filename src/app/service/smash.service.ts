import { Character } from '../classes/Character'
import {
    Injectable
  } from '@angular/core';
import {Router} from '@angular/router';
import { CharacterService } from './character.service';
import { equal } from 'assert';

@Injectable({
    providedIn: 'root'
  })

export class SmashService {
    public characters : Character[]=[];
    public flag : boolean = true;
    public lifex:number = 0;
    
    constructor(
        private router: Router,
        public CharacterService:CharacterService 
    ){}
   
    
    public clicks : number = 0;
    
    
    

    fight1 = (character1: Character,character2: Character) => {
        this.characters[0] = character1;
        this.characters[1] = character2;
        
        this.clicks +=1;
        if(this.flag){
            this.lifex = this.characters[1].life;
            console.log(this.lifex+' lifex flag')
            this.flag = false;
        }
        
        this.characters[1].life -= this.characters[0].atk;
    

        if(this.characters[1].life <= 0){
            alert(this.characters[1].name+' è morto');
            console.log(this.lifex+' lifex')
            this.CharacterService.setCharcaterLife(character2,this.lifex);
            window.location.replace('/welcomepage');
        }
    }

    fight2 = (character1: Character,character2: Character) => {
        this.characters[0] = character1;
        this.characters[1] = character2;
        this.clicks +=1;
        if(this.flag){
            this.lifex = this.characters[1].life;
            console.log(this.lifex+' lifex flag')
            this.flag = false;
        }

        this.characters[0].life -= this.characters[1].atk;
        if(this.characters[0].life <= 0){
            alert(this.characters[0].name+' è morto');
            this.CharacterService.setCharcaterLife(character2,this.lifex);
            window.location.replace('/welcomepage');
        }
    }

}