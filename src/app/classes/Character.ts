import { Stat } from './Stat';

export class Character{

    public characterID: number;
    public name: string;
    public description: string;
    public stat: Stat[] = [];
    public url: string;

}