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
          
    }
    }
    controlloAccessTour = () =>{
      
      if(this.characters.length > 2){
        this.router.navigateByUrl('/torneo');
      }else{
        alert('Aggiungi più di un personaggio per partecipare al torneo');
      }
    }

    fightTorneo = () => {
      
      let rand = Math.round(this.characters.length * Math.random() );
      
      alert('Ha vinto: '+this.characters[rand].name);
      window.location.replace('/selectcharacter');
    }


    

}