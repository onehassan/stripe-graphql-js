"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodCardThreeDSecureUsage', {
    fields: function (t) { return ({
        supported: t.exposeBoolean('supported', {
            description: "Whether 3D Secure is supported on this card."
        })
    }); }
});
