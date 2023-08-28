"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceCustomField', {
    fields: (t) => ({
        name: t.exposeString('name', {
            description: `The name of the custom field.`
        }),
        value: t.exposeString('value', {
            description: `The value of the custom field.`
        })
    })
});
//# sourceMappingURL=invoice-custom-field.js.map