import { Stat } from './Stat';

export class Character{

    public characterID: number;
    public name: string;
    public description: string;
    public stat: Stat[] = [];
    public atk: number;
    public life: number;
    public url: string;

}