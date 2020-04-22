import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IGetSPlistitemsReactWebPartProps {
    description: string;
}
export default class GetSPlistitemsReactWebPart extends BaseClientSideWebPart<IGetSPlistitemsReactWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GetSPlistitemsReactWebPart.d.ts.map