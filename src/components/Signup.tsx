import * as React from "react";
import {
  PlasmicSignup,
  DefaultSignupProps
} from "./plasmic/d_d_npc_generator/PlasmicSignup";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {useState} from "react";

export interface SignupProps extends DefaultSignupProps {
  setKey: (key: string) => void,
}

function Signup_(props: SignupProps, ref: HTMLElementRefOf<"div">) {
  const rest = props as DefaultSignupProps;
  const [key, setKey] = useState("");

  return <PlasmicSignup root={{ ref }}
                        apiKey={{
                          value: key,
                          onKeyDown: (e) => {
                            if (e.key === 'Enter') {
                              if (key !== "") {
                                props.setKey(key)
                              }
                            }
                          },
                          onChange: (e) => setKey(e.target.value)
                        }}
                        go={{
                          onClick: () => {
                            if (key !== "") {
                              props.setKey(key)
                            }
                          }
                        }}
                        toOpenAi={{
                          wrap: (content) => <a href={"https://beta.openai.com/signup"} target={"_blank"} rel="noreferrer">{content}</a>
                        }}
                        {...rest} />;
}

const Signup = React.forwardRef(Signup_);
export default Signup;
