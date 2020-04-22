import * as React from 'react';
import { IGetSPlistitemsReactProps } from './IGetSPlistitemsReactProps';
export interface IReactGetItemsState {
    items: [{
        "Title": "";
        "ContactNumber": "";
        "CompanyName": "";
        "Country": "";
    }];
}
export default class GetSPlistitemsReact extends React.Component<IGetSPlistitemsReactProps, IReactGetItemsState> {
    constructor(props: IGetSPlistitemsReactProps, state: IReactGetItemsState);
    componentDidMount(): void;
    render(): React.ReactElement<IGetSPlistitemsReactProps>;
}
//# sourceMappingURL=GetSPlistitemsReact.d.ts.map