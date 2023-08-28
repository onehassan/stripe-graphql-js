"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeSubscriptionAutomaticTax', {
    description: '',
    fields: function (t) { return ({
        enabled: t.exposeBoolean('enabled', {
            description: "Whether Stripe automatically computes tax on this subscription."
        })
    }); }
});
