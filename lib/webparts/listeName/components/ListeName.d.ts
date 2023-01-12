import * as React from "react";
import { IListeNameProps } from "./IListeNameProps";
export interface IReactHierarchyState {
    data: any;
}
export default class ListeName extends React.Component<IListeNameProps, IReactHierarchyState> {
    constructor(props: IListeNameProps);
    render(): React.ReactElement<IListeNameProps>;
    getList(): Promise<void>;
}
//# sourceMappingURL=ListeName.d.ts.map