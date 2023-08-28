"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeConnectedAccounts', {
    description: 'List of Stripe Connected Account objects',
    fields: (t) => ({
        object: t.exposeString('object'),
        url: t.exposeString('url'),
        hasMore: t.exposeBoolean('has_more'),
        data: t.expose('data', {
            type: ['StripeConnectedAccount'],
            nullable: false
        })
    })
});
//# sourceMappingURL=connectedAccounts.js.map