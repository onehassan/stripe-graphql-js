"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceLineItemPeriod', {
    fields: function (t) { return ({
        start: t.exposeInt('start', {
            description: "The start of the period."
        }),
        end: t.exposeInt('end', {
            description: "The end of the period, which must be greater than or equal to the start."
        })
    }); }
});
