import { Component, OnInit,Input, Output } from '@angular/core';
import { Character } from 'src/app/classes/Character';
import { BattleService } from 'src/app/service/battle.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TornamentService } from 'src/app/service/tornament.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  faHeart = faHeart   ;
  faMeteor = faMeteor ;
  faHome = faHome     ;

  public term: string = '';
  
  public colors: string[] = [
    '#fea87d',
    '#3eac7d',
    '#1e237d',
    '#ee237d',
    '#ee231d',
    '#fac70d',

  ]

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
    atk: 30,
    life: 100,
    url:'../../../../assets/monster.png'
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
    atk: 30,
    life: 100,
      url:'../../../../assets/cat.png'
      },
      {
        characterID: 3,
        name: 'beppe',
        description: 'Occhio per occhio',
        stat: [{
    
        attack: 35,
        nameSA: 'Non so fare nulla',
        specialAtk: 50 ,
        def: 20
      }],
      atk: 30,
      life: 100,
        url:'../../../../assets/devil.png'
        },
        {
          characterID: 4,
          name: 'gianni',
          description: 'Salutava sempre',
          stat: [{
      
          attack: 35,
          nameSA: 'Super pugno cazzuto',
          specialAtk: 50 ,
          def: 20
        }],
        atk: 30,
        life: 100,
          url:'../../../../assets/badboy.png'
          },
        {
          characterID: 5,
          name: 'gianni',
          description: 'Salutava sempre',
          stat: [{
      
          attack: 35,
          nameSA: 'Super pugno cazzuto',
          specialAtk: 50 ,
          def: 20
        }],
        atk: 30,
        life: 100,
          url:'http://pngimg.com/uploads/pinocchio/pinocchio_PNG1.png'
          },
          {
            characterID: 6 ,
            name: 'beppe',
            description: 'Occhio per occhio',
            stat: [{
        
            attack: 35,
            nameSA: 'Non so fare nulla',
            specialAtk: 50 ,
            def: 20
          }],
          atk: 30,
          life: 100,
            url:'http://pngimg.com/uploads/zombie/zombie_PNG44.png'
            }


  ];
  
  constructor(
    public BattleService: BattleService,
    public TornamentService: TornamentService
    ) { }

  ngOnInit(): void {
  }

  

}
