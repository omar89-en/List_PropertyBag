import * as React from "react";
import { IPropertybagProps } from "./IPropertybagProps";
export interface IReactHierarchyState {
    allProperty: any;
    data: any;
    Property: any;
}
export default class Propertybag extends React.Component<IPropertybagProps, IReactHierarchyState> {
    constructor(props: IPropertybagProps);
    render(): React.ReactElement<IPropertybagProps>;
    getpro(): void;
    getList1(guid: any): Promise<void>;
}
//# sourceMappingURL=Propertybag.d.ts.map