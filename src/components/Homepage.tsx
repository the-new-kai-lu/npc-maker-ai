import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/d_d_npc_generator/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {ALIGNMENT, NPC} from "../models/npc";
import { useState } from "react";

const dummyNPC: NPC = {
  first_name: 'Sir Reginald',
  last_name: 'Barnaby Rutherford',
  portrait: undefined,
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
  npc?: NPC | NPC[]
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
    root={{ ref }}
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
        generateButtonClick: () => {
          const dummyArray = dummyNPCs;
          setNpcArray(dummyArray)
          setNpc(dummyArray[0])
        }
      }
    }}
    {...rest}
  />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
