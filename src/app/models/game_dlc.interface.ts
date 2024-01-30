import { IFaction } from "./factions.interface";

export interface IGameDlc {
        id: number
        dlcName: string
        factions: IFaction[]
        date: Date
        type: string,
        paid: boolean
}