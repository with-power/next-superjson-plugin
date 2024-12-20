import { SuperJSONProps } from "./tools";
import type { ComponentType, JSX, ReactNode } from "react";
export default function SuperJSONComponent<P extends JSX.IntrinsicAttributes>({
  component,
  props,
  children,
}: {
  component: ComponentType<P>;
  props: SuperJSONProps<P>;
  children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
