import {NPC} from "../models/npc";
import {Configuration, OpenAIApi} from "openai";
import {WeightHeightGenerator} from "./weight_height_age_generator";
import {StatGenerator} from "./stat_generator";

export class DescriptionWriter {
    npc: NPC
    api: OpenAIApi

    constructor(key: string, npc: NPC) {
        this.npc = npc
        this.api = new OpenAIApi(new Configuration({apiKey: key}))
    }

    private capitalize(s: string) {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    generateInitialPrompt() {
        let prompt = ""
        const full_name = this.npc.first_name + " " + this.npc.last_name
        const gender = this.npc.gender?"male":"female"
        const subjPronoun = this.npc.gender?"he":"she"
        const possPronoun = this.npc.gender?"his":"her"
        const objPronoun = this.npc.gender?"him":"her"
        const race = this.npc.race.toLowerCase()
        const job = this.npc.class.toLowerCase()
        const wh = WeightHeightGenerator.getWeightHeightDescriptor(this.npc.race, this.npc.weight_lbs, this.npc.height_inches)
        const h_d = () => {
            switch (wh[0]) {
                case -1:
                    return "shorter than average"
                case 0:
                    return "about average height"
                case 1:
                    return "taller than average"
            }
        }
        const w_d = () => {
            switch (wh[1]) {
                case -1:
                    return "weighs less than average"
                case 0:
                    return "is about average weight"
                case 1:
                    return "weighs more than average"
            }
        }
        const age_d = () => {
            switch (WeightHeightGenerator.getAgeDescriptor(this.npc.race, this.npc.age)) {
                case 0:
                    return `${objPronoun} a young adult, someone who is just starting to figure out who ${subjPronoun} are and what ${subjPronoun} wants in life.`
                case 1:
                    return `${objPronoun} a settled adult, in the middle part of ${possPronoun} life.`
                case 2:
                    return `${objPronoun} an old ${race}, past ${possPronoun} retirement age and into ${possPronoun} twilight years.`
            }
        }

        prompt += `${full_name} is a ${gender} ${race} ${job} in a fantasy game.` //basic description
        prompt += ` ${this.capitalize(subjPronoun)} stands ${Math.floor(this.npc.height_inches/12)} feet and ${this.npc.height_inches%12} inches tall, which is ${h_d()} for ${possPronoun} race, and weighs ${this.npc.weight_lbs} lbs, meaning ${subjPronoun} ${w_d()} for ${possPronoun} race.` //weight and height description
        prompt += ` ${this.capitalize(subjPronoun)} is ${this.npc.age} years old, making ${age_d()}` //age description
        const physical_d = StatGenerator.physicalDescription(this.npc.str, this.npc.dex, this.npc.con)
        const mental_d = StatGenerator.mentalDescription(this.npc.int, this.npc.wis, this.npc.cha)
        if (physical_d !== '') {
            prompt += ` ${this.capitalize(subjPronoun)} ${physical_d}`
        }
        if (mental_d !== '') {
            prompt += ` ${this.capitalize(subjPronoun)} ${mental_d}`
        }
        return prompt
    }
    async getPhysicalDescription() {
        const prompt = `${this.npc.first_name} ${this.npc.last_name} is a ${this.npc.gender?"male":"female"} ${this.npc.race.toLowerCase()} ${this.npc.class} in a fantasy game. ${this.npc.gender?"He":"She"} stands ${Math.floor(this.npc.height_inches/12)} feet and ${this.npc.height_inches%12} inches tall, and weighs ${this.npc.weight_lbs} lbs. `
        const promptFinishers = [
            `Describe what ${this.npc.gender?"he":"she"} looks like.`,
            `Describe ${this.npc.gender?"his":"her"} physical appearance.`,
            `Describe what ${this.npc.gender?"his":"her"} face and overall appearance are like.`,
            `Give a detailed description of ${this.npc.gender?"his":"her"} appearance.`,
            `What does ${this.npc.gender?"he":"she"} look like?`,
            `Describe ${this.npc.gender?"his":"her"} most important physical features.`
        ]
        const response = await this.api.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt + promptFinishers[Math.floor(Math.random() * promptFinishers.length)],
            temperature: 0.7,
            top_p: 0.5,
            max_tokens: 256
        })
    }

    getPersonality() {

    }

    getHistory() {

    }

    getPlotHook() {

    }
}
