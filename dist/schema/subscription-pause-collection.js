"use strict";
exports.__esModule = true;
var builder_1 = require("../builder");
builder_1.builder.objectType('StripeSubscriptionPauseCollection', {
    description: '',
    fields: function (t) { return ({
        behavior: t.exposeString('behavior', {
            description: 'The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.'
        }),
        resumesAt: t.exposeInt('resumes_at', {
            description: 'The time after which the subscription will resume collecting payments.',
            nullable: true
        })
    }); }
});
