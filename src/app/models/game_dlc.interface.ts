import { IFaction } from "./factions.interface";

export interface IGame_DLC {
        id: number
        dlc_name: string
        factions: IFaction[]
        date: Date
        type: string,
        paid: boolean
}