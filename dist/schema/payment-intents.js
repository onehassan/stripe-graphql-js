"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentIntents', {
    fields: (t) => ({
        object: t.exposeString('object'),
        url: t.exposeString('url'),
        hasMore: t.exposeBoolean('has_more'),
        data: t.expose('data', {
            type: ['StripePaymentIntent'],
            nullable: false
        })
    })
});
//# sourceMappingURL=payment-intents.js.map