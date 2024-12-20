import { jsx as _jsx } from "react/jsx-runtime";
// original tool source from 'babel-plugin-superjson-next'
import hoistNonReactStatics from "hoist-non-react-statics";
import SuperJSON from "superjson";
export function withSuperJSONProps(gssp, exclude = []) {
    return async function withSuperJSON(...args) {
        const result = await gssp(...args);
        if (!("props" in result)) {
            return result;
        }
        if (!result.props) {
            return result;
        }
        const excludedPropValues = exclude.map((propKey) => {
            const value = result.props[propKey];
            delete result.props[propKey];
            return value;
        });
        const { json, meta } = SuperJSON.serialize(result.props);
        const props = json;
        if (meta) {
            props._superjson = meta;
        }
        exclude.forEach((key, index) => {
            const excludedPropValue = excludedPropValues[index];
            if (typeof excludedPropValue !== "undefined") {
                props[key] = excludedPropValue;
            }
        });
        return {
            ...result,
            props,
        };
    };
}
export function withSuperJSONInitProps(gip, exclude = []) {
    return async function withSuperJSON(...args) {
        const result = await gip(...args);
        const excludedPropValues = exclude.map((propKey) => {
            const value = result[propKey];
            delete result[propKey];
            return value;
        });
        const { json, meta } = SuperJSON.serialize(result);
        const props = json;
        if (meta) {
            props._superjson = meta;
        }
        exclude.forEach((key, index) => {
            const excludedPropValue = excludedPropValues[index];
            if (typeof excludedPropValue !== "undefined") {
                props[key] = excludedPropValue;
            }
        });
        return {
            ...result,
            ...props,
        };
    };
}
export function deserializeProps(serializedProps) {
    const { _superjson, ...props } = serializedProps;
    return SuperJSON.deserialize({ json: props, meta: _superjson });
}
export function withSuperJSONPage(Page) {
    function WithSuperJSON(serializedProps) {
        return _jsx(Page, { ...deserializeProps(serializedProps) });
    }
    hoistNonReactStatics(WithSuperJSON, Page);
    return WithSuperJSON;
}
export function serialize(props) {
    const { json, meta: _superjson } = SuperJSON.serialize(props);
    return {
        ...json,
        _superjson,
    };
}
//# sourceMappingURL=tools.js.map