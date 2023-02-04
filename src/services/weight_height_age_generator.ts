import {RACE} from "../models/npc";
import gaussian from "gaussian"

export class WeightHeightGenerator {

    private static getVal(mean: number) {
        const dist = gaussian(mean, 0.0425*mean)
        return Math.round(dist.ppf(Math.random()))
    }
    static getWeight(race: RACE) {
        switch (race) {
            case RACE.HUMAN:
                return this.getVal(165)
            case RACE.ELF:
                return this.getVal(128)
            case RACE.HALF_ELF:
                return this.getVal(155)
            case RACE.DWARF:
                return this.getVal(165)
            case RACE.GOBLIN:
                return this.getVal(40)
            case RACE.HALF_ORC:
                return this.getVal(217)
            case RACE.HALFLING:
                return this.getVal(40)
            case RACE.GNOME:
                return this.getVal(40)
        }
    }

    static getHeight(race: RACE) {
        switch (race) {
            case RACE.HUMAN:
                return this.getVal(67)
            case RACE.ELF:
                return this.getVal(65)
            case RACE.HALF_ELF:
                return this.getVal(66)
            case RACE.DWARF:
                return this.getVal(53)
            case RACE.GOBLIN:
                return this.getVal(46)
            case RACE.HALF_ORC:
                return this.getVal(69)
            case RACE.HALFLING:
                return this.getVal(36)
            case RACE.GNOME:
                return this.getVal(40)
        }
    }

    private static getAgeFromRange(low: number, lowMid: number, highMid: number, high: number) {
        const x = Math.random()
        if (x < 0.4) {
            return low + Math.round((lowMid-low)*Math.random())
        } else if (x < 0.8) {
            return lowMid + Math.round((highMid-lowMid)*Math.random())
        } else {
            return highMid + Math.round((high-highMid)*Math.random())
        }
    }

    static getAge(race: RACE) {
        switch (race) {
            case RACE.HUMAN:
                return this.getAgeFromRange(18, 30, 55, 85)
            case RACE.ELF:
                return this.getAgeFromRange(100, 350, 550, 750)
            case RACE.HALF_ELF:
                return this.getAgeFromRange(18, 50, 150, 200)
            case RACE.DWARF:
                return this.getAgeFromRange(18, 50, 188, 350)
            case RACE.GOBLIN:
                return this.getAgeFromRange(15, 20, 27, 40)
            case RACE.HALF_ORC:
                return this.getAgeFromRange(15, 45, 55, 75)
            case RACE.HALFLING:
                return this.getAgeFromRange(20, 40, 133, 250)
            case RACE.GNOME:
                return this.getAgeFromRange(20, 40, 180, 400)
        }
    }
}