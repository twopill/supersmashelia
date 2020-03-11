import { Character } from '../classes/Character'

export class SmashService {
    public characters : Character[]=[];
    constructor(){}
   
    
    public clicks : number = 0;
    fightRandom  = (character1: Character,character2: Character) => {
        this.characters[0] = character1;
        this.characters[1] = character2;
        this.clicks +=1;
        console.log(this.characters[1]);
        console.log(this.characters[1].life);
        if(this.clicks===1){
            //attacca il character[0] al character [1]
            
            this.characters[1].life -= this.characters[0].atk;
            console.log(this.characters[1].life);
        }
            // }
        // console.log(character[0],character[1]);

    


}

}