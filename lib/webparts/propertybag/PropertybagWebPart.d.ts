import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export interface IPropertybagWebPartProps {
    description: string;
    spHttpClient: any;
    currentWebUrl: any;
    guid: any;
}
export default class PropertybagWebPart extends BaseClientSideWebPart<IPropertybagWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    guid: any;
    protected onInit(): Promise<void>;
    render(): void;
    getUrlParameter(sParam: any): string | boolean;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=PropertybagWebPart.d.ts.map