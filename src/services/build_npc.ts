import {GenerateData} from "./format_data";
import {NPC, RACE} from "../models/npc";
import {WeightHeightGenerator} from "./weight_height_age_generator";
import {StatGenerator} from "./stat_generator";

export function build_single_npc(generation_seed: GenerateData) {
    const stats = StatGenerator.generateStats(generation_seed.stats)
    const npc: NPC = {
        first_name: get_first_name(generation_seed.race),
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
    // TODO: generate physical description, personality, history/bg, portrait, plot hook (if exists)
    return npc;
}

function get_first_name(race: RACE) {
    return "FirstName"
}

function get_last_name(race: RACE) {
    return "LastName"
}
