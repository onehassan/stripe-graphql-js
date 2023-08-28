"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceStatusTransitions', {
    fields: function (t) { return ({
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
    }); }
});
