import { Component, OnInit,Input, Output } from '@angular/core';
import { Character } from 'src/app/classes/Character';
import { BattleService } from 'src/app/service/battle.service';

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
        },
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
        


  ];
  
  constructor(public BattleService: BattleService) { }

  ngOnInit(): void {
  }

  

}
