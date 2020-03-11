import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/classes/Character';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() inputCharacter : Character;

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

    url:'k'

    }


  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

}
