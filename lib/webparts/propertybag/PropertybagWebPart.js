var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "PropertybagWebPartStrings";
import Propertybag from "./components/Propertybag";
var PropertybagWebPart = /** @class */ (function (_super) {
    __extends(PropertybagWebPart, _super);
    function PropertybagWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = "";
        return _this;
    }
    PropertybagWebPart.prototype.onInit = function () {
        this._environmentMessage = this._getEnvironmentMessage();
        this.guid = this.getUrlParameter("guid");
        return _super.prototype.onInit.call(this);
    };
    PropertybagWebPart.prototype.render = function () {
        var element = React.createElement(Propertybag, {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
            spHttpClient: this.context.spHttpClient,
            currentWebUrl: this.context.pageContext.web.absoluteUrl,
            guid: this.getUrlParameter("guid"),
        });
        ReactDom.render(element, this.domElement);
    };
    PropertybagWebPart.prototype.getUrlParameter = function (sParam) {
        var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split("&"), sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined
                    ? true
                    : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };
    PropertybagWebPart.prototype._getEnvironmentMessage = function () {
        if (!!this.context.sdks.microsoftTeams) {
            // running in Teams
            return this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentTeams
                : strings.AppTeamsTabEnvironment;
        }
        return this.context.isServedFromLocalhost
            ? strings.AppLocalEnvironmentSharePoint
            : strings.AppSharePointEnvironment;
    };
    PropertybagWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        this.domElement.style.setProperty("--bodyText", semanticColors.bodyText);
        this.domElement.style.setProperty("--link", semanticColors.link);
        this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered);
    };
    PropertybagWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(PropertybagWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    PropertybagWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return PropertybagWebPart;
}(BaseClientSideWebPart));
export default PropertybagWebPart;
//# sourceMappingURL=PropertybagWebPart.js.map