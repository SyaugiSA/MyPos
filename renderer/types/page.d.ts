import { NextPage } from "next";
import * as React from "react";

export type LayoutType<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  layout?: React.ComponentType;
};
