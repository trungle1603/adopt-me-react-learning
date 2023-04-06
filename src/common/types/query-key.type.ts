type Route = string;
export type Params<T = any> = string | T | null | undefined;
export type QueryKey = [Route, Params];
