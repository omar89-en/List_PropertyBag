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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import styles from "./Propertybag.module.scss";
import { SPHttpClient, } from "@microsoft/sp-http";
var Propertybag = /** @class */ (function (_super) {
    __extends(Propertybag, _super);
    function Propertybag(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            allProperty: [],
            data: [],
            Property: [],
        };
        if (props.guid === false) {
            _this.getpro();
        }
        else {
            _this.getList1(props.guid);
        }
        return _this;
    }
    Propertybag.prototype.render = function () {
        var _a = this.props, description = _a.description, guid = _a.guid, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        var data = this.state.allProperty;
        var Listname = this.state.Property;
        return (React.createElement("div", { className: styles.welcome },
            React.createElement("table", { className: styles.table1 },
                React.createElement("tr", null,
                    React.createElement("th", null, "Key"),
                    React.createElement("th", null, "Value")),
                data.map(function (val, key) {
                    return (React.createElement("tr", { key: key },
                        React.createElement("td", null, val.key),
                        React.createElement("td", null, val.value)));
                }),
                Listname.map(function (val, key) {
                    return (React.createElement("tr", { key: key },
                        React.createElement("td", null, val.key),
                        React.createElement("td", null, val.value)));
                }))));
    };
    Propertybag.prototype.getpro = function () {
        var _this = this;
        var libraries = [];
        this.props.spHttpClient
            .get(this.props.currentWebUrl + "/_api/web/allProperties?$select=*", SPHttpClient.configurations.v1)
            .then(function (response) {
            response.json().then(function (PropertyValues) {
                for (var key in PropertyValues) {
                    if (key != "@odata.context" &&
                        key != "@odata.editLink" &&
                        key != "@odata.id" &&
                        key != "@odata.type") {
                        libraries.push({ key: key, value: PropertyValues[key] });
                    }
                }
                _this.setState({
                    allProperty: libraries,
                });
            });
        });
    };
    Propertybag.prototype.getList1 = function (guid) {
        return __awaiter(this, void 0, void 0, function () {
            var Property;
            var _this = this;
            return __generator(this, function (_a) {
                Property = [];
                this.props.spHttpClient
                    .get(this.props.currentWebUrl + "/_api/web/lists('" + guid + "')/RootFolder/Properties", SPHttpClient.configurations.v1)
                    .then(function (response) {
                    response.json().then(function (PropertyValues) {
                        for (var key in PropertyValues) {
                            if (key != "@odata.context" &&
                                key != "@odata.editLink" &&
                                key != "@odata.id" &&
                                key != "@odata.type") {
                                Property.push({ key: key, value: PropertyValues[key] });
                            }
                        }
                        _this.setState({
                            Property: Property,
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return Propertybag;
}(React.Component));
export default Propertybag;
//# sourceMappingURL=Propertybag.js.map