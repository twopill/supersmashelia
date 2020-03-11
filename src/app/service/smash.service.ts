import { Character } from '../classes/Character'

export class SmashService {
    public characters : Character;
    constructor(){}
   

    fightRandom = (character) => {
        
        console.log(character[0],character[1]);

    }


}