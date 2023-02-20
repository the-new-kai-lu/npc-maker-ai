import {GenerateData} from "./format_data";
import {NPC, RACE} from "../models/npc";
import {WeightHeightGenerator} from "./weight_height_age_generator";
import {StatGenerator} from "./stat_generator";
import {DescriptionWriter} from "./openai";
import humanMale from './names/male/human.json';
import halforcMale from './names/male/halforc.json'
import halflingMale from './names/male/halfling.json'
import halfelfMale from './names/male/halfelf.json'
import goblinMale from './names/male/goblin.json'
import gnomeMale from './names/male/gnome.json'
import elfMale from './names/male/elf.json'
import dwarfMale from './names/male/dwarf.json'
import dragonbornMale from './names/male/dragonborn.json'
import humanFemale from './names/female/human.json';
import halforcFemale from './names/female/halforc.json'
import halflingFemale from './names/female/halfling.json'
import halfelfFemale from './names/female/halfelf.json'
import goblinFemale from './names/female/goblin.json'
import gnomeFemale from './names/female/gnome.json'
import elfFemale from './names/female/elf.json'
import dwarfFemale from './names/female/dwarf.json'
import dragonbornFemale from './names/female/dragonborn.json'
import humanFamily from './names/family/human.json';
import halforcFamily from './names/family/halforc.json'
import halflingFamily from './names/family/halfling.json'
import halfelfFamily from './names/family/halfelf.json'
import goblinFamily from './names/family/goblin.json'
import gnomeFamily from './names/family/gnome.json'
import elfFamily from './names/family/elf.json'
import dwarfFamily from './names/family/dwarf.json'
import dragonbornFamily from './names/family/dragonborn.json'

const map: Record<RACE, [string[], string[], string[]]> = {
    "Half Elf": [halfelfMale, halfelfFemale, halfelfFamily],
    "Half Orc": [halforcMale, halforcFemale, halforcFamily],
    Dragonborn: [dragonbornMale, dragonbornFemale, dragonbornFamily],
    Dwarf: [dwarfMale, dwarfFemale, dwarfFamily],
    Elf: [elfMale, elfFemale, elfFamily],
    Gnome: [gnomeMale, gnomeFemale, gnomeFamily],
    Goblin: [goblinMale, goblinFemale, goblinFamily],
    Halfling: [halflingMale, halflingFemale, halflingFamily],
    Human: [humanMale, humanFemale, humanFamily]

}

export async function build_single_npc(generation_seed: GenerateData, key: string) {
    const stats = StatGenerator.generateStats(generation_seed.stats)
    const npc: NPC = {
        first_name: get_first_name(generation_seed.race, generation_seed.gender),
        last_name: get_last_name(generation_seed.race),
        age: WeightHeightGenerator.getAge(generation_seed.race),
        gender: generation_seed.gender,
        height_inches: WeightHeightGenerator.getHeight(generation_seed.race),
        weight_lbs: WeightHeightGenerator.getWeight(generation_seed.race),
        str: stats[0],
        dex: stats[1],
        con: stats[2],
        int: stats[3],
        wis: stats[4],
        cha: stats[5],
        alignment: generation_seed.alignment,
        class: generation_seed.job,
        race: generation_seed.race,
        physical_description: "",
        personality_description: "",
        history: ""
    }
    const descriptionWriter = new DescriptionWriter(key, npc)
    await descriptionWriter.getPhysicalDescription()
    await descriptionWriter.getPersonality()
    await descriptionWriter.getHistory()
    if (generation_seed.hasPlot) {
        await descriptionWriter.getPlotHook()
    }
    await descriptionWriter.getPortrait()
    return npc;
}

function get_first_name(race: RACE, gender: boolean) {
    if (gender) {
        return map[race][0][Math.floor(Math.random()*10000)]
    } else {
        return map[race][1][Math.floor(Math.random()*10000)]
    }
}

function get_last_name(race: RACE) {
    return map[race][2][Math.floor(Math.random()*10000)]
}
