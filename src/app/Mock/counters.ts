import { ICounters } from "../models/counters.interface";

/* 
Archery: [archery, antilarge, monsters, missiles, flying units, flying monsters,, swordsmen] 
Antilarge:  [cavalry, monsters, flying units, flying monsters] 
Artillery: [archery, antilarge, missiles,  frontline, swordsmen] 
Cavalry: [archery, artillery, cavalry, magic, monsters, missiles, flying units, flying monsters, frontline, swordsmen] 
Magic:  [archery, antilarge, artillery, cavalry, magic, monsters, missiles, flying units, flying monster, frontline, swordsmen]
Monsters: [archery, artillery, magic, monsters, missiles, frontline, swordsmen] 
Missiles:  [antilarge, monsters, flying units, flying monster, frontline, swordsmen] 
Flying units: [archery, artillery, magic, missiles, flying units, flying monster] 
Flying monster:  [archery, artillery, magic, monsters, missiles, flying monster, frontline, swordsmen] 
Frontline: [archery, antilarge, missiles, flying units, frontline] 
Swordsmen: [antilarge, monsters, flying units, frontline, swordsmen]
*/
/* 1 of 3 Deals few dmg or waste of time or won't reach in time */
/* 2 of 3 At least 2 units to win or even dmg or needs supp to win, tanks 50 50 */
/* 3 of 3 Dangerous to them or tanks them great */

/*
ToDo: Crear un promedio de los puntos de counter y multiplicarlos por el valor de la unidad,
y restarle valor por potencial de las unidades enemigas para obtener el valor de la unidad en esta batalla.
Esto mostrará el potencial de esa unidad y el posible desempeño que tendrá en esta batalla
*/
export const counters: ICounters = {
    archery: {
        archery: 3,
        antilarge: 2,
        artillery: 1,
        cavalry: 1,
        magic: 3,
        monsters: 2,
        missiles: 3,
        flyingUnits: 2,
        flyingMonsters: 2,
        frontline: 1,
        swordsmen: 3,
    },
    antilarge: {
        archery: 1,
        antilarge: 2,
        artillery: 1,
        cavalry: 3,
        magic: 1,
        monsters: 3,
        missiles: 1,
        flyingUnits: 3,
        flyingMonsters: 3,
        frontline: 2,
        swordsmen: 2,
    },
    artillery: {
        archery: 3,
        antilarge: 3,
        artillery: 3,
        cavalry: 1,
        magic: 3,
        monsters: 2,
        missiles: 3,
        flyingUnits: 2,
        flyingMonsters: 2,
        frontline: 3,
        swordsmen: 3,
    },
    cavalry: {
        archery: 3,
        antilarge: 2,
        artillery: 3,
        cavalry: 2,
        magic: 3,
        monsters: 2,
        missiles: 3,
        flyingUnits: 2,
        flyingMonsters: 2,
        frontline: 3,
        swordsmen: 2,
    },
    magic: {
        archery: 3,
        antilarge: 3,
        artillery: 3,
        cavalry: 3,
        magic: 3,
        monsters: 3,
        missiles: 3,
        flyingUnits: 3,
        flyingMonsters: 3,
        frontline: 3,
        swordsmen: 3,
    },
    monsters: {
        archery: 3,
        antilarge: 2,
        artillery: 3,
        cavalry: 3,
        magic: 3,
        monsters: 2,
        missiles: 3,
        flyingUnits: 2,
        flyingMonsters: 2,
        frontline: 3,
        swordsmen: 3,
    },
    missiles: {
        archery: 3,
        antilarge: 3,
        artillery: 1,
        cavalry: 2,
        magic: 3,
        monsters: 3,
        missiles: 3,
        flyingUnits: 3,
        flyingMonsters: 3,
        frontline: 2,
        swordsmen: 3,
    },
    flyingUnits: {
        archery: 3,
        antilarge: 2,
        artillery: 3,
        cavalry: 2,
        magic: 3,
        monsters: 2,
        missiles: 3,
        flyingUnits: 2,
        flyingMonsters: 2,
        frontline: 3,
        swordsmen: 2,
    },
    flyingMonsters: {
        archery: 3,
        antilarge: 3,
        artillery: 3,
        cavalry: 2,
        magic: 3,
        monsters: 2,
        missiles: 3,
        flyingUnits: 2,
        flyingMonsters: 2,
        frontline: 3,
        swordsmen: 3,
    },
    frontline: {
        archery: 3,
        antilarge: 2,
        artillery: 1,
        cavalry: 2,
        magic: 1,
        monsters: 2,
        missiles: 2,
        flyingUnits: 1,
        flyingMonsters: 1,
        frontline: 2,
        swordsmen: 2,
    },
    swordsmen: {
        archery: 1,
        antilarge: 3,
        artillery: 1,
        cavalry: 1,
        magic: 1,
        monsters: 2,
        missiles: 1,
        flyingUnits: 2,
        flyingMonsters: 1,
        frontline: 3,
        swordsmen: 2,
    },
}