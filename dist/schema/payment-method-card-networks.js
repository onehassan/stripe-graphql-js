"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodCardNetworks', {
    fields: (t) => ({
        available: t.exposeStringList('available', {
            description: `All available networks for the card.`
        }),
        preferred: t.exposeString('preferred', {
            description: `The preferred network for the card.`,
            nullable: true
        })
    })
});
//# sourceMappingURL=payment-method-card-networks.js.map