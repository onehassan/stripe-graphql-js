"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeCustomerTax', {
    fields: (t) => ({
        // todo: implement correct enum
        // automaticTax: t.expose('automatic_tax', {
        //   type: 'StripeCustomerTaxAutomaticTax',
        //   nullable: true
        // }),
        ipAddress: t.exposeString('ip_address', {
            description: `A recent IP address of the customer used for tax reporting and tax location inference.`,
            nullable: true
        }),
        location: t.expose('location', {
            description: `The customer's location as identified by Stripe Tax.`,
            type: 'StripeCustomerTaxLocation',
            nullable: true
        })
    })
});
// type AutomaticTax = 'failed' | 'not_collecting' | 'supported' | 'unrecognized_location'
//# sourceMappingURL=customer-tax.js.map