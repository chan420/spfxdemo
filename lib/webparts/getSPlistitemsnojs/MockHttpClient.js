var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function (restUrl, options) {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock Contact Person', ContactNumber: '9840462655', CompanyName: 'Jenkins', Country: 'India' }];
    return MockHttpClient;
}());
export default MockHttpClient;
//# sourceMappingURL=MockHttpClient.js.map