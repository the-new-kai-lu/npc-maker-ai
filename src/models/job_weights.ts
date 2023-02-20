export interface JobType {
    displayName: string
    jobWeights: number[],
}

export const JOB_TYPES: {[key: string]: JobType} = {
    // [Rural, Poor, Subsistence, Resource, General Town Labor, Unlawful, Rich, Unlawful, General town labor, Feudal system, Urban, Poor, General, Unlawful, Middle, General, Magic, Religious, Unlawful, Upper, General, Feudal, Magical, Military, Traveling]
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    rural: {
        displayName: "Rural",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    standard: {
        displayName: "Standard",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    manor: {
        displayName: "Manor",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
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
        displayName: "Estate",
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
    cityMilitaryDistrict: {
        displayName: "City - Military District",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    cityReligiousDistrict: {
        displayName: "City - Religious District",
        jobWeights: [0.9, 0.8, 0.6, 0.2, 0.05, 0.15, 0.2, 0.05, 0.7, 0.25, 0.1, 0.5, 12, 13, 0.3, 0.6, 0.2, 0.05, 0.15, 0.1, 0.6, 0.2, 0.2, 0.1, 0.05]
    },
    cityPalatialDistrict: {
        displayName: "City - Palatial District",
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
    Farmer,
    Shepherd,
    Fisherman,
    Minstrel,
    Trader,
    Diplomat,
    Messenger,
    Baker,
    Woodsman,
    Miner,
    Shopkeeper,
    Miller,
    Thatcher,
    Cook,
    Prostitute,
    Bandit,
    Cultist,
    Witch,
    Innkeeper,
    Sheriff,
    Blacksmith,
    Herbalist,
    Priest,
    Knight,
    Noble,
    Soldier,
    Stonemason,
    Clothesmaker,
    Candlemaker,
    Artist,
    Beggar,
    Thief,
    Thug,
    Armorer,
    Carpenter,
    Barber,
    Alchemist,
    Scholar,
    Librarian,
    Artificer,
    Monk,
    Inquisitor,
    BlackMarketDealer,
    Mercenary,
    PoisonMaker,
    Judge,
    Barrister,
    Banker,
    Warden,
    Enchanter,
    Guard,
    GuardCaptain,
    Officer
}

export const JOB_WEIGHTS: {[key: string]: any} = {
    traveling: {
        [JOBS[JOBS.Minstrel]]: 0.2,
        [JOBS[JOBS.Trader]]: 0.5,
        [JOBS[JOBS.Diplomat]]: 0.1,
        [JOBS[JOBS.Messenger]]: 0.2
    },
    ruralPoorSubsistence: {
        [JOBS[JOBS.Farmer]]: 0.63,
        [JOBS[JOBS.Shepherd]]: 0.27,
        [JOBS[JOBS.Fisherman]]: 0.1
    },
    ruralPoorResource: {
        [JOBS[JOBS.Woodsman]]: 0.5,
        [JOBS[JOBS.Miner]]: 0.5
    },
    ruralPoorGeneral: {
        [JOBS[JOBS.Shopkeeper]]: 0.4,
        [JOBS[JOBS.Miller]]: 0.1,
        [JOBS[JOBS.Baker]]: 0.2,
        [JOBS[JOBS.Thatcher]]: 0.1,
        [JOBS[JOBS.Cook]]: 0.2
    },
    ruralPoorUnlawful: {
        [JOBS[JOBS.Prostitute]]: 0.3,
        [JOBS[JOBS.Bandit]]: 0.5,
        [JOBS[JOBS.Cultist]]: 0.2,
    },
    ruralRichUnlawful: {
        [JOBS[JOBS.Witch]]: 1.0
    },
    ruralRichGeneral: {
        [JOBS[JOBS.Innkeeper]]: 0.2,
        [JOBS[JOBS.Shopkeeper]]: 0.3,
        [JOBS[JOBS.Sheriff]]: 0.1,
        [JOBS[JOBS.Blacksmith]]: 0.15,
        [JOBS[JOBS.Herbalist]]: 0.1,
        [JOBS[JOBS.Priest]]: 0.15
    },
    ruralRichFeudal: {
        [JOBS[JOBS.Knight]]: 0.3,
        [JOBS[JOBS.Noble]]: 0.2,
        [JOBS[JOBS.Soldier]]: 0.5
    },
    urbanPoorGeneral: {
        [JOBS[JOBS.Stonemason]]: 0.2,
        [JOBS[JOBS.Clothesmaker]]: 0.2,
        [JOBS[JOBS.Candlemaker]]: 0.2,
        [JOBS[JOBS.Artist]]: 0.1,
        [JOBS[JOBS.Thatcher]]: 0.1,
        [JOBS[JOBS.Cook]]: 0.2
    },
    urbanPoorUnlawful: {
        [JOBS[JOBS.Beggar]]: 0.3,
        [JOBS[JOBS.Prostitute]]: 0.1,
        [JOBS[JOBS.Thief]]: 0.35,
        [JOBS[JOBS.Thug]]: 0.2,
        [JOBS[JOBS.Cultist]]: 0.05
    },
    urbanMiddleGeneral: {
        [JOBS[JOBS.Shopkeeper]]: 0.3,
        [JOBS[JOBS.Innkeeper]]: 0.15,
        [JOBS[JOBS.Blacksmith]]: 0.15,
        [JOBS[JOBS.Armorer]]: 0.1,
        [JOBS[JOBS.Carpenter]]: 0.1,
        [JOBS[JOBS.Artist]]: 0.1,
        [JOBS[JOBS.Barber]]: 0.1
    },
    urbanMiddleMagical: {
        [JOBS[JOBS.Alchemist]]: 0.2,
        [JOBS[JOBS.Enchanter]]: 0.1,
        [JOBS[JOBS.Scholar]]: 0.3,
        [JOBS[JOBS.Librarian]]: 0.2,
        [JOBS[JOBS.Artificer]]: 0.2
    },
    urbanMiddleReligious: {
        [JOBS[JOBS.Priest]]: 0.35,
        [JOBS[JOBS.Monk]]: 0.45,
        [JOBS[JOBS.Inquisitor]]: 0.2
    },
    urbanMiddleUnlawful: {
        [JOBS[JOBS.BlackMarketDealer]]: 0.3,
        [JOBS[JOBS.Mercenary]]: 0.4,
        [JOBS[JOBS.PoisonMaker]]: 0.1,
        [JOBS[JOBS.Prostitute]]: 0.2
    },
    urbanRichGeneral: {
        [JOBS[JOBS.Judge]]: 0.1,
        [JOBS[JOBS.Barrister]]: 0.2,
        [JOBS[JOBS.Banker]]: 0.1,
        [JOBS[JOBS.Artist]]: 0.05,
        [JOBS[JOBS.Warden]]: 0.05,
        [JOBS[JOBS.Innkeeper]]: 0.2,
        [JOBS[JOBS.Shopkeeper]]: 0.3
    },
    urbanRichFeudal: {
        [JOBS[JOBS.Knight]]: 0.6,
        [JOBS[JOBS.Noble]]: 0.4
    },
    urbanRichMagical: {
        [JOBS[JOBS.Alchemist]]: 0.25,
        [JOBS[JOBS.Enchanter]]: 0.5,
        [JOBS[JOBS.Artificer]]: 0.25
    },
    urbanMilitary: {
        [JOBS[JOBS.Guard]]: 0.2,
        [JOBS[JOBS.GuardCaptain]]: 0.1,
        [JOBS[JOBS.Soldier]]: 0.5,
        [JOBS[JOBS.Officer]]: 0.2
    }
}