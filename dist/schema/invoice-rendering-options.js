"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceRenderingOptions', {
    fields: (t) => ({
        amountTaxDisplay: t.exposeString('amount_tax_display', {
            description: 'How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.',
            nullable: true
        })
    })
});
//# sourceMappingURL=invoice-rendering-options.js.map