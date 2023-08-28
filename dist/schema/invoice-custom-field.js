"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceCustomField', {
    fields: function (t) { return ({
        name: t.exposeString('name', {
            description: "The name of the custom field."
        }),
        value: t.exposeString('value', {
            description: "The value of the custom field."
        })
    }); }
});
