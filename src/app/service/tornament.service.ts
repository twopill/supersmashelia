import { Character } from '../classes/Character'
import {
    Injectable
  } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

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
        
        if(!this.isCharacterInTornament(character) && this.characters.length < 8 ){
          this.characters.push(character);
          console.log(character);
    }
    }
//tolto un attimo dal bottone del tonreo in menu compinent " [routerLink]="['/torneo']" "
    controlloAccessTour = () =>{
      console.log(this.characters.length);
      if(this.characters.length > 2){
        this.router.navigateByUrl('/torneo');
      }else{
        alert('Aggiungi più di un personaggio per partecipare al torneo');
      }
    }

    fightTorneo = () => {
      console.log('entrato');
      let rand = Math.round(this.characters.length * Math.random() );
      console.log(this.characters.length);
      alert('Ha vinto: '+rand);
  
    }


    

}