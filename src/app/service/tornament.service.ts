import { Character } from '../classes/Character'
import {
    Injectable
  } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class TornamentService {
    public characters : Character[]=[];
    constructor(
        private router: Router
    ){}

    isCharacterInTornament= (character) : boolean => {
        return this.characters.find( cara => cara.characterID == character.characterID ) != null;
    }

    addCharacterToTornament = (character) => {
        
        if(!this.isCharacterInTornament(character) && this.characters.length < 8){
          this.characters.push(character);
          console.log(character);
    }
    }

    

}