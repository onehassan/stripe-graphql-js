"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeSubscriptionAutomaticTax', {
    description: '',
    fields: (t) => ({
        enabled: t.exposeBoolean('enabled', {
            description: `Whether Stripe automatically computes tax on this subscription.`
        })
    })
});
//# sourceMappingURL=subscription-automatic-tax.js.map