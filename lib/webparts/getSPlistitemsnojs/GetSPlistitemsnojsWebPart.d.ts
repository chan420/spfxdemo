import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IGetSPlistitemsnojsWebPartProps {
    description: string;
}
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    ContactNumber: string;
    CompanyName: string;
    Country: string;
}
export default class GetSPlistitemsnojsWebPart extends BaseClientSideWebPart<IGetSPlistitemsnojsWebPartProps> {
    private _getMockListData;
    private _getListData;
    private _renderListAsync;
    private _renderList;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GetSPlistitemsnojsWebPart.d.ts.map