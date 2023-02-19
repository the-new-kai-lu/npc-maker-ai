import {RACE} from "../models/npc";
import gaussian from "gaussian"

export class WeightHeightGenerator {

    private static getVal(mean: number) {
        const dist = gaussian(mean, 0.0425*mean)
        return Math.round(dist.ppf(Math.random()))
    }

    private static getDescriptorRange(mean: number, val: number) {
        const low = mean - (0.0425*mean)
        const high = mean + (0.0425*mean)
        if (val > high) {
            return 1
        } else if (val < low) {
            return -1
        } else {
            return 0
        }
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
            case RACE.DRAGONBORN:
                return this.getVal(238)
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
            case RACE.DRAGONBORN:
                return this.getVal(75)
        }
    }

    static getWeightHeightDescriptor(race: RACE, weight: number, height: number) {
        switch (race) {
            case RACE.HUMAN:
                return [this.getDescriptorRange(67, height), this.getDescriptorRange(165, weight)]
            case RACE.ELF:
                return [this.getDescriptorRange(65, height), this.getDescriptorRange(128, weight)]
            case RACE.HALF_ELF:
                return [this.getDescriptorRange(66, height), this.getDescriptorRange(155, weight)]
            case RACE.DWARF:
                return [this.getDescriptorRange(53, height), this.getDescriptorRange(165, weight)]
            case RACE.GOBLIN:
                return [this.getDescriptorRange(46, height), this.getDescriptorRange(40, weight)]
            case RACE.HALF_ORC:
                return [this.getDescriptorRange(69, height), this.getDescriptorRange(217, weight)]
            case RACE.HALFLING:
                return [this.getDescriptorRange(36, height), this.getDescriptorRange(40, weight)]
            case RACE.GNOME:
                return [this.getDescriptorRange(40, height), this.getDescriptorRange(40, weight)]
            case RACE.DRAGONBORN:
                return [this.getDescriptorRange(75, height), this.getDescriptorRange(238, weight)]
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

    private static ageRange(lowMid: number, highMid: number, val: number) {
        if (val >= highMid) {
            return 2
        } else if (val >= lowMid) {
            return 1
        } else {
            return 0
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
            case RACE.DRAGONBORN:
                return this.getAgeFromRange(15, 25, 50, 80)
        }
    }

    static getAgeDescriptor(race: RACE, age: number) {
        switch (race) {
            case RACE.HUMAN:
                return this.ageRange( 30, 55, age)
            case RACE.ELF:
                return this.ageRange( 350, 550, age)
            case RACE.HALF_ELF:
                return this.ageRange( 50, 150, age)
            case RACE.DWARF:
                return this.ageRange( 50, 188, age)
            case RACE.GOBLIN:
                return this.ageRange( 20, 27, age)
            case RACE.HALF_ORC:
                return this.ageRange( 45, 55, age)
            case RACE.HALFLING:
                return this.ageRange( 40, 133, age)
            case RACE.GNOME:
                return this.ageRange( 40, 180, age)
            case RACE.DRAGONBORN:
                return this.ageRange( 25, 50, age)
        }
    }
}
