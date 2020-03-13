import { Character } from '../classes/Character'
import {
    Injectable
  } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class SmashService {
    public characters : Character[]=[];
    constructor(
        private router: Router
    ){}
   
    
    public clicks : number = 0;
    
    fight1 = (character1: Character,character2: Character) => {
        this.characters[0] = character1;
        this.characters[1] = character2;
        this.clicks +=1;
  
        this.characters[1].life -= this.characters[0].atk;
        if(this.characters[1].life <= 0){
            alert(this.characters[1].name+' è morto');
            this.router.navigateByUrl('/welcomepage');
        }
    }

    fight2 = (character1: Character,character2: Character) => {
        this.characters[0] = character1;
        this.characters[1] = character2;
        this.clicks +=1;
  
        this.characters[0].life -= this.characters[1].atk;
        if(this.characters[0].life <= 0){
            alert(this.characters[0].name+' è morto');
        }
    }

}