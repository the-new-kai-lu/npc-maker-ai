export interface JobType {
    displayName: string
    jobWeights: number[],
}

export const JOB_TYPES: {[key: string]: JobType} = {
    // [Rural, Poor, Subsistence, Resource, General Town Labor, Unlawful, Rich, Unlawful, General town labor, Feudal system, Urban, Poor, General, Unlawful, Middle, General, Magic, Religious, Unlawful, Upper, General, Feudal, Magical, Military, Traveling]
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    rural: {
        displayName: "Rural",
        jobWeights: [1.0, 0.95, 0.7, 0.25, 0.05, 0.0, 0.05, 0.05, 0.85, 0.1, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.025]
    },
    manor: {
        displayName: "Manor",
        jobWeights: [1.0, 0.4, 0.675, 0.2, 0.1, 0.025, 0.6, 0.025, 0.6, 0.375, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.05]
    },
    village: {
        displayName: "Village",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    town: {
        displayName: "Town",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    estate: {
        displayName: "Estates",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    slums: {
        displayName: "Slums",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    city: {
        displayName: "City",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    cityPalatialDistrict: {
        displayName: "Noble Quarters",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    cityMilitaryDistrict: {
        displayName: "Military District",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    cityReligiousDistrict: {
        displayName: "Religious District",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    }
}


export const JOB_WEIGHTS_INDICES: {[key: string]: number[]} = {
    traveling: [24],
    ruralPoorSubsistence: [0, 1, 2],
    ruralPoorResource: [0, 1, 3],
    ruralPoorGeneral: [0, 1, 4],
    ruralPoorUnlawful: [0, 1, 5],
    ruralRichUnlawful: [0, 6, 7],
    ruralRichGeneral: [0, 6, 8],
    ruralRichFeudal: [0, 6, 9],
    urbanPoorGeneral: [10, 11, 12],
    urbanPoorUnlawful: [10, 11, 13],
    urbanMiddleGeneral: [10, 14, 15],
    urbanMiddleMagical: [10, 14, 16],
    urbanMiddleReligious: [10, 14, 17],
    urbanMiddleUnlawful: [10, 14, 18],
    urbanRichGeneral: [10, 19, 20],
    urbanRichFeudal: [10, 19, 21],
    urbanRichMagical: [10, 19, 22],
    urbanMilitary: [10, 23]
}

export enum JOBS {
    Farmer = "Farmer",
    Shepherd = "Shepherd",
    Fisherman = "Fisherman",
    Minstrel = "Minstrel",
    Trader = "Trader",
    Diplomat = "Diplomat",
    Messenger = "Messenger",
    Baker = "Baker",
    Woodsman = "Woodsman",
    Miner = "Miner",
    Shopkeeper = "Shopkeeper",
    Miller = "Miller",
    Thatcher = "Thatcher",
    Cook = "Cook",
    Prostitute = "Prostitute",
    Bandit = "Bandit",
    Cultist = "Cultist",
    Witch = "Witch",
    Innkeeper = "Innkeeper",
    Sheriff = "Sheriff",
    Blacksmith = "Blacksmith",
    Herbalist = "Herbalist",
    Priest = "Priest",
    Knight = "Knight",
    Noble = "Noble",
    Soldier = "Soldier",
    Stonemason = "Stonemason",
    Clothesmaker = "Clothesmaker",
    Candlemaker = "Candlemaker",
    Artist = "Artist",
    Beggar = "Beggar",
    Thief = "Thief",
    Thug = "Thug",
    Armorer = "Armorer",
    Carpenter = "Carpenter",
    Barber = "Barber",
    Alchemist = "Alchemist",
    Scholar = "Scholar",
    Librarian = "Librarian",
    Artificer = "Artificer",
    Monk = "Monk",
    Inquisitor = "Inquisitor",
    BlackMarketDealer = "Black Market Dealer",
    Mercenary = "Mercenary",
    PoisonMaker = "Poison Maker",
    Judge = "Judge",
    Barrister = "Barrister",
    Banker = "Banker",
    Warden = "Warden",
    Enchanter = "Enchanter",
    Guard = "Guard",
    GuardCaptain = "Guard Captain",
    Officer = "Officer"
}

export const JOB_WEIGHTS: {[key: string]: any} = {
    traveling: {
        [JOBS.Minstrel]: 0.2,
        [JOBS.Trader]: 0.5,
        [JOBS.Diplomat]: 0.1,
        [JOBS.Messenger]: 0.2
    },
    ruralPoorSubsistence: {
        [JOBS.Farmer]: 0.63,
        [JOBS.Shepherd]: 0.27,
        [JOBS.Fisherman]: 0.1
    },
    ruralPoorResource: {
        [JOBS.Woodsman]: 0.5,
        [JOBS.Miner]: 0.5
    },
    ruralPoorGeneral: {
        [JOBS.Shopkeeper]: 0.4,
        [JOBS.Miller]: 0.1,
        [JOBS.Baker]: 0.2,
        [JOBS.Thatcher]: 0.1,
        [JOBS.Cook]: 0.2
    },
    ruralPoorUnlawful: {
        [JOBS.Prostitute]: 0.3,
        [JOBS.Bandit]: 0.5,
        [JOBS.Cultist]: 0.2,
    },
    ruralRichUnlawful: {
        [JOBS.Witch]: 1.0
    },
    ruralRichGeneral: {
        [JOBS.Innkeeper]: 0.2,
        [JOBS.Shopkeeper]: 0.3,
        [JOBS.Sheriff]: 0.1,
        [JOBS.Blacksmith]: 0.15,
        [JOBS.Herbalist]: 0.1,
        [JOBS.Priest]: 0.15
    },
    ruralRichFeudal: {
        [JOBS.Knight]: 0.3,
        [JOBS.Noble]: 0.2,
        [JOBS.Soldier]: 0.5
    },
    urbanPoorGeneral: {
        [JOBS.Stonemason]: 0.2,
        [JOBS.Clothesmaker]: 0.2,
        [JOBS.Candlemaker]: 0.2,
        [JOBS.Artist]: 0.1,
        [JOBS.Thatcher]: 0.1,
        [JOBS.Cook]: 0.2
    },
    urbanPoorUnlawful: {
        [JOBS.Beggar]: 0.3,
        [JOBS.Prostitute]: 0.1,
        [JOBS.Thief]: 0.35,
        [JOBS.Thug]: 0.2,
        [JOBS.Cultist]: 0.05
    },
    urbanMiddleGeneral: {
        [JOBS.Shopkeeper]: 0.3,
        [JOBS.Innkeeper]: 0.15,
        [JOBS.Blacksmith]: 0.15,
        [JOBS.Armorer]: 0.1,
        [JOBS.Carpenter]: 0.1,
        [JOBS.Artist]: 0.1,
        [JOBS.Barber]: 0.1
    },
    urbanMiddleMagical: {
        [JOBS.Alchemist]: 0.2,
        [JOBS.Enchanter]: 0.1,
        [JOBS.Scholar]: 0.3,
        [JOBS.Librarian]: 0.2,
        [JOBS.Artificer]: 0.2
    },
    urbanMiddleReligious: {
        [JOBS.Priest]: 0.35,
        [JOBS.Monk]: 0.45,
        [JOBS.Inquisitor]: 0.2
    },
    urbanMiddleUnlawful: {
        [JOBS.BlackMarketDealer]: 0.3,
        [JOBS.Mercenary]: 0.4,
        [JOBS.PoisonMaker]: 0.1,
        [JOBS.Prostitute]: 0.2
    },
    urbanRichGeneral: {
        [JOBS.Judge]: 0.1,
        [JOBS.Barrister]: 0.2,
        [JOBS.Banker]: 0.1,
        [JOBS.Artist]: 0.05,
        [JOBS.Warden]: 0.05,
        [JOBS.Innkeeper]: 0.2,
        [JOBS.Shopkeeper]: 0.3
    },
    urbanRichFeudal: {
        [JOBS.Knight]: 0.65,
        [JOBS.Noble]: 0.35
    },
    urbanRichMagical: {
        [JOBS.Alchemist]: 0.25,
        [JOBS.Enchanter]: 0.5,
        [JOBS.Artificer]: 0.25
    },
    urbanMilitary: {
        [JOBS.Guard]: 0.2,
        [JOBS.GuardCaptain]: 0.1,
        [JOBS.Soldier]: 0.6,
        [JOBS.Officer]: 0.1
    }
}
