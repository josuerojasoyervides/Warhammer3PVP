import { IFaction } from "./factions.interface";
import { IRace_military } from "./race_military.interface";

export interface IRace {
    id: number
    name: string;
    playstyle: "Rush" | "Defensive" | "Hybrid"
    factions: IFaction[]
    race_military: IRace_military
    image_path: string
}