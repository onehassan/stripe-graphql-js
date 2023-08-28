"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodBillingDetails', {
    fields: function (t) { return ({
        address: t.expose('address', {
            description: "Billing address.",
            type: 'StripeAddress',
            nullable: true
        }),
        email: t.exposeString('email', {
            description: "Email address.",
            nullable: true
        }),
        name: t.exposeString('name', {
            description: "Full name.",
            nullable: true
        }),
        phone: t.exposeString('phone', {
            description: "Billing phone number (including extension).",
            nullable: true
        })
    }); }
});
