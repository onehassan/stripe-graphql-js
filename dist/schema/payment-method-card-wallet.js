"use strict";
exports.__esModule = true;
exports.StripePaymentMethodCardWalletType = void 0;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodCardWallet', {
    fields: function (t) { return ({
        dynamicLast4: t.exposeString('dynamic_last4', {
            description: "(For tokenized numbers only.) The last four digits of the device account number.",
            nullable: true
        }),
        masterpass: t.expose('masterpass', {
            type: 'StripePaymentMethodCardWalletMasterpass',
            nullable: true
        }),
        type: t.expose('type', {
            description: "The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.",
            type: 'StripePaymentMethodCardWalletType'
        }),
        visaCheckout: t.expose('visa_checkout', {
            type: 'StripePaymentMethodCardWalletVisaCheckout',
            nullable: true
        })
    }); }
});
exports.StripePaymentMethodCardWalletType = builder_1.builder.enumType('StripePaymentMethodCardWalletType', {
    values: [
        'amex_express_checkout',
        'apple_pay',
        'google_pay',
        'masterpass',
        'samsung_pay',
        'visa_checkout'
    ]
});
