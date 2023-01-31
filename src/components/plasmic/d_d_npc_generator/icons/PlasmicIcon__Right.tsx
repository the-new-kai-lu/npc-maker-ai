// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RightIcon(props: RightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -256 1792 1792"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1448.288 626.983q0 52-37 91l-652 651q-37 37-90 37t-90-37l-76-75q-37-39-37-91 0-53 37-90l486-486-486-485q-37-39-37-91 0-53 37-90l76-75q36-38 90-38t90 38l652 651q37 37 37 90z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RightIcon;
/* prettier-ignore-end */
