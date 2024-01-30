import { IGameDlc } from "./game_dlc.interface"

export interface IGame {
        id: number
        gameName: string
        gameDlcs: IGameDlc[]
}