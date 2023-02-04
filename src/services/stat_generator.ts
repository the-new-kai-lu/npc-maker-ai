import arrayShuffle from "array-shuffle";

export class StatGenerator {

    private static fourDropLow() {
        let tot = 0;
        let min = 0;
        for (let i=0;i<4;i++) {
            const r = Math.ceil(6*Math.random())
            tot += r
            if (r > min) {
                min = r
            }
        }
        return tot - min
    }



    static generateStats(method: STAT_METHOD) {
        let array = [0, 0, 0, 0, 0, 0]
        switch(method) {
            case STAT_METHOD.FOUR_DROP_LOW:
                array = [this.fourDropLow(), this.fourDropLow(), this.fourDropLow(), this.fourDropLow(), this.fourDropLow(), this.fourDropLow()]
                break
            case STAT_METHOD.NPC_ARRAY:
                array = [13, 12, 11, 10, 9, 8]
                break
            case STAT_METHOD.HEROIC_ARRAY:
                array = [15, 14, 13, 12, 10, 8]
                break
        }
        return arrayShuffle(array)
    }
}

export enum STAT_METHOD {
    FOUR_DROP_LOW,
    NPC_ARRAY,
    HEROIC_ARRAY,
}