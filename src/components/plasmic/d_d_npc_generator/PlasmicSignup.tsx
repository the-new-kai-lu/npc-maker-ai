// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b5WcywRoms9zdBws8HK6N7
// Component: 5a5YA9hEOs
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: fvt7-zOYU04/component
import Button from "../../Button"; // plasmic-import: xeFM0tPhg2-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_d_d_npc_generator.module.css"; // plasmic-import: b5WcywRoms9zdBws8HK6N7/projectcss
import sty from "./PlasmicSignup.module.css"; // plasmic-import: 5a5YA9hEOs/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: _92sYGu6Vhw/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 8d9W5hPSEbQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: pnFO32SGCAi/icon

export type PlasmicSignup__VariantMembers = {};
export type PlasmicSignup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignup__VariantsArgs;
export const PlasmicSignup__VariantProps = new Array<VariantPropType>();

export type PlasmicSignup__ArgsType = {};
type ArgPropType = keyof PlasmicSignup__ArgsType;
export const PlasmicSignup__ArgProps = new Array<ArgPropType>();

export type PlasmicSignup__OverridesType = {
  root?: p.Flex<"div">;
  apiKey?: p.Flex<typeof TextInput>;
  go?: p.Flex<typeof Button>;
  toOpenAi?: p.Flex<"div">;
};

export interface DefaultSignupProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSignup__RenderFunc(props: {
  variants: PlasmicSignup__VariantsArgs;
  args: PlasmicSignup__ArgsType;
  overrides: PlasmicSignup__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <TextInput
            data-plasmic-name={"apiKey"}
            data-plasmic-override={overrides.apiKey}
            className={classNames("__wab_instance", sty.apiKey)}
            color={"white" as const}
            placeholder={"OpenAI API Key" as const}
          />

          <Button
            data-plasmic-name={"go"}
            data-plasmic-override={overrides.go}
            className={classNames("__wab_instance", sty.go)}
            color={"softRed" as const}
            shape={"rounded" as const}
          >
            {"Get Started"}
          </Button>

          <div
            data-plasmic-name={"toOpenAi"}
            data-plasmic-override={overrides.toOpenAi}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.toOpenAi
            )}
          >
            {"Create an OpenAI Account"}
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "apiKey", "go", "toOpenAi"],
  apiKey: ["apiKey"],
  go: ["go"],
  toOpenAi: ["toOpenAi"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  apiKey: typeof TextInput;
  go: typeof Button;
  toOpenAi: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignup__VariantsArgs;
    args?: PlasmicSignup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignup__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSignup__ArgProps,
          internalVariantPropNames: PlasmicSignup__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    apiKey: makeNodeComponent("apiKey"),
    go: makeNodeComponent("go"),
    toOpenAi: makeNodeComponent("toOpenAi"),

    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
