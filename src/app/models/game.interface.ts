import { IGame_DLC } from "./game_dlc.interface"

export interface IGame {
        id: number
        game_name: string
        game_dlcs: IGame_DLC[]
}