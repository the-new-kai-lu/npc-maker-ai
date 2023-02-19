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

    static physicalDescription(str: number, dex: number, con: number) {
        let val = ""
        const con_1 = () => {
            if (con < 8) {
                val += ", and has a frail body."
            } else if (con < 10) {
                val += ", and has a slightly frail body."
            } else if (con < 12) {
                val += "."
            } else if (con < 14) {
                val += ", but possesses a solid constitution."
            } else {
                val += ", but has a surprising physical resilience."
            }
        }
        const con_2 = () => {
            if (con < 8) {
                val += ", and unfortunately terribly frail."
            } else if (con < 10) {
                val += ", and unfortunately a little frail."
            } else if (con < 12) {
                val += "."
            } else if (con < 14) {
                val += " and fairly resilient."
            } else {
                val += " and very resilient."
            }
        }

        const dex_1 = () => {
            if (dex < 8) {
                val += " and quite clumsy"
                con_1()
            } else if (dex < 10) {
                val += " and a little clumsy"
                con_1()
            } else if (dex < 12) {
                con_1()
            } else if (dex < 14) {
                val += ", but fairly nimble and agile"
                con_2()
            } else {
                val += ", but extremely quick and agile"
                con_2()
            }
        }

        const dex_2 = () => {
            if (dex < 8) {
                val += ", and very clumsy"
                con_2()
            } else if (dex < 10) {
                val += ", and a little clumsy"
                con_2()
            } else if (dex < 12) {
                con_2()
            } else if (dex < 14) {
                val += ", and pretty nimble"
                con_2()
            } else {
                val += ", and extremely quick"
                con_2()
            }
        }

        if (str < 8) {
            val += "is very weak"
            dex_1()
        } else if (str < 10) {
            val += "is a little weak"
            dex_1()
        } else if (str < 12) {
            if (dex < 8) {
                val += "is quite clumsy"
                con_1()
            } else if (dex < 10) {
                val += "is a little clumsy"
                con_1()
            } else if (dex < 12) {
                if (con < 8) {
                    val += "is quite frail."
                } else if (con < 10) {
                    val += "is a little frail."
                } else if (con < 12) {

                } else if (con < 14) {
                    val += "is pretty tough."
                } else {
                    val += "is very tough."
                }
            } else if (dex < 14) {
                val += "is fairly nimble and agile"
                con_2()
            } else {
                val += "is very nimble and agile"
                con_2()
            }
        } else if (str < 14) {
            val += "is pretty strong"
            dex_2()
        } else {
            val += "is extremely strong"
            dex_2()
        }

        return val;
    }

    static mentalDescription(int: number, wis: number, cha: number) {
        let val = ""
        if (int < 8) {
            val += "possesses very little intelligence"
        } else if (int < 10) {
            val += "is a little below average intelligence"
        } else if (int < 12) {

        } else if (int < 14) {
            val += "is smarter than average"
        } else {
            val += "has a genius-level intelligence"
        }
        if (wis < 8) {
            val += val===""?"":", "
            val += "has their head in the clouds"
        } else if (wis < 10) {
            val += val===""?"":", "
            val += "can be a little slow in perception"
        } else if (wis < 12) {

        } else if (wis < 14) {
            val += val===""?"":", "
            val += "can be pretty perceptive"
        } else {
            val += val===""?"":", "
            val += "very quickly picks up on small details"
        }
        if (cha < 8) {
            val += val===""?"":", and "
            val += "is very socially awkward."
        } else if (cha < 10) {
            val += val===""?"":", and "
            val += "is a little socially awkward."
        } else if (cha < 12) {
            if (val !== "") {
                val += "."
            }
        } else if (cha < 14) {
            val += val===""?"":", and "
            val += "is pretty charismatic."
        } else {
            val += val===""?"":", and"
            val += "is extremely charismatic."
        }
        return val
    }
}

export enum STAT_METHOD {
    FOUR_DROP_LOW,
    NPC_ARRAY,
    HEROIC_ARRAY,
}