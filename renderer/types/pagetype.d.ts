import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type LayotType<P = {}> = NextPage<P> & {
  pageLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
