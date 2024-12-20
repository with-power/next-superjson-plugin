import type { GetServerSideProps } from "next";
import type { JSX } from "react";
import SuperJSON from "superjson";
export type SuperJSONProps<P> = P & {
  _superjson?: ReturnType<typeof SuperJSON.serialize>["meta"];
};
export declare function withSuperJSONProps<P extends JSX.IntrinsicAttributes>(
  gssp: GetServerSideProps<P>,
  exclude?: string[]
): GetServerSideProps<SuperJSONProps<P>>;
export declare function withSuperJSONInitProps(
  gip: any,
  exclude?: string[]
): any;
export declare function deserializeProps<P>(
  serializedProps: SuperJSONProps<P>
): P;
export declare function withSuperJSONPage<P extends JSX.IntrinsicAttributes>(
  Page: React.ComponentType<P>
): React.ComponentType<SuperJSONProps<P>>;
export declare function serialize<P>(props: P): SuperJSONProps<P>;
