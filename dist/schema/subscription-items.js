"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeSubscriptionItems', {
    fields: (t) => ({
        object: t.exposeString('object'),
        url: t.exposeString('url', {
            description: `The URL where this list can be accessed.`
        }),
        hasMore: t.exposeBoolean('has_more', {
            description: `True if this list has another page of items after this one that can be fetched.`
        }),
        data: t.expose('data', {
            type: ['StripeSubscriptionItem'],
            nullable: false
        })
    })
});
//# sourceMappingURL=subscription-items.js.map