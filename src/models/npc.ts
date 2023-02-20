export interface NPC {
    first_name: string,
    last_name: string,
    portrait?: string,
    age: number,
    gender: boolean,
    height_inches: number,
    weight_lbs: number,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    alignment: ALIGNMENT,
    class: string,
    physical_description: string,
    personality_description: string,
    history: string,
    plot_hook?: string,
    race: RACE,
}

export enum ALIGNMENT {
    LG,
    NG,
    CG,
    LN,
    TN,
    CN,
    LE,
    NE,
    CE
}

export enum RACE {
    HUMAN="Human",
    ELF="Elf",
    HALF_ELF="Half Elf",
    DWARF="Dwarf",
    GOBLIN="Goblin",
    HALF_ORC="Half Orc",
    HALFLING="Halfling",
    GNOME="Gnome",
    DRAGONBORN="Dragonborn"
}
