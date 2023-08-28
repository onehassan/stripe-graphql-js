"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceLineItemTaxAmount', {
    fields: function (t) { return ({
        amount: t.exposeInt('amount', {
            description: "The amount, in %s, of the tax."
        }),
        inclusive: t.exposeBoolean('inclusive', {
            description: "Whether this tax amount is inclusive or exclusive."
        })
        // todo: tax rate
        // issues because tax_rate can be a string or TaxRate
        // taxRate: t.expose('tax_rate', {
        //   type: 'StripeTaxRate'
        // })
    }); }
});
