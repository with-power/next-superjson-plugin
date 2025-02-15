"use client";

import { SuperJSONProps, withSuperJSONPage } from "./tools";
import type { ComponentType, JSX, ReactNode } from "react";

export default function SuperJSONComponent<P extends JSX.IntrinsicAttributes>({
  component,
  props,
  children,
}: {
  component: ComponentType<P>;
  props: SuperJSONProps<P>;
  children?: ReactNode;
}) {
  const WithSuperJSON = withSuperJSONPage(component);
  return <WithSuperJSON {...props}>{children}</WithSuperJSON>;
}
