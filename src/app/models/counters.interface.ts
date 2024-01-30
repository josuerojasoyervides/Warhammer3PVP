import { IRaceMilitaryStats } from "./race_military.interface";


export interface ICounters {
    archery: IRaceMilitaryStats;
    antilarge: IRaceMilitaryStats;
    artillery: IRaceMilitaryStats;
    cavalry: IRaceMilitaryStats;
    magic: IRaceMilitaryStats;
    monsters: IRaceMilitaryStats;
    missiles: IRaceMilitaryStats;
    flyingUnits: IRaceMilitaryStats;
    flyingMonsters: IRaceMilitaryStats;
    frontline: IRaceMilitaryStats;
    swordsmen: IRaceMilitaryStats;
  }