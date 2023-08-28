"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethodCardThreeDSecureUsage', {
    fields: (t) => ({
        supported: t.exposeBoolean('supported', {
            description: `Whether 3D Secure is supported on this card.`
        })
    })
});
//# sourceMappingURL=payment-method-card-three-d-secure-usage.js.map