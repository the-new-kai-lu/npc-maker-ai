import * as React from "react";
import {useState} from "react";
import {DefaultHomepageProps, PlasmicHomepage} from "./plasmic/d_d_npc_generator/PlasmicHomepage";
import {HTMLElementRefOf} from "@plasmicapp/react-web";
import {ALIGNMENT, NPC, RACE} from "../models/npc";
import {build_single_npc} from "../services/build_npc";
import {formatInput} from "../services/format_data";
import {DescriptionWriter} from "../services/openai";

const dummyNPC: NPC = {
  first_name: 'Sir Reginald',
  last_name: 'Barnaby Rutherford',
  portrait: undefined,
  race: RACE.HUMAN,
  age: 76,
  gender: true,
  height_inches: 72,
  weight_lbs: 160,
  str: 18,
  dex: 14,
  con: 10,
  int: 12,
  wis: 11,
  cha: 17,
  alignment: ALIGNMENT.LN,
  class: 'Knight',
  physical_description: 'Old knight guy',
  personality_description: 'HUUUUUUUURRRRRAHHHH',
  history: 'Campaigns, crusades, wars, oh my',
  plot_hook: 'foobar',
}

const dummyNPCs: NPC[] = [{
  first_name: 'Some',
  last_name: 'Guy',
  portrait: undefined,
  race: RACE.HUMAN,
  age: 21,
  gender: true,
  height_inches: 72,
  weight_lbs: 140,
  str: 18,
  dex: 14,
  con: 10,
  int: 12,
  wis: 11,
  cha: 17,
  alignment: ALIGNMENT.LN,
  class: 'Farmer',
  physical_description: 'foobar',
  personality_description: 'foobar',
  history: 'foobar',
  plot_hook: 'foobar',
},
{
  first_name: 'Sir Reginald',
  last_name: 'Barnaby Rutherford',
  portrait: undefined,
  age: 76,
  gender: true,
  race: RACE.HUMAN,
  height_inches: 72,
  weight_lbs: 160,
  str: 18,
  dex: 14,
  con: 10,
  int: 12,
  wis: 11,
  cha: 17,
  alignment: ALIGNMENT.LN,
  class: 'Knight',
  physical_description: 'Old knight guy',
  personality_description: 'HUUUUUUUURRRRRAHHHH',
  history: 'Campaigns, crusades, wars, oh my',
  plot_hook: 'foobar',
}]

export interface HomepageProps extends DefaultHomepageProps {
  k: string,
}

let index = 0;

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const rest = props as DefaultHomepageProps;
  const [npcArray, setNpcArray] = useState<NPC[] | undefined>(undefined);
  const [npc, setNpc] = useState<NPC | undefined>(undefined);

  function setPrevNpc(): void {
    if (!npcArray) {
      return;
    }

    index--;
    if (index < 0) {
      index = npcArray.length - 1;
    }

    setNpc(npcArray[index]);
  }

  function setNextNpc(): void {
    if (!npcArray) {
      return;
    }

    index++;
    if (index >= npcArray.length) {
      index = 0;
    }

    setNpc(npcArray[index]);
  }

  return <PlasmicHomepage
    root={{ ref,  }}
    left={{
      props: {
        style: { opacity: npcArray && npcArray.length > 1 ? 1 : 0 },
        click: () => setPrevNpc()
      }
    }}
    right={{
      props: {
        style: { opacity: npcArray && npcArray.length > 1 ? 1 : 0 },
        click: () => setNextNpc()
      }
    }}
    info={{ props: { npc: npc } }}
    generateSelector={{
      props: {
        generateButtonClick: (data) => {
          if (data.tavern) {
            // TODO
          } else {
            build_single_npc(formatInput(data.input), props.k).then(npc => setNpc(npc))
          }
        }
      }
    }}
    {...rest}
  />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
