import {table1} from "../models/job_weights";

export interface Job {
    name: string,
    descriptors: JOB_DESCRIPTOR[]
}

export enum JOB_DESCRIPTOR {
    LOWER_CLASS,
    MIDDLE_CLASS,
    UPPER_CLASS,
    RELIGIOUS,
    MARTIAL,
    URBAN,
    RURAL,
    UNLAWFUL,
    MAGICAL
}

export const JOBS: Job[] = [
    {name: "Farmer", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.LOWER_CLASS]},
    {name: "Shepherd", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.LOWER_CLASS]},
    {name: "Miller", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.LOWER_CLASS]},
    {name: "Blacksmith", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Stonemason", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Armorer", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Carpenter", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Shopkeeper", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS, JOB_DESCRIPTOR.LOWER_CLASS, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Guard", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Baker", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.LOWER_CLASS, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Clothesmaker", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Fisherman", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.LOWER_CLASS]},
    {name: "Barrister", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Noble", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Candlemaker", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Artist", descriptors: [JOB_DESCRIPTOR.URBAN]},
    {name: "Sheriff", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Priest", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.RELIGIOUS]},
    {name: "Knight", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Minstrel", descriptors: [JOB_DESCRIPTOR.URBAN]},
    {name: "Messenger", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN]},
    {name: "Diplomat", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Thatcher", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Cook", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.LOWER_CLASS, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Chef", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Innkeeper", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.LOWER_CLASS, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Librarian", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Scholar", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS, JOB_DESCRIPTOR.UPPER_CLASS, JOB_DESCRIPTOR.MAGICAL]},
    {name: "Inquisitor", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.RELIGIOUS, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Warden", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Soldier", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Judge", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Banker", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Miner", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.LOWER_CLASS]},
    {name: "Woodsman", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.LOWER_CLASS]},
    {name: "Barber", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Trader", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.MIDDLE_CLASS, JOB_DESCRIPTOR.UPPER_CLASS]},
    {name: "Alchemist", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS, JOB_DESCRIPTOR.MAGICAL, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Enchanter", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UPPER_CLASS, JOB_DESCRIPTOR.MAGICAL, JOB_DESCRIPTOR.MIDDLE_CLASS]},
    {name: "Herbalist", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.MIDDLE_CLASS, JOB_DESCRIPTOR.MAGICAL]},
    {name: "Cultist", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.RELIGIOUS, JOB_DESCRIPTOR.MAGICAL, JOB_DESCRIPTOR.UNLAWFUL]},
    {name: "Witch", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.UNLAWFUL, JOB_DESCRIPTOR.MAGICAL]},
    {name: "Beggar", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UNLAWFUL]},
    {name: "Prostitute", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UNLAWFUL]},
    {name: "Thief", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UNLAWFUL]},
    {name: "Bandit", descriptors: [JOB_DESCRIPTOR.RURAL, JOB_DESCRIPTOR.UNLAWFUL, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Thug", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UNLAWFUL, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Mercenary", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UNLAWFUL, JOB_DESCRIPTOR.MARTIAL]},
    {name: "Black Market Dealer", descriptors: [JOB_DESCRIPTOR.URBAN, JOB_DESCRIPTOR.UNLAWFUL]},
    {name: "Guard Captain", descriptors: []},
    {name: "Poison Maker", descriptors: []},
    {name: "Monk", descriptors: []},
    {name: "Artificer", descriptors: []},
    {name: "Officer", descriptors: []}
]

export class JobGenerator {
    static getRandom(filters: JOB_DESCRIPTOR[]) {
        const filtered = JOBS.filter(j => filters.reduce((v, desc) => v && j.descriptors.includes(desc), true))
        return filtered[Math.floor((filtered.length)*Math.random())].name
    }
}

export function getRandomJob(w: number[]) {
    let weights = []
    let names = []
    for (let k in table1) {
        weights.push(table1[k as keyof typeof table1] * w[0] * w[1] * w[2])
        names.push(k)
    }

    const weightedRandom = require('weighted-random');
    const select = weightedRandom(weights)
    return names[select]
}
