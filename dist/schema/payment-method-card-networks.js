"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodCardNetworks', {
    fields: function (t) { return ({
        available: t.exposeStringList('available', {
            description: "All available networks for the card."
        }),
        preferred: t.exposeString('preferred', {
            description: "The preferred network for the card.",
            nullable: true
        })
    }); }
});
