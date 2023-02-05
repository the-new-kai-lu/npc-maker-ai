import * as React from "react";
import {
  PlasmicGenerateSelector,
  DefaultGenerateSelectorProps
} from "./plasmic/d_d_npc_generator/PlasmicGenerateSelector";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {useState} from "react";

export interface GenerateSelectorProps extends DefaultGenerateSelectorProps {
  generateButtonClick: Function;
}

function GenerateSelector_(props: GenerateSelectorProps, ref: HTMLElementRefOf<"div">) {
  const rest = props as DefaultGenerateSelectorProps;
  const [tavern, setTavern] = useState(false);

  return <PlasmicGenerateSelector root={{ ref }}
                                  tavern={tavern}
                                  swapView={{
                                    props: {
                                      style: {cursor: "pointer"},
                                      onClick: () => setTavern(!tavern),
                                    }
                                  }}
                                  generate={{
                                    props: {
                                      onClick: () => props.generateButtonClick()
                                    }
                                  }}
                                  {...rest} />;
}

const GenerateSelector = React.forwardRef(GenerateSelector_);
export default GenerateSelector;
