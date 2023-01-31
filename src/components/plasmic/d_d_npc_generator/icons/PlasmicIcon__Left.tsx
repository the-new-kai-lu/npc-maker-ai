// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftIcon(props: LeftIconProps) {
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
          "M1129.254 1375.576l-652-651q-37-37-37-90.5t37-90.5l652-651q37-37 90.5-37t90.5 37l75 75q37 37 37 90.5t-37 90.5l-486 486 486 485q37 38 37 91t-37 90l-75 75q-37 37-90.5 37t-90.5-37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LeftIcon;
/* prettier-ignore-end */
