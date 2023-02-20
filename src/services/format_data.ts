import {ALIGNMENT, RACE} from "../models/npc";
import {STAT_METHOD} from "./stat_generator";
import { JOBS, JobType } from "../models/job_weights";

export interface GenerateInput {
    genderVal: string,
    raceVal: string,
    alignmentVal: string,
    abilityScoreVal: string,
    jobVal: string,
    plot: boolean,
    jobType: JobType
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
    let race: RACE
    switch (input.raceVal) {
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
