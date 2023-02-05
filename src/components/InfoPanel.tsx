// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicInfoPanel,
  DefaultInfoPanelProps
} from "./plasmic/d_d_npc_generator/PlasmicInfoPanel";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { NPC } from "../models/npc";

export interface InfoPanelProps extends DefaultInfoPanelProps {
  npc?: NPC;
}

function heightConversion(heightInInches: number): string {
  const inches = heightInInches % 12;
  const feet = (heightInInches - inches) / 12;
  return `${feet} ft ${inches} in`;
}

function InfoPanel_(props: InfoPanelProps, ref: HTMLElementRefOf<"div">) {
  const rest = props as DefaultInfoPanelProps;
  const npc = props.npc;

  if (!npc) {
    return <div></div>
  }

  return <PlasmicInfoPanel
    root={{ ref }}
    name2={{ props: { children: `${npc.first_name} ${npc.last_name}`} }}
    name={{ props: { children: `${npc.last_name}, ${npc.first_name}` } }}
    age={{ props: { children: npc.age } }}
    gender={{ props: { children: npc.gender ? 'Male' : 'Female' } }}
    height={{ props: { children: heightConversion(npc.height_inches) } }}
    height2={{ props: { children: `${npc.weight_lbs} lbs` } }}
    descriptionBox={{ props: { children: <p>{npc.physical_description}</p> } }}
    str={{ props: { children: npc.str } }}
    dex={{ props: { children: npc.dex } }}
    con={{ props: { children: npc.con } }}
    int={{ props: { children: npc.int } }}
    wis={{ props: { children: npc.wis } }}
    cha={{ props: { children: npc.cha } }}
    alignment={{ props: { children: npc.alignment } }}
    job={{ props: { children: npc.class } }}
    personalityBox={{ props: { children: <p>{npc.personality_description}</p> } }}
    historyBox={{ props: { children: <p>{npc.history}</p> } }}
    plotBox={{ props: { children: <p>{npc.plot_hook}</p> } }}
    {...rest}
  />;
}

const InfoPanel = React.forwardRef(InfoPanel_);
export default InfoPanel;
