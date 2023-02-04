import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/d_d_npc_generator/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {NPC} from "../models/npc";

export interface HomepageProps extends DefaultHomepageProps {
  npc?: NPC | NPC[]
}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const rest = props as DefaultHomepageProps;

  return <PlasmicHomepage root={{ ref }} {...rest} />;
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
