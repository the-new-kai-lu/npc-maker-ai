import {NPC} from "../models/npc";
import {Configuration, OpenAIApi} from "openai";

export class DescriptionWriter {
    npc: NPC
    api: OpenAIApi

    constructor(key: string, npc: NPC) {
        this.npc = npc
        this.api = new OpenAIApi(new Configuration({apiKey: key}))
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