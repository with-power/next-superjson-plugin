"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { withSuperJSONPage } from "./tools";
export default function SuperJSONComponent({ component, props, children, }) {
    const WithSuperJSON = withSuperJSONPage(component);
    return _jsx(WithSuperJSON, { ...props, children: children });
}
//# sourceMappingURL=client.js.map