"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeSubscriptionItemBillingThresholds', {
    description: '',
    fields: (t) => ({
        usageGte: t.exposeInt('usage_gte', {
            description: `Usage threshold that triggers the subscription to create an invoice`,
            nullable: true
        })
    })
});
//# sourceMappingURL=subscription-item-billing-thresholds.js.map