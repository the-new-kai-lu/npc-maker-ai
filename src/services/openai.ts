import {ALIGNMENT, NPC} from "../models/npc";
import OpenAI from "openai";
import {WeightHeightGenerator} from "./weight_height_age_generator";
import {StatGenerator} from "./stat_generator";
import {ChatCompletionMessageParam, ChatCompletionUserMessageParam} from "openai/resources";

export class DescriptionWriter {
    npc: NPC
    api: OpenAI
    initial_prompt: string
    messages: ChatCompletionMessageParam[]

    constructor(key: string, npc: NPC) {
        this.npc = npc
        this.api = new OpenAI({apiKey: key, dangerouslyAllowBrowser: true})
        this.initial_prompt = this.generateInitialPrompt()
        this.messages = [{role: "system", content: "You are an assistant for a high fantasy writer, whose job is to help the writer populate the world with interesting characters."}]
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

        const align_d = () => {
            switch (this.npc.alignment) {
                case ALIGNMENT.LG:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Lawful Good.`
                case ALIGNMENT.LN:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Lawful Neutral.`
                case ALIGNMENT.LE:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Lawful Evil.`
                case ALIGNMENT.NG:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Neutral Good.`
                case ALIGNMENT.TN:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Neutral.`
                case ALIGNMENT.NE:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Neutral Evil.`
                case ALIGNMENT.CG:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Chaotic Good.`
                case ALIGNMENT.CN:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Chaotic Neutral.`
                case ALIGNMENT.CE:
                    return `${this.npc.gender?"His":"Her"} in-game alignment is Chaotic Evil.`
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
        prompt += ` ${align_d()}`
        return prompt
    }
    async getPhysicalDescription() {
        const promptFinishers = [
            `\nDescribe what ${this.npc.gender?"he":"she"} looks like.`,
            `\nDescribe ${this.npc.gender?"his":"her"} physical appearance.`,
            `\nDescribe what ${this.npc.gender?"his":"her"} face and overall appearance are like.`,
            `\nGive a detailed description of ${this.npc.gender?"his":"her"} appearance.`,
            `\nWhat does ${this.npc.gender?"he":"she"} look like?`,
            `\nDescribe ${this.npc.gender?"his":"her"} most important physical features.`
        ]
        const nextMsg: ChatCompletionUserMessageParam = {role: "user", "content": this.initial_prompt + promptFinishers[Math.floor(Math.random() * promptFinishers.length)]}
        this.messages.push(nextMsg)
        const response = await this.api.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: this.messages,
            temperature: 0.7,
            top_p: 0.5,
            max_tokens: 256
        })
        this.npc.physical_description = (response.choices[0].message.content??"").trim()
        this.messages.push({role: "assistant", content:this.npc.physical_description})
    }

    async getPersonality() {
        const promptFinishers = [
            `\nDescribe ${this.npc.first_name}'s personality.`,
            `\nDescribe the most important parts of ${this.npc.gender?"his":"her"} personality.`,
            `\nDescribe ${this.npc.first_name}'s personality traits.`,
            `\nWhat is ${this.npc.gender?"his":"her"} personality like?`
        ]
        const nextMsg: ChatCompletionUserMessageParam = {role: "user", content: promptFinishers[Math.floor(Math.random() * promptFinishers.length)]}
        this.messages.push(nextMsg)
        const response = await this.api.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: this.messages,
            temperature: 0.7,
            top_p: 0.5,
            max_tokens: 256
        })
        this.npc.personality_description = (response.choices[0].message.content??"").trim()
        this.messages.push({role: "assistant", content:this.npc.personality_description})
    }

    async getHistory() {
        const promptFinishers = [
            `\nTell me about ${this.npc.gender?"his":"her"} personal history.`,
            `\nWhat are the most important things that happened in ${this.npc.gender?"his":"her"} life?`,
            `\nTell me how ${this.npc.first_name} grew up.`,
            `\nTell me about ${this.npc.gender?"his":"her"} life.`,
            `\nWhat's ${this.npc.gender?"his":"her"} story so far?`
        ]
        const nextMsg: ChatCompletionUserMessageParam = {role: "user", content: promptFinishers[Math.floor(Math.random() * promptFinishers.length)]}
        this.messages.push(nextMsg)
        const response = await this.api.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: this.messages,
            temperature: 0.7,
            top_p: 0.5,
            max_tokens: 256
        })
        this.npc.history = (response.choices[0].message.content??"").trim()
        this.messages.push({role: "assistant", content:this.npc.history})
    }

    async getPlotHook() {
        const promptFinishers = [
            `\nGive me 1 quest ${this.npc.first_name} would give.`,
            `\nTell me 1 quest ${this.npc.first_name} needs someone's help with right now.`,
            `\nA group of adventurers meets ${this.npc.first_name}. What quest does ${this.npc.gender?"he":"she"} give them?`,
            `\nA group of adventurers meets ${this.npc.first_name}. What does ${this.npc.gender?"he":"she"} ask them to do?`
        ]
        const nextMsg: ChatCompletionUserMessageParam = {role: "user", content: promptFinishers[Math.floor(Math.random() * promptFinishers.length)]}
        this.messages.push(nextMsg)
        const response = await this.api.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: this.messages,
            temperature: 0.7,
            top_p: 0.5,
            max_tokens: 128
        })
        this.npc.plot_hook = (response.choices[0].message.content??"").trim()
    }

    async getPortrait() {
        const response = await this.api.images.generate({
            prompt: `A portrait of a ${this.npc.gender?"male":"female"} ${this.npc.race.toLowerCase()} ${this.npc.class.toLowerCase()} in a fantasy game, in a digital art style`,
            n: 1,
            size: "512x512",
            model: 'dall-e-2'
        })
        this.npc.portrait = response.data[0].url
    }
}
