"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceLineItemPeriod', {
    fields: (t) => ({
        start: t.exposeInt('start', {
            description: `The start of the period.`
        }),
        end: t.exposeInt('end', {
            description: `The end of the period, which must be greater than or equal to the start.`
        })
    })
});
//# sourceMappingURL=invoice-line-item-period.js.map