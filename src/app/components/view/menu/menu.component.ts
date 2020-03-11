import { Component, OnInit,Input, Output } from '@angular/core';
import { Character } from 'src/app/classes/Character';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public term: string = '';

  public characters: Character[] = [
{
    characterID: 1,
    name: 'gianni',
    description: 'Salutava sempre',
    stat: [{

    attack: 35,
    nameSA: 'Super pugno cazzuto',
    specialAtk: 50 ,
    def: 20
  }],

    url:'https://toppng.com/uploads/preview/do-any-characters-have-renders-that-are-based-on-official-super-smash-bros-ultimate-bowser-render-11563060022zjp1g5qgz0.png'
    },
    {
      characterID: 2,
      name: 'beppe',
      description: 'Occhio per occhio',
      stat: [{
  
      attack: 35,
      nameSA: 'Non so fare nulla',
      specialAtk: 50 ,
      def: 20
    }],
  
      url:'https://vignette.wikia.nocookie.net/supermarioitalia/images/a/af/Lucario_SSB4.png/revision/latest?cb=20140131160522&path-prefix=it'
      }


  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  getFilteredCharacter = (): Character[] => {


    const filteredCharacters = this.characters.filter(
      character => {

        const t = this.term.toLowerCase();

        const n = character.name.toLowerCase();
        const nIncludes = n.includes(t);

        const d = character.description ? character.description.toLowerCase() : '';
        const dIncludes = d.includes(t);

        return nIncludes || dIncludes;
      }
    );

    return filteredCharacters;

  }

}
