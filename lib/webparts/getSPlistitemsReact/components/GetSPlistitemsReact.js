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
import * as React from 'react';
import styles from './GetSPlistitemsReact.module.scss';
import * as jquery from 'jquery';
var GetSPlistitemsReact = /** @class */ (function (_super) {
    __extends(GetSPlistitemsReact, _super);
    function GetSPlistitemsReact(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [
                {
                    "Title": "",
                    "ContactNumber": "",
                    "CompanyName": "",
                    "Country": ""
                }
            ]
        };
        return _this;
    }
    GetSPlistitemsReact.prototype.componentDidMount = function () {
        var reactHandler = this;
        jquery.ajax({
            url: this.props.currentsiteurl + "/_api/web/lists/getbytitle('Contactlist')/items",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    items: resultData.d.results
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    GetSPlistitemsReact.prototype.render = function () {
        return (React.createElement("div", { className: styles.getSPlistitemsReact },
            React.createElement("div", { className: styles.container },
                React.createElement("table", { className: styles.rtable },
                    React.createElement("tr", { className: styles.rrow },
                        React.createElement("th", { className: styles.rheader }, "Contact Person"),
                        React.createElement("th", { className: styles.rheader }, "Contact Number"),
                        React.createElement("th", { className: styles.rheader }, "Company Name"),
                        React.createElement("th", { className: styles.rheader }, "Country")),
                    this.state.items.map(function (item, key) {
                        return (React.createElement("tr", { key: key },
                            React.createElement("td", { className: styles.rcell }, item.Title),
                            React.createElement("td", { className: styles.rcell }, item.ContactNumber),
                            React.createElement("td", { className: styles.rcell }, item.CompanyName),
                            React.createElement("td", { className: styles.rcell }, item.Country)));
                    })))));
    };
    return GetSPlistitemsReact;
}(React.Component));
export default GetSPlistitemsReact;
//# sourceMappingURL=GetSPlistitemsReact.js.map