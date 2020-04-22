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
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './GetSPlistitemsnojsWebPart.module.scss';
import * as strings from 'GetSPlistitemsnojsWebPartStrings';
import { SPHttpClient } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import MockHttpClient from './MockHttpClient';
var GetSPlistitemsnojsWebPart = /** @class */ (function (_super) {
    __extends(GetSPlistitemsnojsWebPart, _super);
    function GetSPlistitemsnojsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetSPlistitemsnojsWebPart.prototype._getMockListData = function () {
        return MockHttpClient.get(this.context.pageContext.web.absoluteUrl).then(function () {
            var listData = {
                value: [
                    { Title: 'Mock Contact Person', ContactNumber: '9840462655', CompanyName: 'Jenkins', Country: 'India' },
                    { Title: 'Mock Contact Person', ContactNumber: '9840462655', CompanyName: 'Jenkins', Country: 'India' },
                    { Title: 'Mock Contact Person', ContactNumber: '9840462655', CompanyName: 'Jenkins', Country: 'India' },
                ]
            };
            return listData;
        });
    };
    GetSPlistitemsnojsWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('Contactlist')/Items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    GetSPlistitemsnojsWebPart.prototype._renderListAsync = function () {
        var _this = this;
        if (Environment.type === EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    GetSPlistitemsnojsWebPart.prototype._renderList = function (items) {
        var html = "<table cellpadding=\"5\" class=\"" + styles.rtable + "\">\n        <tr class=\"" + styles.rrow + "\">\n            <th clsss=\"" + styles.rheader + "\">Contact Person</th>\n            <th clsss=\"" + styles.rheader + "\">Contact Number</th>\n            <th clsss=\"" + styles.rheader + "\">Company Name</th>\n            <th clsss=\"" + styles.rheader + "\">Country</th>\n        </tr>\n        ";
        items.forEach(function (item) {
            html += "\n        <tr>\n            <td clsss=\"" + styles.rcell + "\">" + item.Title + "</td>\n            <td clsss=\"" + styles.rcell + "\">" + item.ContactNumber + "</td>\n            <td clsss=\"" + styles.rcell + "\">" + item.CompanyName + "</td>\n            <td clsss=\"" + styles.rcell + "\">" + item.Country + "</td>\n        </tr>\n        ";
        });
        html += '</table>';
        var listContainer = this.domElement.querySelector('#spListItems');
        listContainer.innerHTML = html;
    };
    GetSPlistitemsnojsWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.getSPlistitemsnojs + "\">\n          <div id=\"spListItems\" class=\"" + styles.container + "\"/>\n      </div>";
        this._renderListAsync();
    };
    Object.defineProperty(GetSPlistitemsnojsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    GetSPlistitemsnojsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return GetSPlistitemsnojsWebPart;
}(BaseClientSideWebPart));
export default GetSPlistitemsnojsWebPart;
//# sourceMappingURL=GetSPlistitemsnojsWebPart.js.map