"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceAutomaticTax', {
    fields: (t) => ({
        enabled: t.exposeBoolean('enabled', {
            description: `Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or \`tax_behavior=unspecified\`) cannot be added to automatic tax invoices.`
        }),
        status: t.exposeString('status', {
            description: `The status of the most recent automated tax calculation for this invoice.`,
            nullable: true
        })
    })
});
//# sourceMappingURL=invoice-automatic-tax.js.map