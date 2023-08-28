"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceStatusTransitions', {
    fields: (t) => ({
        finalizedAt: t.exposeInt('finalized_at', {
            description: 'The time that the invoice draft was finalized.',
            nullable: true
        }),
        markedUncollectibleAt: t.exposeInt('marked_uncollectible_at', {
            description: 'The time that the invoice was marked uncollectible.',
            nullable: true
        }),
        paidAt: t.exposeInt('paid_at', {
            description: 'The time that the invoice was paid.',
            nullable: true
        }),
        voidedAt: t.exposeInt('voided_at', {
            description: 'The time that the invoice was voided.',
            nullable: true
        })
    })
});
//# sourceMappingURL=invoice-status-transitions.js.map