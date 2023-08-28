"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeSubscriptionItemBillingThresholds', {
    description: '',
    fields: function (t) { return ({
        usageGte: t.exposeInt('usage_gte', {
            description: "Usage threshold that triggers the subscription to create an invoice",
            nullable: true
        })
    }); }
});
