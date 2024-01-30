import { IFaction } from "./factions.interface";
import { IRaceMilitaryStats } from "./race_military.interface";

export interface IRace {
    id: number
    name: string;
    playstyle: "Rush" | "Defensive" | "Hybrid"
    factions: IFaction[]
    raceMilitary: IRaceMilitaryStats
    imagePath: string
}