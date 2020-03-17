import { Character } from '../classes/Character'
import {
    Injectable
  } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class CharacterService {

    public characters: Character[] = [
    {
        characterID: 1,
        name: 'Flamevine',
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
          name: 'Voodoocat',
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
            name: 'Boweltree',
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
              name: 'Smogpod',
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
              name: 'Terrorwing',
              description: 'Salutava sempre',
              stat: [{
          
              attack: 35,
              nameSA: 'Super pugno cazzuto',
              specialAtk: 50 ,
              def: 20
            }],
            atk: 30,
            life: 100,
              url:'../../../../assets/maskboy.png'
              },
              {
                characterID: 6 ,
                name: 'Venomthing',
                description: 'Occhio per occhio',
                stat: [{
            
                attack: 35,
                nameSA: 'Non so fare nulla',
                specialAtk: 50 ,
                def: 20
              }],
              atk: 30,
              life: 100,
                url:'../../../../assets/sadboy.png'
                },
                {
                  characterID: 6 ,
                  name: 'Venomthing',
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
                    characterID: 6 ,
                    name: 'Venomthing',
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
                    }
    
    
    
            ];

    setCharcaterLife = (character, value) =>{
        character.life = value;
        console.log(character.life);
    }


    }