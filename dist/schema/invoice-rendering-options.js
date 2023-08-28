"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceRenderingOptions', {
    fields: function (t) { return ({
        amountTaxDisplay: t.exposeString('amount_tax_display', {
            description: 'How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.',
            nullable: true
        })
    }); }
});
