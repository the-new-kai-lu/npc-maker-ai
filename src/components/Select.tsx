import * as React from "react";
import {
  PlasmicSelect,
  DefaultSelectProps
} from "./plasmic/d_d_npc_generator/PlasmicSelect";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./Select__Option";
import OptionGroup from "./Select__OptionGroup";

interface SelectProps extends DefaultSelectProps {
  // Feel free to add any additional props that this component should receive
}
function Select_(props: SelectProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSelect.useBehavior(props, ref);
  return <PlasmicSelect {...plasmicProps} />;
}

const Select = React.forwardRef(Select_);

export default Object.assign(Select, {
  Option,
  OptionGroup,
  __plumeType: "select"
});
