import { Character } from '../classes/Character';
import { BattleSelect } from '../classes/BattleSelect';

export class BattleService {
    
    public characters: Character[] = [];

    constructor(){}

    isCharacterInBattle= (character) : boolean => {
        return this.characters.find( cara => cara.characterID == character.characterID ) != null;
    }

    addCharacterToBattle = (character) => {
        
        
        if(!this.isCharacterInBattle(character))
          this.characters.push(character);
          console.log(character);
        
    }

    getCharacter = () =>{
        return this.characters;
    }

    



}