import { JOB_WEIGHTS, JOB_WEIGHTS_INDICES } from "../models/job_weights";

//"Rural", "Standard", "Manor", "Village", "Town", "Estate", "Slums", "City", "City - Military District", "City - Religious District", "City - Palatial District"

export class JobGenerator {
    public static getRandomJob(inputWeights: number[]) {
        const weightedRandom = require('weighted-random');

        const travelingCheck = Math.random();
        if (travelingCheck < inputWeights[24]) {
            let names: string[] = [];
            let weights: number[] = [];
            for (let k in JOB_WEIGHTS.traveling) {
                weights.push(JOB_WEIGHTS.traveling[k]);
                names.push(k);
            }

            const select = weightedRandom(weights)
            return names[select];
        }

        let weights: number[] = [];
        let names: string[] = [];
        for (let tableKey in JOB_WEIGHTS) {
            let indices = JOB_WEIGHTS_INDICES[tableKey];
            let weight = 1;
            for (let w of indices) {
                weight *= inputWeights[w];
            }
    
            let table = JOB_WEIGHTS[tableKey];
            for (let k in table) {
                weights.push(table[k] * weight)
                names.push(k)
            }
        }
    
        const select = weightedRandom(weights);
        return names[select];
    }
}
