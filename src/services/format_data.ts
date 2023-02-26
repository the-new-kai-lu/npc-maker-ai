import {ALIGNMENT, RACE} from "../models/npc";
import {STAT_METHOD} from "./stat_generator";
import {JOBS, JobType} from "../models/job_weights";

export interface GenerateInput {
    genderVal: string,
    raceVal: string,
    alignmentVal: string,
    abilityScoreVal: string,
    jobVal: string,
    plot: boolean,
    jobType: JobType
}

export interface GenerateMultipleInput {
    genderRatio: number,
    primaryRace: string,
    nonPrimaryPercentage: number,
    plotPercentage: number,
    alignmentDist: string,
    economicDist: string,
    count: number,
}

export interface GenerateData {
    gender: boolean,
    race: RACE,
    alignment: ALIGNMENT,
    stats: STAT_METHOD,
    job: string,
    hasPlot: boolean
}

export function formatInput(input: GenerateInput): GenerateData {
    let gender: boolean
    if (input.genderVal === 'Male') {
        gender = true
    } else if (input.genderVal === 'Female') {
        gender = false
    } else {
        gender = Math.random() < 0.5
    }
    const race = decideRace(input.raceVal)
    let alignment: ALIGNMENT | null
    switch (input.alignmentVal) {
        case "Lawful Good":
            alignment = ALIGNMENT.LG
            break
        case "Neutral Good":
            alignment = ALIGNMENT.NG
            break
        case "Chaotic Good":
            alignment = ALIGNMENT.CG
            break
        case "Lawful Neutral":
            alignment = ALIGNMENT.LN
            break
        case "True Neutral":
            alignment = ALIGNMENT.TN
            break
        case "Chaotic Neutral":
            alignment = ALIGNMENT.CN
            break
        case "Lawful Evil":
            alignment = ALIGNMENT.LE
            break
        case "Neutral Evil":
            alignment = ALIGNMENT.NE
            break
        case "Chaotic Evil":
            alignment = ALIGNMENT.CE
            break
        default:
            alignment = Math.floor(Math.random()*9) as ALIGNMENT
    }
    let stats: STAT_METHOD
    switch (input.abilityScoreVal) {
        case "4D6":
            stats = STAT_METHOD.FOUR_DROP_LOW
            break
        case "Heroic Array":
            stats = STAT_METHOD.HEROIC_ARRAY
            break
        default:
            stats = STAT_METHOD.NPC_ARRAY
    }
    let job = input.jobVal
    if (input.jobVal === 'Random') {
        const jobNameArr = Object.keys(JOBS)
        job = jobNameArr[Math.floor(Math.random()*jobNameArr.length)]
    }
    return {
        gender,
        race,
        alignment,
        stats,
        job,
        hasPlot: input.plot
    }
}

export function formatMultipleInput(input: GenerateMultipleInput): GenerateData[] {
    const primaryRace = decideRace(input.primaryRace)
    const otherRaces = Object.keys(RACE).filter(r => RACE[r as keyof typeof RACE] !== primaryRace)
    const results: GenerateData[] = []
    for (let i = 0; i < input.count; i++) {
        const gender = Math.random() < (input.genderRatio/100)
        let race = primaryRace
        if (Math.random() < (input.nonPrimaryPercentage/100)) {
            race = RACE[otherRaces[Math.floor(Math.random() * otherRaces.length)] as keyof typeof RACE]
        }
        const alignment = getSingleAlignment(input.alignmentDist)
        let stats = STAT_METHOD.NPC_ARRAY
        if (Math.random() < 0.15) {
            stats = STAT_METHOD.HEROIC_ARRAY
        }
        const hasPlot = Math.random() < (input.plotPercentage/100)
    }
    return results
}

function decideRace(raceString: string): RACE {
    let race: RACE
    switch (raceString) {
        case "Human":
            race = RACE.HUMAN
            break
        case "Half Elf":
            race = RACE.HALF_ELF
            break
        case "Elf":
            race = RACE.ELF
            break
        case "Dwarf":
            race = RACE.DWARF
            break
        case "Half Orc":
            race = RACE.HALF_ORC
            break
        case "Halfling":
            race = RACE.HALFLING
            break
        case "Gnome":
            race = RACE.GNOME
            break
        case "Goblin":
            race = RACE.GOBLIN
            break
        case "Dragonborn":
            race = RACE.DRAGONBORN
            break
        default:
            race = RACE[Object.keys(RACE)[Math.floor(Math.random() * Object.keys(RACE).length)] as keyof typeof RACE]
    }
    return race
}

function getSingleAlignment(alignmentDistString: string) : ALIGNMENT {
    let alignment: ALIGNMENT
    const r1 = Math.random()
    const r2 = Math.random()
    let a, b
    switch (alignmentDistString) {
        case "Standard":
            a = r1<0.5?0:(r1<0.866666?1:2)
            b = r2<0.5?0:(r2<0.866666?1:2)
            alignment = (3*a)+b
            break
        case "Underworld Standard":
            a = r1<0.5?2:(r1<0.866666?1:0)
            b = r2<0.5?2:(r2<0.866666?1:0)
            alignment = (3*a)+b
            break
        case "Lawful":
            if (r1 < 0.33333) {
                alignment = ALIGNMENT.LG
            } else if (r1 < 0.66667) {
                alignment = ALIGNMENT.LN
            } else {
                alignment = ALIGNMENT.LE
            }
            break
        case "Good":
            if (r1 < 0.33333) {
                alignment = ALIGNMENT.LG
            } else if (r1 < 0.66667) {
                alignment = ALIGNMENT.NG
            } else {
                alignment = ALIGNMENT.CG
            }
            break
        case "Chaotic":
            if (r1 < 0.33333) {
                alignment = ALIGNMENT.CG
            } else if (r1 < 0.66667) {
                alignment = ALIGNMENT.CN
            } else {
                alignment = ALIGNMENT.CE
            }
            break
        case "Evil":
            if (r1 < 0.33333) {
                alignment = ALIGNMENT.LE
            } else if (r1 < 0.66667) {
                alignment = ALIGNMENT.NE
            } else {
                alignment = ALIGNMENT.CE
            }
            break
        case "Neutral":
            if (r1 < 0.2) {
                alignment = ALIGNMENT.NG
            } else if (r1 < 0.4) {
                alignment = ALIGNMENT.LN
            } else if (r1 < 0.6) {
                alignment = ALIGNMENT.TN
            } else if (r1 < 0.8) {
                alignment = ALIGNMENT.CN
            } else {
                alignment = ALIGNMENT.NE
            }
            break
        default:
            alignment = Math.floor(Math.random()*9) as ALIGNMENT
    }
    return alignment
}
