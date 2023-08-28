"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodCardWalletMasterpass', {
    fields: function (t) { return ({
        billingAddress: t.expose('billing_address', {
            description: "Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.",
            type: 'StripeAddress',
            nullable: true
        }),
        email: t.exposeString('email', {
            description: "Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.",
            nullable: true
        }),
        name: t.exposeString('name', {
            description: "Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.",
            nullable: true
        }),
        shippinAddress: t.expose('shipping_address', {
            description: "Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.",
            type: 'StripeAddress',
            nullable: true
        })
    }); }
});
